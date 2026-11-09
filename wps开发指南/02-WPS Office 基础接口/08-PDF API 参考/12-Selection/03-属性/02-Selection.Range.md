# Selection.Range

获取选区范围集合（**PdfRanges**），集合中每个 **PdfRange** 描述一段选区的页码、矩形与字符索引。创建高亮等文本类注释时，常将此属性传给 `Annots.CreateHighlightAnnot` 等方法。 **PdfRanges** 类型，只读。

## 语法

express.**Range**

express   一个代表 **Selection** 对象的变量。

## 类型

PdfRanges

## 示例

```JavaScript
var ranges = app.ActiveDocument.Selection.Range;
for (var i = 1; i <= ranges.Count; i++) {
    var range = ranges.Item(i);
    console.log("页码: " + range.PageIndex);
}
```
