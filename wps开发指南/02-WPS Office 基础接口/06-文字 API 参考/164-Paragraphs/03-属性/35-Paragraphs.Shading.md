# Paragraphs.Shading

返回一个 **Shading** 对象，该对象代表指定段落的底纹格式。



## 语法

express.**Shading**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例对所选内容的所有段落应用黄色底纹。*/
function test() {
    let shading = Selection.Paragraphs.Shading
    shading.Texture = wdTexture12Pt5Percent
    shading.BackgroundPatternColorIndex = wdYellow
    shading.ForegroundPatternColorIndex = wdBlack
}
```


```JavaScript
/*本示例对第一个文档的所有段落应用青绿色背景底纹。*/
function test() {
    let shading = Documents.Item(1).Paragraphs.Shading
    shading.BackgroundPatternColor = wdColorTurquoise
}
```
