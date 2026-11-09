# Frame.Shading

返回一个 **Shading** 对象，该对象代表指定对象的底纹格式。



## 语法

express.**Shading**

express   一个代表 **Frame** 对象的变量。

## 类型

Shading

## 示例


```JavaScript
/*本示例向活动文档中添加一个新框架，并设置其底纹的背景色。*/
function test() {
    let frame = ActiveDocument.Frames.Add(Selection.Range)
    frame.Shading.BackgroundPatternColor = wdColorGray20
}
```


```JavaScript
/*本示例设置所选内容中第二个框架的底纹纹理和底纹背景颜色。*/
function test() {
    let frame = Selection.Frames.Item(2)
    frame.Shading.Texture = wdTexture22Pt5Percent
    frame.Shading.BackgroundPatternColorIndex = wdRed
}
```
