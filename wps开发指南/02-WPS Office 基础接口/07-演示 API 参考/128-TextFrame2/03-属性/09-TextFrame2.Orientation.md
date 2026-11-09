# TextFrame2.Orientation

返回或设置一个值，该值代表文本框方向。可读/写。



## 语法

express.**Orientation**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoTextOrientation

## 说明


 **Orientation** 属性的值可以是 **[MsoTextOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTextOrientation)** 常量之一。

某些常量可能不可用，这取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个形状内的文本方向设置为水平。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).TextFrame2.Orientation = msoTextOrientationHorizontal
}
```


```JavaScript
/*本示例判断如果活动窗口选定的第一张幻灯片中标题文本方向不是msoTextOrientationUpward，则将其切换为msoTextOrientationVertical。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Title.TextFrame2
    if (textFrame2.Orientation != msoTextOrientationUpward) {
        textFrame2.Orientation = msoTextOrientationVertical
    }
}
```
