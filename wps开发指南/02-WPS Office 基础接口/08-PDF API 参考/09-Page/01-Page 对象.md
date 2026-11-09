# Page 对象

代表 WPS PDF 中的 **Page** 对象。

## 说明

代表 PDF 文档中的一个页面，通过 `Pages.Item(i)`（1 起始）获取。页面尺寸（`Width`/`Height`）单位为磅（pt）。页面内坐标系为 **PDF 坐标系**：原点在页面左下角，X 轴向右，Y 轴向上，所有坐标单位均为 pt。

**Page** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。

## 示例


```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
console.log("注释数量: " + page.AnnotCount);
```

{#objmember}

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AnnotCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Page/member/AnnotCount) | 获取页面上的注释数量。 |
| [Annots](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Page/member/Annots) | 获取页面的注释集合对象。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Page/member/Width) | 获取页面宽度，单位为磅（pt）。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Page/member/Height) | 获取页面高度，单位为磅（pt）。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Page/member/Text) | 获取页面的文本内容。 |
