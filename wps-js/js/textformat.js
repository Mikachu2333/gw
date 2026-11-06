// 段落与文字清理类命令，逐条对应 src\Ribbon1.Format.cs / Ribbon1.Layout.cs。

function gwFirstLineIndent2() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    withUndo('首行缩进2字符', function () {
        // 必须用 CharacterUnitFirstLineIndent：按字符缩进才不会随字号变化（AGENTS.md 明确约束）
        sel().ParagraphFormat.CharacterUnitFirstLineIndent = 2;
    });
}

function gwParagraphFlush() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    withUndo('段落顶格', function () {
        var pf = sel().ParagraphFormat;
        pf.CharacterUnitFirstLineIndent = 0;
        pf.FirstLineIndent = 0;
        pf.LeftIndent = 0;
        pf.CharacterUnitLeftIndent = 0;
    });
}

function gwDeleteSpaces() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var range = scopeOrNull('删除空白');
    if (range === null) return;
    withUndo('删除空白', function () {
        wordReplace(false, '^w', '', range);
        wordReplace(false, '　', '', range);      // 全角空格 U+3000
    });
}

// 删除空行：判据与 C# 一致 —— 段落文本去掉空白后为空，且段落里没有图形
// （有图的"空行"是插图所在段，删掉就把图删了）。删除必须从后往前，
// 否则前面的段落一变，后面拿到的 Range 全部失效。
function gwDeleteEmptyLines(selectionOnly) {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var paras;
    if (selectionOnly) {
        if (sel().Characters.Count <= 1) { alert('请先选中要处理的范围。'); return; }
        paras = sel().Paragraphs;
    } else {
        paras = doc().Paragraphs;
    }
    var doomed = [];
    for (var i = 1; i <= paras.Count; i++) {
        var p = paras.item(i);
        var text = '';
        try { text = p.Range.Text || ''; } catch (e) { continue; }
        if (text.replace(/[\r\n\t 　]/g, '').length > 0) continue;
        var shapes = 0;
        try { shapes = p.Range.ShapeRange.Count; } catch (e2) { shapes = 0; }
        if (shapes === 0) doomed.push(p);
    }
    if (!doomed.length) { app().StatusBar = '没有需要删除的空行'; return; }
    withUndo(selectionOnly ? '删除选区空行' : '删除空行', function () {
        for (var j = doomed.length - 1; j >= 0; j--) {
            try { doomed[j].Range.Delete(); } catch (e) { /* 段落已失效 */ }
        }
        app().StatusBar = '已删除 ' + doomed.length + ' 个空行!';
    });
}

function gwLineBreakToParagraph() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var range = scopeOrNull('换行符转回车');
    if (range === null) return;
    withUndo('换行符转回车', function () { wordReplace(false, '^l', '^p', range); });
}

// 断行重排：把行尾没有句读的软回车接回上一段（^13@ 是通配模式下的回车串）
function gwReflowLines() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var range = scopeOrNull('断句重排');
    if (range === null) return;
    withUndo('断句重排', function () { wordReplace(true, '([!。：！？])^13@', '\\1', range); });
}

function gwSpaceBetweenCnEn() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var range = scopeOrNull('中英文之间添加空格');
    if (range === null) return;
    withUndo('中英文之间添加空格', function () {
        // 汉字区间 [㐀-﨩] 与 C# 完全一致（U+3400–U+FA29），改动会漏掉或误伤字符
        // 区间用码点拼而不是把生僻字面字符写进源码：那两个字符经过编辑器/管道/编码转换
        // 时容易被吃掉，而区间一旦缺了上界，匹配范围会静默缩小、命令看起来"没效果"。
        var cnClass = '[' + String.fromCharCode(0x3400) + '-' + String.fromCharCode(0xFA29) + ']';
        wordReplace(true, '([A-Za-z])(' + cnClass + ')', '\\1 \\2', range);
        wordReplace(true, '(' + cnClass + ')([A-Za-z])', '\\1 \\2', range);
    });
}

var PUNCT_EN = [',', ';', ':', '?', '!', '-', '~', '(', ')', '[', ']'];
var PUNCT_CN = ['，', '；', '：', '？', '！', '—', '～', '（', '）', '［', '］'];
var CN2EN_FROM = ['。', '，', '；', '：', '？', '！', '—', '～', '（', '）', '［', '］', '“', '”', '‘', '’'];
var CN2EN_TO = ['.', ',', ';', ':', '?', '!', '-', '~', '(', ')', '[', ']', '"', '"', "'", "'"];

function gwPunctEnToCn() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var range = scopeOrNull('标点符号(英转中)');
    if (range === null) return;
    withUndo('标点符号(英转中)', function () {
        wordReplace(true, '([!0-9])\\.([!0-9])', '\\1。\\2', range);
        for (var i = 0; i < PUNCT_EN.length; i++) wordReplace(false, PUNCT_EN[i], PUNCT_CN[i], range);
        // C# 版这里还有一步成对引号转换 " (*) " → “\1”，但被 !IsWps 挡着：
        // WPS 的查找替换对成对引号处理不同会误替换。本加载项只跑在 WPS 上，所以不做。
    });
}

function gwPunctCnToEn() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var opts = app().Options;
    var quotesChanged = false;
    try {
        if (opts.AutoFormatAsYouTypeReplaceQuotes) {
            var dr = window.confirm('检测到会自动更正引号。\n点“确定”将临时关闭该自动更正并转换，完成后自动恢复；\n点“取消”则不执行。');
            if (!dr) return;
            opts.AutoFormatAsYouTypeReplaceQuotes = false;
            quotesChanged = true;
        }
        var range = scopeOrNull('标点符号(中转英)');
        if (range === null) { if (quotesChanged) opts.AutoFormatAsYouTypeReplaceQuotes = true; return; }
        withUndo('标点符号(中转英)', function () {
            for (var i = 0; i < CN2EN_FROM.length; i++) wordReplace(false, CN2EN_FROM[i], CN2EN_TO[i], range);
        });
    } catch (e) {
        showError(e, '标点符号(中转英)');
    } finally {
        // 临时关掉的自动更正必须恢复，否则用户的全局输入行为被永久改掉
        if (quotesChanged) { try { opts.AutoFormatAsYouTypeReplaceQuotes = true; } catch (e2) { } }
    }
}
