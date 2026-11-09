# Range.Shading

返回一个 **Shading** 对象，该对象代表指定对象的底纹格式。



## 语法

express.**Shading**

express   一个代表 **Range** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例对所选内容的第一段应用黄色底纹。*/
function test() {
    let shading = Selection.Paragraphs.Item(1).Range.Shading
    shading.Texture = wdTexture12Pt5Percent
    shading.BackgroundPatternColorIndex = wdYellow
    shading.ForegroundPatternColorIndex = wdBlack
}
```


```JavaScript
/*本示例将活动文档中第一个单词的底纹设置为 10%。*/
function test() {
    ActiveDocument.Words.Item(1).Shading.Texture = wdTexture10Percent
}
```
