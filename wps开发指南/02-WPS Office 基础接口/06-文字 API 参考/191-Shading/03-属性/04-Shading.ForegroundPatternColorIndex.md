# Shading.ForegroundPatternColorIndex

返回或设置 **Shading** 对象的前景色。该颜色是应用于底纹图案的点和线的颜色。 **WdColorIndex** ，可读写。



## 语法

express.**ForegroundPatternColorIndex**

express   一个代表 **Shading** 对象的变量。

## 类型

WdColorIndex

## 示例


```JavaScript
/*本示例为选定内容的底纹设置不同的前景色和背景色。*/
function test() {
    let shading = Selection.Range.Shading
    shading.Texture = wdTexture30Percent
    shading.ForegroundPatternColorIndex = wdBlue
    shading.BackgroundPatternColorIndex = wdYellow
}
```


```JavaScript
/*本示例设置活动文档第一段的底纹纹理和底纹前景色。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Shading.Texture = wdTextureDarkDiagonalDown
    range.Shading.ForegroundPatternColorIndex = wdRed
}
```
