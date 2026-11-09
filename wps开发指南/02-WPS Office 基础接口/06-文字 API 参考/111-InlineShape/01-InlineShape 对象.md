# InlineShape 对象

代表文档的文字层中的对象。内嵌形状只能是图片、OLE 对象或 ActiveX 控件。 **InlineShape** 对象是 **InlineShapes** 集合的一个成员。 **InlineShapes** 集合包含文档、范围或所选内容中的所有内嵌形状。

## 说明


 **InlineShape** 对象被视为字符，并作为字符置于文本行中。

使用 **InlineShapes** (*Index*) 可返回一个 **InlineShape** 对象，其中 *Index* 是索引号。内嵌形状没有名称。


## 示例


```JavaScript
/*本示例选中活动文档上第一个内嵌形状。*/
function test() {
    ActiveDocument.InlineShapes.Item(1).Select()
}
```
 **Shape** 对象锁定到某一文本范围，但可以自由浮动，并且可以放置在页面上的任何位置。可以使用 **ConvertToInlineShape** 方法和 **ConvertToShape** 方法来转换形状的类型。只能将图片、OLE 对象和 ActiveX 控件转换为内嵌形状。使用 **Type** 属性可返回内嵌形状的类型：图片、链接图片、嵌入的 OLE 对象、链接的 OLE 对象或者 ActiveX 控件。

打开一篇使用早期版本的 WPS 创建的文档时，图片将转换为内嵌形状。



```JavaScript
/*本示例设置活动文档中第二个内嵌图片的亮度。*/
function test() {
    ActiveDocument.InlineShapes.Item(2).PictureFormat.IncrementBrightness(0.1)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/ConvertToShape) | 将嵌入式图形转换为可自由浮动的图形。返回一个 **Shape** 对象，该对象代表新图形。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Delete) | 删除指定的嵌入式图形。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Reset) | 删除对内嵌形状所做的更改。 |
| [SaveAsPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/SaveAsPicture) | 将单个形状另存为图片文件。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Select) | 选择指定的内嵌形状。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlternativeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/AlternativeText) | 返回或设置一个 **String** 类型的值，该值代表与网页中图形相关联的可选文字（可选文字：由 Web 浏览器用于在图像下载过程中显示文本，其对象是那些关闭图形的用户，以及那些依赖屏幕阅读软件将屏幕上的图形转换为可读语言的用户。）。可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Borders) | 返回一个 **Borders** 集合，该集合代表指定图形的所有边框。 |
| [Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Chart) | 返回一个 **Chart** 对象，该对象代表文档中内嵌形状集合内的图表。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Fill) | 返回一个 **FillFormat** 对象，该对象包含指定图形的填充格式属性。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Glow) | 返回一个 **GlowFormat** 对象，该对象代表发光效果的格式属性。只读。 |
| [HasChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/HasChart) | 如果指定的形状是图表，则为 **msoTrue** 。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Height) | 返回或设置内嵌形状的高度。 **Single** 类型，可读写。 |
| [HorizontalLineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/HorizontalLineFormat) | 返回一个 **HorizontalLineFormat** 对象，该对象包含指定的 **InlineShape** 对象的水平线的格式。只读。 |
| [Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Hyperlink) | 返回一个 **Hyperlink** 对象，该对象代表与指定内嵌形状相关联的超链接。只读。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Line) | 返回一个 **LineFormat** 对象，该对象包含指定形状的线条格式属性。只读。 |
| [LinkFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/LinkFormat) | 返回一个 **LinkFormat** 对象，该对象代表链接到文件的指定内嵌形状的链接选项。只读。 |
| [LockAspectRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/LockAspectRatio) | 如果在调整指定形状的大小时保留其最初比例，则该属性值为 **msoTrue** ；如果在调整形状大小时可分别改变其高度和宽度，则该属性值为 **msoFalse** 。可读写 **MsoTriState** 类型。 |
| [OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/OLEFormat) | 返回一个 **OLEFormat** 对象，该对象代表指定的内嵌形状的 OLE 特征（链接除外）。只读 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **InlineShape** 对象的父对象。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/PictureFormat) | 返回一个 **PictureFormat** 对象，该对象包含内嵌形状的图片格式属性。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Range) | 返回一个 **Range** 对象，该对象代表内嵌形状中包含的文档部分。 |
| [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Reflection) | 返回一个 **ReflectionFormat** 对象，该对象代表形状的反射格式。只读。 |
| [ScaleHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/ScaleHeight) | 参照指定内嵌形状的原始尺寸缩放其高度。可读写 **Single** 类型。 |
| [ScaleWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/ScaleWidth) | 参照指定内嵌形状的原始尺寸缩放其宽度。可读写 **Single** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Shadow) | 返回一个 **ShadowFormat** 对象，该对象代表指定形状的阴影格式。只读。 |
| [SmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/SmartArt) | 返回 **SmartArt** 对象，该对象提供一种处理与指定内嵌形状相关联的 SmartArt 的方式。只读。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/SoftEdge) | 返回一个 **SoftEdgeFormat** 对象，该对象代表形状的软边缘格式。只读。 |
| [TextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/TextEffect) | 返回一个 **TextEffectFormat** 对象，该对象包含指定内嵌形状的文本效果格式属性。只读。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Title) | 返回或设置包含指定内嵌形状的标题的 **String** 类型值。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Type) | 返回内嵌形状的类型。只读 **[WdInlineShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdInlineShapeType)** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Width) | 返回或设置指定内嵌形状的宽度（以磅为单位）。可读写 **Long** 类型。 |