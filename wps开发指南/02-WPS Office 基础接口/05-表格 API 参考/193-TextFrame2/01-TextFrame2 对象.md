# TextFrame2 对象

代表 **Shape** 、 **ShapeRange** 或 **ChartFormat** 对象的文本框。

## 说明


该对象包含文本框中的文本，还包含控制文本框对齐方式和位置的属性和方法。使用 **TextFrame2** 属性可返回 **TextFrame2** 对象。


## 示例


```JavaScript
/*本示例在第一张工作表中添加一个矩形，向矩形中添加文本，然后设置文本框的边距。*/
function test() {
    let textFrame2 = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame2
    textFrame2.TextRange.Text = "Here is some test text"
    textFrame2.MarginBottom = 10
    textFrame2.MarginLeft = 10
    textFrame2.MarginRight = 10
    textFrame2.MarginTop = 10
}
```


```JavaScript
/*本示例判断如果活动工作表中第二个形状的文本框包含文本，则显示文本长度。*/
function test() {
    let textFrame2 = ActiveSheet.Shapes.Item(2).TextFrame2
    if (textFrame2.HasText == msoTrue) {
        alert(textFrame2.TextRange.Length)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [DeleteText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/DeleteText) | 删除文本框中的文字以及所有关联的文字属性。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/Application) | 返回 **Application** 对象。只读。 |
| [AutoSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/AutoSize) | 指定的对象的大小，可自动调整大小以适应其中包含的文字。可读/写 **MsoAutoSize** 。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/Creator) | 返回一个 32 位整数，该整数指示创建对象的应用程序。只读 **Long** 类型。 |
| [HasText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/HasText) | 返回指定文本框是否有文本。只读 **MsoTriState** 类型。 |
| [HorizontalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/HorizontalAnchor) | 返回或设置指定文本的水平定位类型。可读/写 **MsoHorizontalAnchor** 类型。 |
| [MarginBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/MarginBottom) | 返回或设置从文本框底端到包含文本的形状的内接矩形底端的距离（以磅为单位）。可读/写 **Single** 类型。 |
| [MarginLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/MarginLeft) | 以磅为单位返回或设置从文本框左边界到包含文本的形状中内接矩形的左边界的距离。可读/写 **Single** 类型。 |
| [MarginRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/MarginRight) | 返回或设置从文本框右边缘到包含文本的形状的内接矩形右边缘的距离（以磅为单位）。可读/写 **Single** 类型。 |
| [MarginTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/MarginTop) | 返回或设置从文本框顶端到包含文本的形状的内接矩形顶端的距离（以磅为单位）。可读/写 **Single** 类型。 |
| [NoTextRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/NoTextRotation) | 返回或设置在指定的对象旋转时，文本是否保持扁平。可读/写 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/Orientation) | 返回或设置一个值，该值代表文本框方向。可读/写 **MsoTextOrientation** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/Parent) | 返回指定对象的父对象。只读。 |
| [Ruler](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/Ruler) | 返回一个 **Ruler2** 对象，该对象代表指定文本的标尺。只读。 |
| [TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/TextRange) | 返回 **TextRange2** 对象，该对象代表对象中的文本。只读 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/ThreeD) | 返回一个 **ThreeDFormat** 对象，该对象包含指定文本的三维效果格式属性。只读。 |
| [VerticalAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/VerticalAnchor) | 返回或设置指定文本的垂直定位类型。可读/写 **MsoVerticalAnchor** 类型。 |
| [WarpFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/WarpFormat) | 返回或设置指定文本框的弯曲类型。可读/写 **MsoWarpFormat** 。 |
| [WordArtformat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/WordArtformat) | 返回或设置指定文本框的艺术字类型。可读/写 **MsoPresetTextEffect** 类型。 |
| [WordWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/member/WordWrap) | 返回或设置形状边界内外的文本换行。可读/写 **MsoTriState** 类型。 |