# TextFrame 对象

代表 **Shape** 对象中的文本框架。 **TextFrame** 对象包含文本框架中的文本以及用于控制文本框架的边距和方向的属性。

## 说明


使用 **TextFrame** 属性可返回形状的 **TextFrame** 对象。 **TextRange** 属性可返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定文本框架中的文本范围。


## 示例


```JavaScript
/*本示例为活动文档上第一个形状的文字框架添加文本。*/
function test() {
    ActiveDocument.Shapes.Item(1).TextFrame.TextRange.Text = "Text"
}
```
某些形状不支持附加文本（例如，线条、任意多边形、图片和 OLE 对象）。如果尝试返回或设置控制这些对象的文本框架中的文本的属性，则会发生错误。

使用 **HasText** 属性可确定文本框架中是否包含文本



```JavaScript
/*本示例判断如果活动文档上形状的文本框架中包含文本，则显示该文本框架中的文本。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).TextFrame.HasText) {
            alert(shapes.Item(i).TextFrame.TextRange.Text)
        }
    }
}
```
文本框架可以链接在一起，以使一个形状的文本框架中的文本排入另一个形状的文本框架。使用 **Next** 和 **Previous** 属性可链接文本框架。



```JavaScript
/*本示例创建一个文本框（带有文本框架的矩形），并在其中添加文本，然后创建另一个文本框，并将两个文本框架链接在一起，以使第一个文本框架中的文本排入第二个文本框架。*/
function test() {
    let shape1 = ActiveDocument.Shapes.AddTextbox(msoTextOrientationHorizontal, 72, 72, 72, 36)
    shape1.TextFrame.TextRange.Text = "This is some text. This is some more text."
    let shape2 = ActiveDocument.Shapes.AddTextbox(msoTextOrientationHorizontal, 72, 144, 72, 36)
    shape1.TextFrame.Next = shape2.TextFrame
}
```
可以使用 **ContainingRange** 属性返回 **Range** 对象，该对象代表在链接的文本框架之间排列的整个文字部分。



```JavaScript
/*本示例对活动文档中名为“TextBox 1”的文本框架及所有链接至“TextBox 1”的文本框架的文本进行拼写检查。*/
function test() {
    let range = ActiveDocument.Shapes.Item("TextBox 1").TextFrame.ContainingRange
    range.CheckSpelling()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [BreakForwardLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/BreakForwardLink) | 在链接存在的情况下，断开指定文本框的前向链接。 |
| [ValidLinkTarget](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/ValidLinkTarget) | 确定一个形状的文本框是否可以链接到另一个形状的文本框。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [AutoSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/AutoSize) | 返回或设置一个 **Long** 类型的值，该值代表是否自动调整文本框的大小。可读写。 |
| [ContainingRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/ContainingRange) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表一系列带有链接文本框架（包括指定文本框架）的形状的整个文字部分。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [HasText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/HasText) | 如果指定的形状有相关的文字，则该属性值为 **msoTrue** 。 **Long** 类型，只读。 |
| [HorizontalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/HorizontalAnchor) | 返回或设置文本框架中文本的水平对齐方式。可读/写 **[MsoHorizontalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoHorizontalAnchor)** 类型。 |
| [MarginBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/MarginBottom) | 以磅为单位返回或设置从文本框底端到包含文本的形状中内接矩形底端的距离。可读写。 **Single** 类型。 |
| [MarginLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/MarginLeft) | 以磅为单位返回或设置从文本框左边界到包含文本的形状中内接矩形左边界的距离。可读写。 **Single** 类型。 |
| [MarginRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/MarginRight) | 以磅为单位返回或设置从文本框右边界到包含文本的形状中内接矩形右边界的距离。可读写。 **Single** 类型。 |
| [MarginTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/MarginTop) | 以磅为单位返回或设置从文本框架顶端到包含文本的形状中内接矩形顶端的距离。可读写。 **Single** 类型。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/Next) | 返回或设置一个 **TextFrame** 对象，该对象代表形状集合中的下一个文本框架。可读写。 |
| [NoTextRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/NoTextRotation) | 如果在旋转形状时不应旋转文本框架中的文本，则该属性值为 **msoTrue** 。可读/写 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/Orientation) | 返回或设置文本框架内的文字方向。可读写 **MsoTextOrientation** 类型。 |
| [PathFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/PathFormat) | 返回或设置指定文本框架的路径类型。可读/写 **MsoPathFormat** 。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/Previous) | 返回或设置一个 **TextFrame** 对象，该对象代表形状集合中的上一个文本框架。可读写。 |
| [TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/TextRange) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定文本框架中的文本。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/ThreeD) | 返回 **ThreeDFormat** 对象，该对象包含指定文本框架的三维效果格式属性。只读。 |
| [VerticalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/VerticalAnchor) | 返回或设置一个 **MsoVerticalAnchor** 常量，该常量代表形状内文本的垂直对齐方式。可读写。 |
| [WarpFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/WarpFormat) | 返回或设置指定文本框架的弯曲格式（文本的弯曲格式）。可读/写 **[MsoWarpFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoWarpFormat)** 类型。 |
| [WordWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/member/WordWrap) | 如果 WPS 在指定文本框架的西文单词中间断字换行，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |