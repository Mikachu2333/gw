# PdfRange.EndIndex

获取或设置范围的结束字符索引。 **Long** 类型，可读写。

## 语法

express.**EndIndex**

express   一个代表 **PdfRange** 对象的变量。

## 类型

long

## 示例

```JavaScript
var range = app.ActiveDocument.Selection.Range.Item(1);
range.EndIndex = 20;
console.log("结束字符索引: " + range.EndIndex);
```
