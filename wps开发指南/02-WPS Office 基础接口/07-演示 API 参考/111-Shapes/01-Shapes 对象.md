# Shapes 对象

指定的幻灯片上所有 [ **Shape** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj) 对象的集合。

## 说明


每个 **Shape** 对象代表绘图层中的一个对象，例如自选图形、任意多边形、OLE 对象或图片。

若要使用文档中的形状的子集（例如，只对文档中的自选图形或选定的形状进行操作），则必须构造一个包含要使用的形状的 [ **ShapeRange** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj) 集合。

使用 **Shapes** 属性返回 **Shapes** 集合。


## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中所有形状。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.SelectAll()
}
```
若要同时对文档中的所有形状进行某种操作（例如删除或设置一个属性），可不带参数使用 [ **Range** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Range) 方法创建一个 **ShapeRange** 对象，该对象包含 **Shapes** 集合中的所有形状，然后对 **ShapeRange** 对象应用相应的属性或方法。

使用 [ **AddCallout** ](#TODO) 、[ **AddComment** ](#TODO) 、[ **AddConnector** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddConnector) 、[ **AddCurve** ](#TODO) 、[ **AddLabel** ](#TODO) 、[ **AddLine** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddLine) 、[ **AddMediaObject** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddMediaObject) 、[ **AddOLEObject** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddOLEObject) 、[ **AddPicture** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddPicture) 、[ **AddPlaceholder** ](#TODO) 、[ **AddPolyline** ](#TODO) 、[ **AddShape** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddShape) 、[ **AddTable** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTable) 、[ **AddTextbox** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTextbox) 、[ **AddTextEffect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTextEffect) 或 [ **AddTitle** ](#TODO) 方法创建一个新形状并将其添加到 **Shapes** 集合中。联合使用 **[BuildFreeform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/BuildFreeform)** 方法和 **[ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/ConvertToShape)** 方法创建一个新任意多边形并将其添加到集合中。



```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加一个矩形。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200)
}
```
使用 **Shapes** (*index*) 返回单个 **Shape** 对象，其中 *index* 是形状的名称或索引号。



```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个形状的预设纹理填充。*/
function test() {
    let fillFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Fill
    fillFormat.PresetTextured(msoTextureCanvas)
}
```
使用 **Shapes.Range** (*index*) 返回一个 [ **ShapeRange** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj) 集合，该集合代表 **Shapes** 集合的一个子集，其中 *index* 是形状的名称或索引号，或由形状的名称或索引号组成的数组。



```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个和第三个形状的填充图案。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Range([1, 3]).Fill.Patterned(msoPatternHorizontalBrick)
}
```
使用 **Shapes.Placeholders** (*index*) 返回一个代表占位符的 **Shape** 对象，其中 *index* 是占位符编号。如果指定的幻灯片有标题，则使用 **Shapes.Placeholders(1)** 或 **Shapes.Title** 返回标题占位符。



```JavaScript
/*本示例向活动演示文稿添加一张幻灯片，并为该幻灯片的标题和副标题添加文本。副标题是此版式幻灯片上的第二个占位符。*/
function test() {
    let shapes = ActivePresentation.Slides.Add(1, ppLayoutTitle).Shapes
    shapes.Title.TextFrame.TextRange.Text = "This is the title text"
    shapes.Placeholders.Item(2).TextFrame.TextRange.Text = "This is subtitle text"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddChart) | 向演示文稿中添加图表。 |
| [AddChart2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddChart2) | 向演示文稿添加图表。返回表示图表的 **Shape** 对象，并将其添加到指定的集合中。 |
| [AddConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddConnector) | 创建一个连接符。返回一个代表新连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。添加连接符时，它没有连接任何对象。使用 **BeginConnect** 和 **EndConnect** 方法可将连接符的头和尾连接到文档中的其他形状上。 |
| [AddLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddLine) | 创建线条。返回一个代表新线条的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。 |
| [AddMediaObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddMediaObject) | 创建多媒体对象。返回一个代表新多媒体对象的 [Shape ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)对象。 |
| [AddMediaObject2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddMediaObject2) | 替换已弃用的 Shapes.AddMediaObject 方法（WPP）。添加新的媒体对象。 |
| [AddOLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddOLEObject) | 创建 OLE 对象。返回一个代表新 OLE 对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。 |
| [AddPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddPicture) | 从现有文件创建图片。返回一个代表新图片的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。 |
| [AddShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddShape) | 创建一个自选形状。返回一个代表新自选形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。 |
| [AddSmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddSmartArt) | 将 SmartArt 图表添加到 **Shapes** 对象中。 |
| [AddTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTable) | 将表格形状添加到幻灯片中。 |
| [AddTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTextEffect) | 创建艺术字对象。返回一个代表新艺术字对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。 |
| [AddTextbox](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTextbox) | 创建一个文本框。返回一个代表新文本框的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。 |
| [BuildFreeform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/BuildFreeform) | 建立一个任意多边形对象。返回一个 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/obj)** 对象，该对象代表正在建立的任意多边形。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Item) | 从指定的 **Shapes** 集合中返回单个 **Shape** 对象。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Paste) | 在 z 顺序的最上端将剪贴板上的形状、幻灯片或文本粘贴到指定的 **Shapes** 集合中。粘贴的每个对象都会成为指定的 **Shapes** 集合的成员。如果剪贴板包含全部幻灯片，则这些幻灯片将作为包含幻灯片图像的形状粘贴。如果剪贴板包含文本范围，则该文本将被粘贴到一个新创建的 **TextFrame** 形状中。返回一个代表粘贴对象的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。 |
| [PasteSpecial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/PasteSpecial) | 使用特殊格式粘贴剪贴板内容。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Range) | 返回一个代表 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合中的形状子集的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。 |
| [SelectAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/SelectAll) | 选定 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合中所有形状。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Count) | 返回指定集合中的对象数目。只读。 |
| [HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/HasTitle) | 返回指定幻灯片上的对象集合是否包含标题占位符。只读。 |
| [Placeholders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Placeholders) | 返回一个 **Placeholders** 集合，该集合代表幻灯片上所有占位符的集合。只读。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Title) | 返回一个代表幻灯片标题的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。只读。 |