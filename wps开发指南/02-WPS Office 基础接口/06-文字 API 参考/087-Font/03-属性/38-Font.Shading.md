# Font.Shading

返回一个 **Shading** 对象，该对象代表指定字体的底纹格式。



## 语法

express.**Shading**

express   一个代表 **Font** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例将第一个文档中第一段的文字的底纹背景颜色设置为蓝色。*/
function test() {
    let font = Documents.Item(1).Paragraphs.Item(1).Range.Font
    font.Shading.BackgroundPatternColor = wdColorBlue
}
```


```JavaScript
/*本示例设置所选内容的文本的底纹纹理和底纹前景色。*/
function test() {
    let shading = Selection.Font.Shading
    shading.Texture = wdTexture22Pt5Percent
    shading.ForegroundPatternColorIndex = wdPink
}
```
