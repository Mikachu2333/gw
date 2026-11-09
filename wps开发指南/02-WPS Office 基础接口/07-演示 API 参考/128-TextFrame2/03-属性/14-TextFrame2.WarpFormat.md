# TextFrame2.WarpFormat

返回或设置指定文本框的弯曲类型。可读/写 **MsoWarpFormat** 。



## 语法

express.**WarpFormat**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoWarpFormat

## 说明


 **WarpFormat** 属性的值可以是 **[MsoWarpFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoWarpFormat)** 常量之一。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个形状中文本框的弯曲类型设置为msoWarpFormat15。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).TextFrame2.WarpFormat = msoWarpFormat15
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状中文本框的弯曲类型是否为msoWarpFormat34。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.TextFrame2.WarpFormat == msoWarpFormat34)
}
```
