# TextFrame 对象

代表 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象中的文本框架。包含文本框架中的文本以及控制文本框架的对齐和定位的属性和方法。

## 说明


使用 **TextFrame** 属性可返回一个 **TextFrame** 对象。


## 示例


```JavaScript
/*本示例在第一张工作表中添加一个矩形，向矩形中添加文本，然后设置文本框架的边距。*/
function test() {
    let textFrame = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame
    textFrame.Characters().Text = "Here is some test text"
    textFrame.MarginBottom = 10
    textFrame.MarginLeft = 10
    textFrame.MarginRight = 10
    textFrame.MarginTop = 10
}
```


```JavaScript
/*本示例在活动工作表中添加一个椭圆，向椭圆中添加文本，并将指定文本颜色改为绿色。*/
function test() {
    let textFrame = ActiveSheet.Shapes.AddShape(msoShapeOval, 100, 100, 200, 100).TextFrame
    textFrame.Characters().Text = "这是示例文本"
    textFrame.Characters(3, 2).Font.Color = RGB(0, 255, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/Characters) | 返回一个 **Characters** 对象，该对象表示某个形状的文本框架中的字符区域。可以使用 **Characters** 对象向文本框架中添加字符和设置字符的格式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [AutoMargins](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/AutoMargins) | 返回或设置 ET 是否自动计算文本框边距。可读/写。 |
| [AutoSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/AutoSize) | 如果指定对象能自动调整大小，以适应其中所包含的文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [HorizontalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/HorizontalAlignment) | 返回或设置一个 **[XlHAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlHAlign)** 值，它代表指定对象的水平对齐方式。 |
| [HorizontalOverflow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/HorizontalOverflow) | 返回或设置指定对象的水平溢出设置。可读/写。 |
| [MarginBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/MarginBottom) | 以磅为单位返回或设置从文本框底端到包含文本的形状中内接矩形底端的距离。可读/写。 **Single** 类型。 |
| [MarginLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/MarginLeft) | 以磅为单位返回或设置从文本框左边界到包含文本的形状中内接矩形左边界的距离。可读写。 **Single** 类型。 |
| [MarginRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/MarginRight) | 以磅为单位返回或设置从文本框右边界到包含文本的形状中内接矩形右边界的距离。可读写。 **Single** 类型。 |
| [MarginTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/MarginTop) | 以磅为单位返回或设置从文本框架顶端到包含文本的形状中内接矩形顶端的距离。可读写。 **Single** 类型。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/Orientation) | 返回或设置一个 **Long** 值，它代表文本框的方向。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/Parent) | 返回指定对象的父对象。只读。 |
| [ReadingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/ReadingOrder) | 返回或设置指定对象的阅读次序。可为以下常量之一： **xlRTL** （从右到左）、 **xlLTR** （从左到右）或 **xlContext** 。 **Long** 类型，可读写。 |
| [VerticalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/VerticalAlignment) | 返回或设置一个 **[XlVAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlVAlign)** 值，它代表指定对象的垂直对齐方式。 |
| [VerticalOverflow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/member/VerticalOverflow) | 返回或设置指定对象的垂直溢出设置。可读/写。 |