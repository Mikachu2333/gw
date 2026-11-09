# PdfColor 对象

`PdfColor` 对象表示 RGB 颜色值。

## 说明


通常通过 `annot.Color` 或 `annot.FillColor` 获取。

## 示例


```JavaScript
var color = app.ActiveDocument.Pages.Item(1).Annots.Item(1).Color;
color.R = 255;
color.G = 128;
color.B = 0;
console.log("R=" + color.R);
```

{#objmember}

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [R](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfColor/member/R) | 获取或设置红色分量。 |
| [G](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfColor/member/G) | 获取或设置绿色分量。 |
| [B](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/PdfColor/member/B) | 获取或设置蓝色分量。 |
