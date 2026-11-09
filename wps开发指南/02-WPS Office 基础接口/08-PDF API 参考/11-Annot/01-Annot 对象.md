# Annot 对象

代表 WPS PDF 中的单个注释对象。

## 说明

通过 page.Annots.Item(i) 获取页面上的注释。Annot 对象提供注释的类型、内容、样式（颜色、线型、透明度）等属性，以及删除、打开/关闭注释弹窗等操作方法。
**Annot** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。

## 示例


```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.Item(1);
console.log("注释类型: " + annot.Type);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Delete) | 删除当前注释。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Open) | 打开注释。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Close) | 关闭注释。 |
| [SetColorRGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/SetColorRGB) | 设置注释的边框/线条颜色。 |
| [SetFillColorRGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/SetFillColorRGB) | 设置注释的填充颜色。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Type) | 获取注释类型。 |
| [Content](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Content) | 获取或设置注释内容文本。 |
| [Subject](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Subject) | 获取或设置注释主题。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Title) | 获取或设置注释标题（作者）。 |
| [Opacity](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Opacity) | 获取或设置注释不透明度（取值范围 0–100，0 为完全透明，100 为完全不透明）。 |
| [LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/LineStyle) | 获取或设置注释的线型。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/Color) | 获取注释的颜色对象。 |
| [FillColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/FillColor) | 获取注释的填充颜色对象。 |
| [ModifyDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annot/member/ModifyDate) | 获取注释的最后修改日期。 |
