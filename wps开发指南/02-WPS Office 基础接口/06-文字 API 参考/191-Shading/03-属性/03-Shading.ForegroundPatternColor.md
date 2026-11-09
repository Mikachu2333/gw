# Shading.ForegroundPatternColor

返回或设置应用于 **Shading** 对象的前景的 24 位颜色。该颜色应用于底纹图案的点和线的颜色。可读写。



## 语法

express.**ForegroundPatternColor**

express   一个代表 **Shading** 对象的变量。

## 类型

WdColor

## 说明


可以是任何有效的 **WdColor** 常量或 **RGB** 函数返回的值。



## 示例


```JavaScript
/*本示例将深红色背景上带灰蓝色点的底纹应用于选定内容。*/
function test() {
    let shading = Selection.Range.Shading
    shading.Texture = wdTexture30Percent
    shading.ForegroundPatternColor = wdColorTeal
    shading.BackgroundPatternColor = wdColorDarkRed
}
```


```JavaScript
/*本示例设置活动文档第一段的底纹纹理和底纹前景色。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Shading.Texture = wdTexture70Percent
    range.Shading.ForegroundPatternColor = RGB(255, 0, 0)
}
```
