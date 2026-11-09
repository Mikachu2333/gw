# TextFrame 对象

代表 **Shape** 对象中的文本框架。包含文本框架中的文本以及控制文本框架的对齐和定位的属性和方法。

## 说明


使用 **TextFrame** 属性可返回一个 **TextFrame** 对象。


## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片中添加一个矩形，向矩形中添加文本，然后设置文本框架的边距。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textFrame = slide.Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame
    textFrame.TextRange.Text = "Here is some test text"
    textFrame.MarginBottom = 10
    textFrame.MarginLeft = 10
    textFrame.MarginRight = 10
    textFrame.MarginTop = 10
}
```
使用 **[HasTextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/HasTextFrame)** 属性可确定形状中是否具有文字框架，使用 **[HasText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/HasText)** 属性可确定文本框架中是否包含文本。



```JavaScript
/*本示例判断如果活动演示文稿第一张幻灯片包含文本框架，且文本框架里包含文本，则显示文本内容。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        let shape = slide.Shapes.Item(i)
        if (shape.HasTextFrame && shape.TextFrame.HasText) {
            alert(shape.TextFrame.TextRange.Text)
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [DeleteText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/DeleteText) | 删除与指定形状相关联的文本。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/Application) | 返回表示指定对象的创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象。 |
| [AutoSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/AutoSize) | 返回或设置一个值，该值指示是否自动更改指定形状的大小以使其中的文本适应边界。可读/写。 |
| [HasText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/HasText) | 返回一个值，该值指示指定形状是否有与其关联的文本。只读。 |
| [HorizontalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/HorizontalAnchor) | 返回或设置文本框架内文本的水平对齐方式。可读/写。 |
| [MarginBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/MarginBottom) | 以磅为单位返回或设置从文本框底部到包含文本的形状中内接矩形底部的距离。可读/写， **Single** 类型。 |
| [MarginLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/MarginLeft) | 以磅为单位返回或设置从文本框的左边缘到包含文本的形状的内接矩形的左边缘之间的距离。可读/写。 |
| [MarginRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/MarginRight) | 以磅为单位返回或设置从文本框的右边缘到包含文本的形状的内接矩形的右边缘之间的距离。可读/写。 |
| [MarginTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/MarginTop) | 以磅为单位返回或设置从文本框顶部到包含文本的形状的内接矩形顶部之间的距离。可读/写， **Single** 类型。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/Orientation) | 返回或设置文本方向。可读/写。 |
| [Ruler](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/Ruler) | 返回一个 **[Ruler](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/obj)** 对象，该对象代表指定文本的标尺。只读。 |
| [TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/TextRange) | 返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表指定文本框架中的文本。只读。 |
| [VerticalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/VerticalAnchor) | 返回或设置文本框架内文本的垂直对齐方式。可读/写。 |
| [WordWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/WordWrap) | 确定是否自动换行以适应形状内部。可读/写。 |