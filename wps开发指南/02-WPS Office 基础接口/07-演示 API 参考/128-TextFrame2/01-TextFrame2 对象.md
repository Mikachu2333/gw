# TextFrame2 对象

代表 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 或 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象中的文本框。该对象包含文本框中的文本，还包含控制文本框对齐方式和位置的属性和方法。

## 说明


使用 **Shape** 和 **ShapeRange** 对象的 **TextFrame2** 属性可返回 **TextFrame2** 对象。

使用 **HasTextFrame** 属性确定形状或形状范围是否具有文本框架，使用 **HasText** 属性确定文本框架是否包含文本。


## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片中添加一个矩形，向矩形中添加文本，然后设置文本框架的边距。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textFrame2 = slide.Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame2
    textFrame2.TextRange.Text = "Here is some sample text"
    textFrame2.MarginBottom = 10
    textFrame2.MarginLeft = 10
    textFrame2.MarginRight = 10
    textFrame2.MarginTop = 10
}
```


```JavaScript
/*本示例演示如何使用 HasTextFrame 属性来确定形状是否具有文本框架，然后如何使用 HasText 属性来确定文本框架是否包含文本。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        if (slide.Shapes.Item(i).HasTextFrame == msoTrue) {
            let textFrame2 = slide.Shapes.Item(i).TextFrame2
            if (textFrame2.HasText == msoTrue) {
                alert(textFrame2.TextRange.Text)
            }
        }
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/Application) | 返回 **Application** 对象。只读。 |
| [AutoSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/AutoSize) | 返回或设置一个值，该值指示是否自动更改指定形状的大小以使其中的文本适应边界。可读/写。 |
| [HasText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/HasText) | 指示包含指定文本框的形状是否有与其关联的文本。只读。 |
| [HorizontalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/HorizontalAnchor) | 返回或设置文本框架内文本的水平对齐方式。可读/写。 |
| [MarginLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/MarginLeft) | 以磅为单位返回或设置从文本框左边界到包含文本的形状中内接矩形的左边界的距离。可读/写 **Single** 类型。 |
| [MarginRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/MarginRight) | 返回或设置从文本框右边缘到包含文本的形状的内接矩形右边缘的距离（以磅为单位）。可读/写 **Single** 类型。 |
| [MarginTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/MarginTop) | 返回或设置从文本框顶端到包含文本的形状的内接矩形顶端的距离（以磅为单位）。可读/写 **Single** 类型。 |
| [NoTextRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/NoTextRotation) | 指示是否使用 **TextFrame2** 旋转功能旋转文本。 **MsoTriState** 常量之一。可读写。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/Orientation) | 返回或设置一个值，该值代表文本框方向。可读/写。 |
| [PathFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/PathFormat) | 返回或设置指定文本框的路径类型。可读/写。 |
| [TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/TextRange) | 返回 **[TextRange2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/obj)** 对象，该对象代表指定文本框中的文本。只读。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/ThreeD) | 返回一个 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/obj)** 对象，该对象包含指定文本框架的三维效果格式属性。只读。 |
| [VerticalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/VerticalAnchor) | 返回或设置文本框架中文本的垂直对齐方式。可读/写。 |
| [WarpFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/WarpFormat) | 返回或设置指定文本框的弯曲类型。可读/写 **MsoWarpFormat** 。 |
| [WordArtFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/member/WordArtFormat) | 返回或设置指定文本框架的艺术字类型。可读/写。 |