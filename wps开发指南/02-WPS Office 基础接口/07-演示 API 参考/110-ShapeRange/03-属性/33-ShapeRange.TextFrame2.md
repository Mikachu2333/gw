# ShapeRange.TextFrame2

返回与指定的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象相关联的 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/obj)** 对象，前者包含指定的形状范围的对齐和定位属性。只读。



## 语法

express.**TextFrame2**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

TextFrame2

## 说明


使用 **TextFrame2** 对象的 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/TextRange)** 属性可返回文本框架中的文本。

使用 **[HasTextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/HasTextFrame)** 属性来确定是否形状范围包含文本框架，然后再尝试获取 **TextFrame2** 属性值。



## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片中添加一个矩形，向该矩形中添加文本，然后设置文本框的上边距。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddShape(msoShapeRectangle, 180, 175, 350, 140).Select()
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    textFrame2.TextRange.Text = "NewShape"
    textFrame2.MarginTop = 10
}
```


```JavaScript
/*本示例显示活动窗口上选中的形状是否包含文本。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.TextFrame2.HasText == msoTrue)
}
```
