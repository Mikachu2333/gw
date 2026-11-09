# Shape.TextEffect

返回一个 **[TextEffectFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/obj)** 对象，该对象包含指定形状的文本效果格式属性。只读。



## 语法

express.**TextEffect**

express   一个代表 **Shape** 对象的变量。

## 类型

TextEffectFormat

## 说明


适用于代表艺术字的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个（艺术字）形状的字形设置为加粗。*/
function test() {
    let textEffectFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextEffect
    textEffectFormat.FontBold = msoTrue
}
```


```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片的第一个（艺术字）形状中的字体名称。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    shape.TextEffect.FontName = "黑体"
}
```
