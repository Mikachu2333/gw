# Shapes 对象

指定的工作表上的所有 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象的集合。

## 说明


每个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象都代表绘图层中的一个对象，如自选图形、任意多边形、OLE 对象或图片。

 **注释：** 如果您想处理文档中的一部分形状（例如，只针对文档中的自选图形或只对选定的形状进行一些操作），则必须构造一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 集合，其中包含您要处理的形状。

使用 **Shapes** 属性可返回 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)** 集合。下例选定 myDocument 上的所有形状。

 **注释：** 如果您要同时对工作表上的所有形状进行操作（例如删除或设置属性），请选定所有形状，然后对选定区域使用 **ShapeRange** 属性，以创建一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，该对象包含工作表上的所有形状，然后对 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象应用相应的属性或方法。


## 示例


```JavaScript
/*本示例选中第一张工作表中所有形状。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.SelectAll()
}
```
 **使用 `Shapes`(*index*)（其中 *index* 是形状的名称或索引号）可返回一个 Shape 对象。下例设置 `myDocument` 上形状一的预设阴影的填充。** 



```JavaScript
/*本示例设置第一张工作表上形状一的预设阴影的填充。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.Item(1).Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientBrass)
}
```
 **使用 `Shapes.Range`(*index*)（其中 *index* 是形状的名称或索引号，或是它们的一个数组）可返回一个 [ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj) 集合，该集合代表 Shapes 集合的一个子集。下例设置 *myDocument* 上形状一和三的填充图案。** 



```JavaScript
/*本示例设置第一张工作表上形状一和三的填充图案。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.Range([1, 3]).Fill.Patterned(msoPatternHorizontalBrick)
}
```


```JavaScript
/*本示例将活动工作表上名为“Check Box 1”的复选框设置为选中状态。*/
function test() {
    Application.ActiveSheet.Shapes("Check Box 1").ControlFormat.Value = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddChart2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddChart2) | 向文档添加图表。 返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象代表图表并将其添加到指定的集合。 |
| [AddConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddConnector) | 创建一个连接符。返回一个代表新连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。添加一个连接符时，它没有连接到任何对象。使用 **[BeginConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/BeginConnect)** 和 **[EndConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/EndConnect)** 方法可将连接符的头和尾连接到文档中的其他形状上。 |
| [AddFormControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddFormControl) | 创建一个 ET 控件 （ET 控件：ET 本身具有的控件，而不是 ActiveX 控件。）。将返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象代表新建的控件。 |
| [AddLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddLabel) | 创建一个连接符。返回一个代表新连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。 |
| [AddLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddLine) | 当本方法应用于 **Shapes** 对象时，返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象表示工作表中的新线条。 |
| [AddOLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddOLEObject) | 创建 OLE 对象。返回一个代表新 OLE 对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。 |
| [AddPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddPicture) | 现有文件创建图片。返回一个代表新图片的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。 |
| [AddShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddShape) | 返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象表示工作表中的新自选形状。 |
| [AddTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddTextEffect) | 创建艺术字对象。返回一个代表新艺术字对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。 |
| [AddTextbox](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/AddTextbox) | 创建一个文本框。返回一个代表新文本框的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。 |
| [BuildFreeform](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/BuildFreeform) | 建立一个任意多边形对象。返回一个 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/obj)** 对象，该对象代表正在创建的任意多边形。用 **[AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/AddNodes)** 方法向任意多边形添加线段。如果任意多边形中已包含了一个以上的线段，则可用 **[ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/ConvertToShape)** 方法将 **FreeformBuilder** 对象转换为 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象将具有在 **FreeformBuilder** 对象中定义的几何属性。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/Item) | 从集合中返回一个对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/Range) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表 **Shapes** 集合中形状的子集。 |
| [SelectAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/SelectAll) | 选择指定的 **Shapes** 集合中的所有形状。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |