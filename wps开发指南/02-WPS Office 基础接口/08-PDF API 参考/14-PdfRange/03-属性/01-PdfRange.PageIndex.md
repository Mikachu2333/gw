# PdfRange.PageIndex

获取或设置范围所在的页面索引（从 0 开始）。 **Long** 类型，可读写。

## 语法

express.**PageIndex**

express   一个代表 **PdfRange** 对象的变量。

## 类型

long

## 示例

```JavaScript
var range = app.ActiveDocument.Selection.Range.Item(1);
console.log("页码索引: " + range.PageIndex);
range.PageIndex = 0;
```
