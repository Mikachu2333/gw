# PdfRanges.Item

根据索引获取范围对象。

## 语法

express.**Item**

express   一个代表 **PdfRanges** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Index | long | 范围索引（从 1 开始） |

## 返回值

`PdfRange` — 范围对象

## 示例

```JavaScript
var ranges = app.ActiveDocument.Selection.Range;
var range = ranges.Item(1);
console.log("页码索引: " + range.PageIndex);
```
