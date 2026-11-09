# Annots.CreateReplaceAnnot

创建替换文本注释。

## 语法

express.**CreateReplaceAnnot**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Ranges | PdfRanges | 当前选区的范围集合，通常取自 `doc.Selection.Range`；须先在文档中选中文字 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var ranges = app.ActiveDocument.Selection.Range;
var annot = page.Annots.CreateReplaceAnnot(ranges);
```
