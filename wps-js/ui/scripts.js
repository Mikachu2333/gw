var list=document.getElementById('scripts'),scriptHistory=document.getElementById('history'),inputs={};
var result=document.getElementById('result'),output=document.getElementById('output'),running=false;
function fillHistory() {
    scriptHistory.length=1;
    gwMacroHistory().forEach(function(id){var m=gwMacroById(id),o=document.createElement('option');o.value=id;o.textContent=m.name;scriptHistory.appendChild(o);});
}
function fillList() {
    var previous=list.value,query=document.getElementById('search').value.trim();list.textContent='';
    GW_MACROS.filter(function(m){return (m.name+m.group).indexOf(query)>=0;}).forEach(function(m){
        var option=document.createElement('option');option.value=m.id;
        option.textContent='['+m.group+'] '+m.name+(m.unavailable?'（未移植）':m.adapted?'（适配版）':'');list.appendChild(option);
    });
    if(Array.prototype.some.call(list.options,function(o){return o.value===previous;}))list.value=previous;
    if(list.selectedIndex<0 && list.options.length)list.selectedIndex=0;
    selectScript();
}
function selectScript() {
    var container=document.getElementById('params'),run=document.getElementById('run');container.textContent='';inputs={};result.textContent='';output.hidden=true;
    if(!list.value){document.getElementById('name').textContent='没有匹配的脚本';document.getElementById('note').textContent='';run.disabled=true;return;}
    var item=gwMacroById(list.value);document.getElementById('name').textContent=item.name;
    document.getElementById('note').textContent=item.unavailable || item.note || (item.access==='any'?'将通过文件选择框选择处理对象。':item.access==='read'?'从当前文档生成结果。':'处理当前文档，可用撤销恢复文字和格式修改。');
    run.disabled=!!item.unavailable;
    (item.params || []).forEach(function(p){
        var label=document.createElement('label'),caption=document.createElement('span'),el=document.createElement('input');caption.textContent=p.label;
        el.type=p.type==='text'?'text':'number';el.value=p.value;el.setAttribute('aria-label',p.label);
        if(el.type==='number'){el.min=p.min;el.max=p.max;el.step=p.type==='integer'?1:'any';el.required=true;}
        if(p.key==='find')el.required=true;
        inputs[p.key]=el;label.appendChild(caption);label.appendChild(el);container.appendChild(label);
    });
}
document.getElementById('search').oninput=fillList;
list.onchange=selectScript;
scriptHistory.onchange=function(){if(!scriptHistory.value)return;document.getElementById('search').value='';fillList();list.value=scriptHistory.value;selectScript();};
document.getElementById('scriptForm').onsubmit=function(event){
    event.preventDefault();if(running || !list.value)return;
    var id=list.value,params={};Object.keys(inputs).forEach(function(k){params[k]=inputs[k].value;});
    running=true;document.getElementById('run').disabled=true;result.textContent='正在处理…';result.style.color='';output.hidden=true;
    try {
        var done=gwMacroRun(id,params);
        result.textContent=done===false?'操作已取消。':done.message;
        if(done && done.partial)result.style.color='#a52525';
        if(done && done.output){output.value=done.output;output.hidden=false;}
        fillHistory();
    } catch(e) {
        gwLogError('脚本窗口 '+id,e);var saved=gwWriteDiagnostics();
        result.style.color='#a52525';result.textContent=(e.message || String(e))+(saved.path?'\n诊断日志：'+saved.path:'');
    } finally {
        running=false;document.getElementById('run').disabled=false;
        try{gwHost('ribbonUI').Invalidate();}catch(e){}
    }
};
document.getElementById('close').onclick=function(){window.close();};
var unavailable=GW_MACROS.filter(function(m){return m.unavailable;}).length;
document.getElementById('counts').textContent='共 '+GW_MACROS.length+' 项，'+(GW_MACROS.length-unavailable)+' 项可运行（含适配版），'+unavailable+' 项未移植。';
fillHistory();fillList();
gwLog('info','scripts.load',{reference:GW_MACRO_REFERENCE,available:GW_MACROS.length-unavailable});
