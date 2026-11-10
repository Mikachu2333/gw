function gwPresetFont(key) {
  withUndo("设置" + key + "字体", function() {
    applyFont(gwLoadSettings().字体[key]);
  });
}
function gwToggleFont(property) {
  withUndo("设置文字格式", function() {
    var f = sel().Font;
    f[property] = f[property] ? 0 : (property === "EmphasisMark" ? 4 : -1);
  });
}
function gwFontNames() {
  var out = [];
  try {
    var all = app().FontNames;
    for (var i = 1; i <= all.Count; i++) out.push(String(all.Item(i)));
  } catch (e) {
  }
  return out;
}
function gwCheckFont(name) {
  var fonts = gwFontNames();
  gwLog('info', 'font.availability', { name: name, installed: fonts.length ? fonts.indexOf(name) >= 0 : null });
  if (fonts.length && fonts.indexOf(name) < 0) alert("本机未安装「" + name + "」，WPS 将使用替代字体。");
}
function gwFontSwitch(from, to) {
  gwCheckFont(to);
  withUndo("替换字体", function() {
    var matched = false;
    from.forEach(function(name) {
      // 西文字体与东亚字体独立存储；分别匹配，避免把原本的 Times New Roman 也改掉。
      ['NameAscii', 'NameOther', 'NameFarEast'].forEach(function(property) {
        gwStep('字体转换 Find.Font.' + property, function () {
          var f = doc().Content.Duplicate.Find;
          f.ClearFormatting(); f.Replacement.ClearFormatting();
          try {
            f.Font[property] = name; f.Replacement.Font[property] = to;
            var found = !!f.Execute('', false, false, false, false, false, true, 0, true, '^&', 2);
            matched = found || matched;
            gwLog('info', 'font.replace', { source: name, target: to, property: property, matched: found });
          } finally { f.ClearFormatting(); f.Replacement.ClearFormatting(); }
        });
      });
    });
    status(matched ? '字体转换已完成：' + from.join(' / ') + ' → ' + to : '未找到使用指定原字体的文字：' + from.join(' / '));
  });
}
function gwLatinFont(kind, name) {
  var r = scopeOrNull();
  if (!r) return;
  gwCheckFont(name);
  withUndo("指定字体更改", function() {
    var f = r.Duplicate.Find;
    f.ClearFormatting();
    f.Replacement.ClearFormatting();
    try {
      f.Replacement.Font.Name = name;
      f.Execute(kind === "digits" ? "[0-9]@" : "[A-Za-z]@", false, false, true, false, false, true, 0, true, "^&", 2);
    } finally {
      f.ClearFormatting();
      f.Replacement.ClearFormatting();
    }
  });
}
function gwStyles() {
  withUndo("创建或刷新公文样式", function() {
    var s = gwLoadSettings(), specs = [["公文:标题", "公文标题", 10, 1, 0], ["公文:正文", "正文", 10, 0, 0], ["公文:正文(缩进)", "正文", 10, 0, 2], ["公文:1级标题", "一级标题", 1, 0, 0], ["公文:2级标题", "二级标题", 2, 0, 0], ["公文:3级标题", "三级标题", 3, 0, 0], ["公文:4级标题", "四级标题", 4, 0, 0]];
    specs.forEach(function(x) {
      var st;
      for (var i = 1; i <= doc().Styles.Count; i++) {
        var c = doc().Styles.Item(i);
        if (c.NameLocal === x[0]) {
          st = c;
          break;
        }
      }
      if (!st) st = doc().Styles.Add(x[0], 1);
      setRangeFont(st, s.字体[x[1]]);
      st.ParagraphFormat.OutlineLevel = x[2];
      st.ParagraphFormat.Alignment = x[3];
      st.ParagraphFormat.CharacterUnitFirstLineIndent = x[4];
      if (x[2] <= 4) {
        var cfg = GW_HEADINGS[x[2]];
        st.LinkToListTemplate(gwFindListTemplate(cfg, 1) || gwCreateListTemplate(cfg, 1), 1);
      }
    });
    status("已创建或刷新七个公文样式。");
  });
}
function gwNumbersToText() {
  if (!window.confirm("全文自动编号将转为文字，无法继续自动编号。是否继续？")) return;
  withUndo("编号转文字", function() {
    doc().Content.ListFormat.ConvertNumbersToText();
  });
}
function gwSimpleReplace(find, repl, wild) {
  var r = scopeOrNull();
  if (r) withUndo("文字替换", function() {
    wordReplace(!!wild, find, repl, r);
  });
}
function gwRemoveLinks() {
  var r = scopeOrNull();
  if (r) withUndo("移除超链接", function() {
    for (var i = r.Hyperlinks.Count; i > 0; i--) r.Hyperlinks.Item(i).Delete();
  });
}
function gwDeleteGraphics() {
  var r = scopeOrNull();
  if (!r) return;
  withUndo("删除图形", function() {
    for (var i = r.InlineShapes.Count; i > 0; i--) r.InlineShapes.Item(i).Delete();
    for (var j = doc().Shapes.Count; j > 0; j--) {
      var sh = doc().Shapes.Item(j), a = sh.Anchor;
      if (a.StoryType === r.StoryType && a.Start >= r.Start && a.Start < r.End) sh.Delete();
    }
  });
}
function gwFramesToText() {
  var r = scopeOrNull();
  if (!r) return;
  withUndo("文本框转文字", function() {
    for (var i = doc().Shapes.Count; i > 0; i--) {
      var sh = doc().Shapes.Item(i), a = sh.Anchor;
      if (sh.Type !== 17 || a.StoryType !== r.StoryType || a.Start < r.Start || a.Start >= r.End) continue;
      var d = a.Duplicate;
      d.Collapse(0);
      d.FormattedText = sh.TextFrame.TextRange.FormattedText;
      sh.Delete();
    }
  });
}
function gwPageBreakBefore() {
  withUndo("段前分页", function() {
    sel().ParagraphFormat.PageBreakBefore = sel().ParagraphFormat.PageBreakBefore ? 0 : -1;
  });
}
function gwInsertText(text) {
  withUndo("插入符号", function() {
    sel().TypeText(text);
  });
}
function gwCircleNumber() {
  var t = String(sel().Text).trim(), n = Number(t);
  if (!/^\d+$/.test(t) || n < 1 || n > 20) throw new Error("请选中一个 1–20 的数字。");
  gwInsertText(String.fromCharCode(9312 + n - 1));
}
function gwBrackets(k) {
  var r = scopeOrNull();
  if (!r) return;
  withUndo("转换六角括号", function() {
    if (k === "square") {
      wordReplace(true, "\\[([0-9]{1,4})\\]", "〔\\1〕", r);
      wordReplace(true, "［([0-9]{1,4})］", "〔\\1〕", r);
    } else wordReplace(true, "【([0-9]{1,4})】", "〔\\1〕", r);
  });
}
function gwInsertDate() {
  withUndo("插入日期", function() {
    applyFont(gwLoadSettings().字体.正文);
    var d = /* @__PURE__ */ new Date();
    sel().TypeText(d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日\r");
  });
}
function gwLandscapePage() {
  if (!ensureMainView()) return;
  withUndo("插入横页", function() {
    sel().Collapse(0);
    sel().InsertBreak(2);
    sel().PageSetup.Orientation = 1;
    sel().InsertBreak(2);
    sel().PageSetup.Orientation = 0;
  });
}
function gwInsertRedLine() {
  if (!ensureMainView()) return;
  withUndo("插入间隔线", function() {
    var b = sel().ParagraphFormat.Borders.Item(-3);
    b.LineStyle = 1;
    b.LineWidth = 18;
    b.Color = 255;
  });
}
function gwImprint(rows) {
  if (!ensureMainView()) return;
  withUndo("插入版记", function() {
    var t = doc().Tables.Add(sel().Range, rows, 1);
    t.PreferredWidthType = 2;
    t.PreferredWidth = 100;
    t.Rows.Height = 28.5;
    t.Rows.Alignment = 0;
    t.Rows.RelativeVerticalPosition = 0;
    t.Rows.VerticalPosition = -999997;
    t.Borders.Enable = 0;
    [-1, -3].forEach(function(e) {
      var b2 = t.Borders.Item(e);
      b2.LineStyle = 1;
      b2.LineWidth = 8;
    });
    if (rows > 1) {
      var b = t.Borders.Item(-5);
      b.LineStyle = 1;
      b.LineWidth = 6;
    }
    t.Range.Cells.VerticalAlignment = 1;
    setRangeFont(t.Range, gwLoadSettings().字体.版记);
  });
}
// 独立 DOCX 从原版模板自动提取，不依赖 BuildingBlockEntries 的宿主实现。
function gwInsertPart(name) {
    if (!ensureMainView()) return;
    var files = { '版头:单行发文机关':'head-single', '版头:联合发文机关':'head-multi',
        '版头:函线(上沿)':'line-top', '版头:函线(下沿)':'line-bottom', '装订线':'binding-line' };
    var file = gwNativeAsset('templates/' + files[name] + '.docx');
    withUndo('插入公文部件', function () {
        sel().Collapse(0);
        sel().InsertFile(file, '', false, false, false);
    });
}
function gwStamp(link) {
  if (!ensureMainView()) return;
  var p = app().FileDialog(3);
  p.Title = link ? "选择链接的公章图片" : "选择嵌入的公章图片";
  p.AllowMultiSelect = false;
  if (p.Show() !== -1) return;
  var file = p.SelectedItems.Item(1);
  withUndo("插入公章", function() {
    var pic = sel().Range.InlineShapes.AddPicture(file, !!link, !link);
    pic.ConvertToShape().WrapFormat.Type = 3;
  });
}
