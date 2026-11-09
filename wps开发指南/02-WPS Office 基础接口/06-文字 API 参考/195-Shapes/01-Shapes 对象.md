# Shapes 对象

 **Shape** 对象的集合，这些对象代表某个文档中的所有形状，或某个文档的所有页眉和页脚中的所有形状。每个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象代表绘制层的一个对象，如自选图形、任意多边形、OLE 对象或图片。

## 说明


如果要处理文档中的一部分形状（例如，仅对文档中的自选图形或仅对所选形状执行某些操作），则必须构造一个包含要处理的形状的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/obj)** 集合。

使用 **Shapes** 属性可返回 **Shapes** 集合。


## 示例


```JavaScript
/*本示例选择活动文档中的所有形状。*/
function test() {
    ActiveDocument.Shapes.SelectAll()
}
```
如果要同时对文档上的所有形状执行某些操作（如删除或设置属性），请使用 **Range** 方法创建一个包含 **Shapes** 集合中所有形状的 **ShapeRange** 对象，然后将相应的属性或方法应用于 **ShapeRange** 对象。

使用 **Shapes** 集合的以下方法之一： **Add3DModel** 、 **AddCallout** 、 **AddCurve** 、 **AddLabel** 、 **AddLine** 、 **AddOLEControl** 、 **AddOLEObject** 、 **AddPolyline** 、 **AddShape** 、 **AddTextbox** 或 **AddTextEffect** 将形状添加到文档，返回表示新创建的形状的 **Shape** 对象。



```JavaScript
/*本示例向活动文档添加一个矩形。*/
function test() {
    ActiveDocument.Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200)
}
```
使用 **Shapes** (Index)（其中 Index 是名称或索引号）返回单个 **Shape** 对象。



```JavaScript
/*本示例水平翻转活动文档中的第一个形状。*/
function test() {
    ActiveDocument.Shapes.Item(1).Flip(msoFlipHorizontal)
}
```


```JavaScript
/*本示例水平翻转活动文档中名为“Lightning Bolt 2”的形状。*/
function test() {
    ActiveDocument.Shapes.Item("Lightning Bolt 2").Flip(msoFlipHorizontal)
}
```
每个形状创建时分配一个默认名称。例如，如果将三个不同的形状添加到文档中，它们可能名为“Rectangle 2”、“TextBox 3”和“Oval 4”。若要为形状指定更有意义的名称，请设置 **Name** 属性。

 **Shapes** 集合不包括 **[InlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/obj)** 对象。 **InlineShape** 对象被视为字符，并作为字符置于文本行中。 **Shape** 对象锁定到某一文本范围，但可以自由浮动，并且可以放置在页面上的任何位置。使用 **ConvertToInlineShape** 方法和 **ConvertToShape** 方法可将形状从一种类型转换为另一种类型。您可以将图片、OLE 对象和 ActiveX 控件转换为嵌入式图形。

一个文档中，以上集合的 **Count** 属性返回正文部分的项目数。要统计所有页眉和页脚中的形状个数，请使用带有任何 **HeaderFooter** 对象的 **Shapes** 集合。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddCanvas](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddCanvas) | 在文档中添加绘图画布。返回代表该画布的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象并将其添加到 **Shapes** 集合。 |
| [AddLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddLine) | 在绘图画布上添加一条直线。 |
| [AddOLEControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddOLEControl) | 创建一个 ActiveX 控件（以前称为 OLE 控件）。返回代表新 ActiveX 控件的 **Shape** 对象。 |
| [AddOLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddOLEObject) | 创建一个 OLE 对象。返回代表新 OLE 对象的 **Shape** 对象。 |
| [AddPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddPicture) | 在文档中添加一幅图片。返回一个 **Shape** 对象，该对象代表图片并将其添加至 **Shapes** 集合。 |
| [AddShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddShape) | 向某文档中添加一个自选图形。返回代表该自选图形的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象并将其添加到 **Shapes** 集合。 |
| [AddSmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddSmartArt) | 将指定 SmartArt 图形插入文档。 |
| [AddTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddTextEffect) | 在文档上添加一个“艺术字”形状。返回一个 **Shape** 对象，该对象代表“艺术字”，并将其添加至 **Shapes** 集合。 |
| [AddTextbox](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/AddTextbox) | 在文档中添加一个文本框。 |
| [BuildFreeform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/BuildFreeform) | 建立任意多边形对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/Item) | 返回集合中的单个 **Shape** 对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/Range) | 返回代表范围内的形状的 **ShapeRange** 对象。 |
| [SelectAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/SelectAll) | 选择形状集合中的所有形状。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中图形的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Shapes** 对象的父对象。 |