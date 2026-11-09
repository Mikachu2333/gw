# Shading 对象

包含某一对象的底纹属性。

## 说明


使用 **Shading** 属性可返回 **Shading** 对象。


## 示例


```JavaScript
/*本示例对活动文档中的第一段应用纯灰色底纹。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Shading.Texture = wdTexture10Percent
}
```


```JavaScript
/*本示例对所选内容应用具有不同前景色和背景色的底纹。*/
function test() {
    let shading = Selection.Range.Shading
    shading.Texture = wdTexture20Percent
    shading.ForegroundPatternColorIndex = wdBlue
    shading.BackgroundPatternColorIndex = wdYellow
}
```


```JavaScript
/*本示例对活动文档中第一张表格的第一个单元格应用竖线纹理。*/
function test() {
    ActiveDocument.Tables.Item(1).Cell(1, 1).Shading.Texture = wdTextureVertical
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BackgroundPatternColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shading/member/BackgroundPatternColor) | 返回或设置应用于 **Shading** 对象背景色的 24 位颜色。可读写。 |
| [BackgroundPatternColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shading/member/BackgroundPatternColorIndex) | 返回或设置应用于 **Shading** 对象的背景色。 **WdColorIndex** 类型，可读写。 |
| [ForegroundPatternColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shading/member/ForegroundPatternColor) | 返回或设置应用于 **Shading** 对象的前景的 24 位颜色。该颜色应用于底纹图案的点和线的颜色。可读写。 |
| [ForegroundPatternColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shading/member/ForegroundPatternColorIndex) | 返回或设置 **Shading** 对象的前景色。该颜色是应用于底纹图案的点和线的颜色。 **WdColorIndex** ，可读写。 |
| [Texture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shading/member/Texture) | 返回或设置指定对象的底纹纹理。 **WdTextureIndex** 类型，可读写。 |