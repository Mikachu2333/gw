# ParagraphFormat.Shading

返回一个 **[Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shading/obj)** 对象，该对象代表指定对象的底纹格式。



## 语法

express.**Shading**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例设置所选段落的底纹纹理。*/
function test() {
    Selection.ParagraphFormat.Shading.Texture = wdTexture12Pt5Percent
}
```


```JavaScript
/*本示例设置活动文档的所有段落的底纹纹理、底纹前景色和底纹背景色。*/
function test() {
    let shading = ActiveDocument.Paragraphs.Format.Shading
    shading.Texture = wdTexture30Percent
    shading.ForegroundPatternColor = wdColorTeal
    shading.BackgroundPatternColor = wdColorDarkRed
}
```
