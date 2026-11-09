# PdfRanges.Count

获取范围数量。 **Long** 类型，只读。

## 语法

express.**Count**

express   一个代表 **PdfRanges** 对象的变量。

## 类型

long

## 示例

```JavaScript
var ranges = app.ActiveDocument.Selection.Range;
console.log("选区范围数: " + ranges.Count);
```
