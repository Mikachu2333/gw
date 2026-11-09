# Annots 对象

通过 `page.Annots` 访问指定页面上的注释集合（`page` 为 **Page** 对象，通常由 `doc.Pages.Item(页码)` 取得，页码从 **1** 开始）。

## 说明


> 本章 **调用示例** 若使用 `page` 变量，默认表示：`var page = app.ActiveDocument.Pages.Item(1);`

## 示例


```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var count = page.Annots.Count;
console.log("注释数量: " + count);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/Item) | 根据索引获取注释对象。 |
| [CreateHighlightAnnot](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateHighlightAnnot) | 创建文本高亮注释。 |
| [CreateUnderlineAnnot](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateUnderlineAnnot) | 创建文本下划线注释。 |
| [CreateStrikeOutAnnot](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateStrikeOutAnnot) | 创建文本删除线注释。 |
| [CreateSquigglyAnnot](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateSquigglyAnnot) | 创建文本波浪线注释。 |
| [CreateInsertAnnot](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateInsertAnnot) | 创建插入符号注释。 |
| [CreateReplaceAnnot](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateReplaceAnnot) | 创建替换文本注释。 |
| [CreateAreaHighlightAnnot](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateAreaHighlightAnnot) | 创建区域高亮注释。 |
| [CreateLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateLine) | 创建直线注释。 |
| [CreateArrow](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateArrow) | 创建箭头注释。 |
| [CreateCircle](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateCircle) | 创建圆/椭圆注释。 |
| [CreateSquare](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateSquare) | 创建矩形注释。 |
| [CreatePolygon](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreatePolygon) | 创建多边形注释。 |
| [CreatePolyline](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreatePolyline) | 创建折线注释。 |
| [CreateCloudy](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateCloudy) | 创建云朵注释。 |
| [CreateFreeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateFreeText) | 创建文本框注释。 |
| [CreateTypeWriter](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateTypeWriter) | 创建文字批注。JSON 参数字段与 **CreateFreeText** 相同，但渲染为无边框打字机样式。 |
| [CreateFreeTextCallOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateFreeTextCallOut) | 创建指示批注。 |
| [CreateStamp](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateStamp) | 创建图章注释。 |
| [CreateLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateLink) | 创建超链接注释。 |
| [CreateMediaAnnot](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateMediaAnnot) | 创建媒体注释。 |
| [CreateMeasureDistance](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateMeasureDistance) | 创建距离测量注释。 |
| [CreateMeasurePerimeter](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateMeasurePerimeter) | 创建周长测量注释。 |
| [CreateMeasureArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateMeasureArea) | 创建面积测量注释。 |
| [CreateAffix](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/CreateAffix) | 创建图章注释，通过 Base64 编码的图片数据在指定位置添加图片图章。 |
| [ImportAnnots](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/ImportAnnots) | 从 FDF 文件导入注释。 |
| [ExportAnnots](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/ExportAnnots) | 导出当前文档所有注释。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Annots/member/Count) | 获取注释数量。 |
