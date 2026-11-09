# PdfRange 对象

表示 PDF 文档中一段选区范围。

## 说明


单个 **PdfRange** 同时描述：

* **页面位置**：`PageIndex`（页索引，从 0 开始）及矩形 `Left`/`Top`/`Width`/`Height`（单位 pt）
* **文字范围**：`StartIndex`/`EndIndex`（页面文本字符索引）

通常通过 `doc.Selection.Range`（**PdfRanges**）的 `Item(index)` 取得；创建高亮等注释时，将 **PdfRanges** 传入 `CreateHighlightAnnot` 等方法。

> **坐标系说明**：矩形属性与 `SetRect()` 使用 **PDF 标准坐标系（左下角为原点，Y 轴向上）**，与 **Annot** 一致；与 **FormField**、**Image**（左上角原点）不同。

## 示例


```JavaScript
var range = app.ActiveDocument.Selection.Range.Item(1);
console.log("页码索引: " + range.PageIndex);
range.PageIndex = 0;
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [SetRect](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRange/member/SetRect) | 批量设置范围的矩形区域。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [PageIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRange/member/PageIndex) | 获取或设置范围所在的页面索引（从 0 开始）。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRange/member/Left) | 获取或设置范围矩形的左边坐标（pt，**PDF 坐标系**，原点在页面左下角）。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRange/member/Top) | 获取或设置范围矩形的下边 y 坐标（pt，**PDF 坐标系**，原点在页面左下角，值越大越靠近页面顶部）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRange/member/Width) | 获取或设置范围矩形的宽度（pt）。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRange/member/Height) | 获取或设置范围矩形的高度（pt）。 |
| [StartIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRange/member/StartIndex) | 获取或设置范围的起始字符索引。 |
| [EndIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfRange/member/EndIndex) | 获取或设置范围的结束字符索引。 |
