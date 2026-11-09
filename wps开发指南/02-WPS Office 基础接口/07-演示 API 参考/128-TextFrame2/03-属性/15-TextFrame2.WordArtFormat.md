# TextFrame2.WordArtFormat

返回或设置指定文本框架的艺术字类型。可读/写。



## 语法

express.**WordArtFormat**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoPresetTextEffect

## 说明


 **WordArtFormat** 属性的值可以是 **[MsoPresetTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPresetTextEffect)** 常量之一。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个形状中文本框架的艺术字类型设置为msoTextEffect20。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).TextFrame2.WordArtFormat = msoTextEffect20
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状中文本框架的艺术字类型是否为msoTextEffect8。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.TextFrame2.WordArtFormat == msoTextEffect8)
}
```
