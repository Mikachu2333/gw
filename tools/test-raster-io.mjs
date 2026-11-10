// 模拟旧版 WPS 的文本专用 WriteFile、未实现/返回空值的读取接口及二进制桥接失败。
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createContext,Script} from 'node:vm';
const code=new Script(readFileSync(new URL('../wps-js/js/image-pdf.js',import.meta.url),'utf8'));
function host(){
    const files=new Map(),events=[];
    let writes=0,textWrites=0;
    const fs={
        Exists:path=>files.has(path),Remove:path=>files.delete(path),
        WriteFile(path,value){textWrites++;if(typeof value==='string')files.set(path,new TextEncoder().encode(value));},
        writeAsBinaryString(path,value){assert.equal(typeof value,'string');writes++;files.set(path,Uint8Array.from(value,c=>c.charCodeAt(0)));return true;},
        ReadFileAsArrayBuffer(){return undefined;},readAsBinaryString(){return undefined;},
        ReadFile(path){if(!files.has(path))return undefined;return Buffer.from(files.get(path)).toString('latin1');}
    };
    const c=createContext({Uint8Array,ArrayBuffer,TextEncoder,Blob,gwHost:()=>fs,
        gwLog:(...e)=>events.push(e),gwStep:(label,work)=>work(),gwLogError:(...e)=>events.push(e)});
    code.runInContext(c);
    return {c,fs,files,events,get writes(){return writes;},get textWrites(){return textWrites;}};
}
let count=0;
function check(name,test){test();count++;console.log('PASS:',name);}
const path='C:/Users/Test/桌面/WWW_图片型.pdf';
check('legacy text-only WriteFile is never used; binary writer round-trips every byte including NUL and a multi-chunk payload',()=>{
    const h=host(),bytes=Uint8Array.from({length:180000},(_,i)=>i%256);
    h.c.gwWriteBytes(path.replaceAll('/','\\'),bytes);
    assert.equal(h.writes,1);assert.equal(h.textWrites,0);
    assert.deepEqual(h.files.get(path),bytes);
    assert.ok(h.events.some(e=>e[1]==='raster.verify' && e[2].method==='ReadFile' && e[2].fallback));
});
check('optional buffer reader throwing does not prevent binary-string fallback',()=>{
    const h=host(),bytes=new Uint8Array([0,1,128,255]);
    h.fs.ReadFileAsArrayBuffer=()=>{throw Error('unsupported');};
    h.fs.readAsBinaryString=p=>Buffer.from(h.files.get(p)).toString('latin1');
    h.c.gwWriteBytes(path,bytes);assert.deepEqual(h.c.gwReadBytes(path),bytes);
});
check('partial buffer reads are rejected and verified through a second reader',()=>{
    const h=host(),bytes=new Uint8Array([37,80,68,70,0,255]);
    h.fs.ReadFileAsArrayBuffer=p=>h.files.get(p).slice(0,4).buffer;
    h.c.gwWriteBytes(path,bytes);
    assert.ok(h.events.some(e=>e[1]==='raster.verify' && e[2].method==='ReadFile'));
});
check('typed-array read preserves byte offset and length',()=>{
    const h=host(),padded=new Uint8Array([99,1,2,3,88]);
    h.fs.ReadFileAsArrayBuffer=()=>padded.subarray(1,4);
    assert.deepEqual(h.c.gwReadBytes(path),new Uint8Array([1,2,3]));
});
check('undefined write return is accepted only after successful byte verification',()=>{
    const h=host(),write=h.fs.writeAsBinaryString;
    h.fs.writeAsBinaryString=(p,data)=>{write(p,data);};
    h.c.gwWriteBytes(path,new Uint8Array([10,255]));
    assert.equal(h.files.get(path).length,2);
    const noop=host();noop.fs.writeAsBinaryString=()=>undefined;
    assert.throws(()=>noop.c.gwWriteBytes(path,new Uint8Array([1])),/无法读取或校验/);
    assert.ok(!noop.events.some(e=>e[1]==='raster.verify'));
});
check('a silent corrupt/partial output is removed and never reported as verified',()=>{
    const h=host();h.fs.writeAsBinaryString=p=>{h.files.set(p,new Uint8Array([63]));};
    assert.throws(()=>h.c.gwWriteBytes(path,new Uint8Array([1,2,3])),/字节不一致/);
    assert.equal(h.files.has(path),false);assert.ok(!h.events.some(e=>e[1]==='raster.verify'));
});
check('existing files are preserved, and explicit false write results fail',()=>{
    const h=host();h.files.set(path,new Uint8Array([42]));
    assert.throws(()=>h.c.gwWriteBytes(path,new Uint8Array([1])),/已存在/);
    assert.deepEqual(h.files.get(path),new Uint8Array([42]));assert.equal(h.writes,0);
    h.files.clear();h.fs.writeAsBinaryString=()=>false;
    assert.throws(()=>h.c.gwWriteBytes(path,new Uint8Array([1])),/返回失败/);
});
check('missing binary writer fails clearly instead of falling back to unsafe text writes',()=>{
    const h=host();delete h.fs.writeAsBinaryString;
    assert.throws(()=>h.c.gwWriteBytes(path,new Uint8Array([1])),/writeAsBinaryString/);
    assert.equal(h.textWrites,0);assert.equal(h.files.size,0);
});
check('Unicode-decoded byte strings are rejected instead of silently truncating high bytes',()=>{
    const h=host();h.fs.readAsBinaryString=()=> '中';h.fs.ReadFile=()=>undefined;
    assert.throws(()=>h.c.gwReadBytes(path),/非字节字符/);
});
console.log(`PASS: ${count} binary I/O behavior groups.`);
