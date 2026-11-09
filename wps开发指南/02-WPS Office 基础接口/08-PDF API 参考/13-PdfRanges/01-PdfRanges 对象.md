# PdfRanges 对象

表示文档选区的范围集合，包含一个或多个 **PdfRange** 片段。

## 说明


**PdfRanges** 为只读集合，最常见来源是 `doc.Selection.Range`。用户选中跨页或多段文本时，`Count` 可能大于 1；使用 `Item(index)`（从 **1** 开始）遍历各 **PdfRange**。

## 示例


```JavaScript
var ranges = app.ActiveDocument.Selection.Range;
console.log("选区范围数: " + ranges.Count);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRanges/member/Item) | 根据索引获取范围对象。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRanges/member/Count) | 获取范围数量。 |
