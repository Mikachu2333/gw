// 离线加载项使用经典脚本，避免 file:// 模块/Worker 跨源限制；legacy 自带旧 Chromium 补丁。
import {build} from '../wps-js/node_modules/esbuild/lib/main.js';
import {mkdirSync,copyFileSync,cpSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../wps-js/',import.meta.url));
const output=root+'vendor/pdfjs';mkdirSync(output,{recursive:true});
await build({stdin:{contents:`import * as api from 'pdfjs-dist/legacy/build/pdf.mjs';
import {WorkerMessageHandler} from 'pdfjs-dist/legacy/build/pdf.worker.mjs';
globalThis.pdfjsWorker={WorkerMessageHandler};globalThis.gwPdfJs=api;`,resolveDir:root},
    bundle:true,format:'iife',platform:'browser',target:'chrome104',outfile:output+'/renderer.js',minify:true,
    define:{'import.meta.url':'""'},logLevel:'warning'});
for(const folder of ['cmaps','standard_fonts'])cpSync(root+'node_modules/pdfjs-dist/'+folder,output+'/'+folder,{recursive:true});
copyFileSync(root+'node_modules/pdfjs-dist/LICENSE',output+'/LICENSE');
console.log('离线 PDF.js 渲染器已生成。');
