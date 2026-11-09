# Shape 对象

代表绘图层中的对象，例如自选图形、任意多边形、OLE 对象或图片。

## 说明


共有三个代表形状的对象： **Shapes** 集合，代表文档中的所有形状；[ **ShapeRange** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj) 集合，代表文档中指定的形状子集（例如， **ShapeRange** 对象可以代表文档中的第一个和第四个形状，或代表文档中的所有选定形状）； **Shape** 对象，代表文档中的单个形状。若要同时使用多个形状或使用选定范围中的多个形状，请使用 **ShapeRange** 集合。

以下示例说明如何执行下列操作：

* 按名称或编号索引，返回幻灯片上现有的形状。
* 返回幻灯片上新建的形状。
* 返回选定范围中的形状。
* 返回幻灯片上的幻灯片标题和其他占位符。
* 返回与连接符的端点相连的形状。
* 返回演示文稿的默认形状。
* 返回新建的任意多边形。
* 返回组合内的单个形状。
* 返回新组合的一组形状。

使用 **Shapes** (*index*) 返回一个代表幻灯片上形状的 **Shape** 对象，其中 *index* 是形状名称或索引号。


## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个形状与名为“Rectangle 1”的形状进行水平翻转。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    shapes.Item(1).Flip(msoFlipHorizontal)
    shapes.Item("Rectangle 1").Flip(msoFlipHorizontal)
}
```
向 **Shapes** 集合添加新的图形时，将对该新添加的图形赋以默认的名称。若要为图形指定更有意义的名称，可使用 **Name** 属性。



```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加一个矩形，并将该矩形的名称设置为“Red Square”，然后设置该矩形的前景填充色和线条样式。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let shape = shapes.AddShape(msoShapeRectangle, 144, 144, 72, 72)
    shape.Name = "Red Square"
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
    shape.Line.DashStyle = msoLineDashDot
}
```
若要在幻灯片中添加形状并返回一个代表新建形状的 **Shape** 对象，请使用 **Shapes** 集合的下列方法之一：[AddConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddConnector)、[AddLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddLine) 、[AddMediaObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddMediaObject) 、[AddOLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddOLEObject) 、[AddPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddPicture) 、[AddPlaceholder](#TODO) 、[AddShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddShape) 、[AddTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTable) 、[AddTextbox](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTextbox) 、[AddTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/AddTextEffect) 。

使用 **Selection.ShapeRange** (*index*) 返回一个代表选定范围中形状的 **Shape** 对象，其中 *index* 是形状名称或索引号。



```JavaScript
/*本示例将活动窗口所选的第一个形状的前景填充色设置为红色。假定至少选定了一个形状。*/
function test() {
    ActiveWindow.Selection.ShapeRange.Item(1).Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
使用 **Shapes.Title** 返回代表幻灯片标题的 **Shape** 对象。使用 **Shapes.AddTitle** 在无标题的幻灯片中添加标题并返回代表新建标题的 **Shape** 对象。使用 **Shapes.Placeholders** (*index*) 返回一个代表占位符的 **Shape** 对象，其中 *index* 是占位符的索引号。



```JavaScript
/*本示例展示用三种方式将活动演示文稿的第一张幻灯片的第一个（标题）形状中的字体设置为加粗格式。假定第一张幻灯片有标题。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Title.TextFrame.TextRange.Font.Italic = msoTrue
    ActivePresentation.Slides.Item(1).Shapes.Placeholders.Item(1).TextFrame.TextRange.Font.Italic = msoTrue
    ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange.Font.Italic = msoTrue
}
```
若要返回一个 **Shape** 对象，该对象代表连接符所连接的形状之一，请使用 **[BeginConnectedShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/BeginConnectedShape)** 或 **[EndConnectedShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/EndConnectedShape)** 属性。

若要返回代表演示文稿默认形状的 **Shape** 对象，请使用 **[DefaultShape](#TODO)** 属性。

使用 **[BuildFreeform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/BuildFreeform)** 和 **[AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/AddNodes)** 方法定义新任意多边形的几何形状，使用 **[ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/ConvertToShape)** 方法创建任意多边形并返回代表该形状的 **Shape** 对象。

使用 **GroupItems** (*index*) 返回代表组合形状中的单个形状的 **Shape** 对象，其中 *index* 是形状的名称或组合中的索引号。

使用 **[Group](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Group)** 或 **[Regroup](#TODO)** 方法可对某一范围的形状进行组合，并返回代表新组合的单个 **Shape** 对象。形成一个组合后，可以像使用任何其他形状一样使用该组合。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Apply) | 适用于指定的形状格式，该格式已使用 **PickUp** 方法复制。 |
| [ApplyAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ApplyAnimation) | 将上次提取的动画应用于 **Shape** 对象。 |
| [ConvertTextToSmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ConvertTextToSmartArt) | 将 **Shape** 对象中的文本转换为 SmartArt 图表。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Copy) | 将指定对象复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Cut) | 删除指定对象并将其放到剪贴板中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Delete) | 删除指定的 Shape 对象。 |
| [Flip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Flip) | 绕水平或垂直轴翻转指定形状。 |
| [IncrementLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/IncrementLeft) | 将指定形状水平移动指定的磅数。 |
| [IncrementRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/IncrementRotation) | 按指定度数改变指定形状绕 z 轴的旋转量。使用 **Rotation** 属性设置形状的绝对旋转量。 |
| [IncrementTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/IncrementTop) | 以指定点数垂直移动指定形状。 |
| [PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/PickUp) | 复制指定形状的格式。用 **Apply** 方法可将复制的格式应用于其他形状。 |
| [PickupAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/PickupAnimation) | 从 **Shape** 对象中提取所有动画。 |
| [RerouteConnections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/RerouteConnections) | 重置连接符，使其以最短的路径连接形状。重置时， **RerouteConnections** 方法可能会断开连接符的两端并将其重新连接到形状的其他位置。 |
| [SaveAsPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/SaveAsPicture) | 将单个形状另存为图片文件。 |
| [ScaleHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ScaleHeight) | 以指定的比例缩放图形高度。 |
| [ScaleWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ScaleWidth) | 根据指定的系数缩放图形宽度。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Select) | 选择指定的对象。 |
| [SetShapesDefaultProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/SetShapesDefaultProperties) | 将指定形状的格式应用于默认形状。使用该方法后所创建的形状将默认应用此格式。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Ungroup) | 取消指定形状或者形状区域中任意组合形状的组合。取消指定形状或形状区域中图片和 OLE 对象的组合。取消组合后的形状以单个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象的形式返回。 |
| [ZOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ZOrder) | 将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 z-顺序中的位置）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActionSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ActionSettings) | 返回一个 **[ActionSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/obj)** 对象，该对象包含在幻灯片放映期间，当用户在指定形状或文本区域内单击或移动鼠标时所发生的操作的相关信息。只读。 |
| [AlternativeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/AlternativeText) | 返回或设置与 Web 演示文稿中的形状关联的可选文字。可读/写。 |
| [AnimationSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/AnimationSettings) | 返回一个 **AnimationSettings** 对象，该对象代表所有可应用于指定形状的动画的特殊效果。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/AutoShapeType) | 返回或设置指定的 **Shape** 或 **ShapeRange** 对象的形状类型，该对象必须代表自选图形，而不能代表直线、任意多边形图形或连接符。 **MsoAutoShapeType** 类型，可读写。 |
| [BlackWhiteMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/BlackWhiteMode) | 返回或设置一个值，该值指示以黑白模式查看演示文稿时指定形状的出现形式。可读/写。 |
| [Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Chart) | 返回当前 Shape 对象的 Chart 对象。只读。 |
| [Child](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Child) | 如果该形状是子形状，则属性值为 **msoTrue** 。只读。 **MsoTriState** 类型。 |
| [ConnectionSiteCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ConnectionSiteCount) | 返回指定形状中的连结点的数量。只读。 |
| [Connector](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Connector) | 确定指定的形状是否为连接符。只读。 |
| [ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ConnectorFormat) | 返回 **[ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/obj)** 对象，包含连接符格式属性。适用于代表连接符的 **Shape** 或 **ShapeRange** 对象。只读。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Fill) | 返回一个 **FillFormat** 对象，该对象包含指定形状的填充格式属性。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Glow) | 返回指定形状的发光格式。只读 **GlowFormat** 类型。 |
| [GroupItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/GroupItems) | 返回一个 **GroupShapes** 对象，该对象表示指定组中的单个形状。使用 **GroupShapes** 对象的 **Item** 方法可返回组中的单个形状。此为只读属性。 |
| [HasChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/HasChart) | 返回指定对象代表的形状是否包含图表。只读。 |
| [HasSmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/HasSmartArt) | 如果当前 **Shape** 对象包含 SmartArt 图表，则返回 **True** 。只读。 |
| [HasTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/HasTable) | 返回指定的形状是否为表。只读。 **MsoTriState** 类型。 |
| [HasTextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/HasTextFrame) | 返回指定形状是否有文本框。只读。 **MsoTriState** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Height) | 以磅为单位返回或设置指定对象的高度。 |
| [HorizontalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/HorizontalFlip) | 返回指定的形状是否绕水平轴翻转。只读。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Id) | 返回一个 **Long** 类型值，该值标识形状或形状范围。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Left) | 返回或设置一个 **Single** 类型值，该值代表从形状边界框的左边缘到幻灯片左边缘的距离（以磅为单位）。可读/写。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Line) | 返回一个 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/obj)** 对象，该对象包含指定形状的线条格式属性。（对于线条来说， **LineFormat** 对象代表线条本身；而对于带有边框的形状来说， **LineFormat** 对象代表边框。）只读。 |
| [LinkFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/LinkFormat) | 返回 **[LinkFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LinkFormat/obj)** 对象，包含链接的 OLE 对象特有的属性。只读。 |
| [LockAspectRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/LockAspectRatio) | 确定在调整指定形状的大小时该形状是否保持其原始比例。可读/写。 |
| [MediaFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/MediaFormat) | 允许访问新音频或视频对象。只读。 |
| [MediaType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/MediaType) | 返回 OLE 媒体类型。只读。 **PpMediaType** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Name) | 创建形状时，WPP 自动以 ShapeType Number 的形式为其分配一个名称，其中 ShapeType 指明形状或自选图形的类型，Number 是在幻灯片上形状的集合中具有唯一性的整数。例如，为幻灯片上的形状自动生成的名称可以为 Placeholder 1、Oval 2 和 Rectangle 3。为了避免与自动分配的名称发生冲突，对用户定义的名称请不要使用 ShapeType Number 形式，其中 ShapeType 为一个用于自动生成名称的值，Number 为任意的正整数。形状范围必须至少包含一个形状。 **String** 类型，可读/写。 |
| [Nodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Nodes) | 返回一个 **[ShapeNodes](#TODO)** 集合，该集合代表指定形状的几何描述。适用于表示任意多边形图形的 **Shape** 对象。 |
| [OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/OLEFormat) | 返回 **[OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/OLEFormat/obj)** 对象，包含指定形状的 OLE 格式属性。适用于代表 OLE 对象的 **Shape** 或 **ShapeRange** 对象。只读。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/PictureFormat) | 返回一个 **PictureFormat** 对象，该对象包含指定形状的图片格式属性。只读。 |
| [PlaceholderFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/PlaceholderFormat) | 返回一个 **[PlaceholderFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaceholderFormat/obj)** 对象，该对象包含占位符特有的属性。只读。 |
| [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Reflection) | 返回指定形状的映像格式。只读。 |
| [Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Rotation) | 返回或设置指定形状绕Z 轴旋转的角度。可读/写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Shadow) | 返回一个只读的 **ShadowFormat** 对象，该对象包含指定形状的阴影格式属性。 |
| [SmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/SmartArt) | 返回一个 **SmartArt** 对象，该对象表示 **Shape** 对象的 SmartArt 图表。只读。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/SoftEdge) | 返回指定形状的柔化边缘格式。只读。 |
| [Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Table) | 返回一个 **[Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/obj)** 对象，该对象代表某个形状或形状区域内的一个表格。只读。 |
| [Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Tags) | 返回一个代表指定对象的标签的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 对象。只读。 |
| [TextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/TextEffect) | 返回一个 **[TextEffectFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/obj)** 对象，该对象包含指定形状的文本效果格式属性。只读。 |
| [TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/TextFrame) | 返回一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/obj)** 对象，该对象包含指定形状或母版文本样式的对齐方式和定位属性。 |
| [TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/TextFrame2) | 返回与指定的 Shape 对象（包含指定形状的对齐方式和定位属性）相关联的 TextFrame2 对象。只读。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ThreeD) | 返回一个 **ThreeDFormat** 对象，该对象包含指定形状的三维效果格式属性。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Top) | 返回或设置一个 **Single** 类型值，该值代表从形状边界框的上边缘到幻灯片上边缘的距离（以磅为单位）。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Type) | 返回一个 **MsoShapeType** 常量，该常量代表单个形状或形状范围内多个形状的类型。只读。 |
| [VerticalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/VerticalFlip) | 确定指定的形状是否绕垂直轴翻转。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Visible) | 返回或设置指定对象的可见性或应用于指定对象的格式。可读/写。 **MsoTriState** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Width) | 以磅为单位返回或设置指定对象的宽度。 |
| [ZOrderPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ZOrderPosition) | 返回指定的形状在 z-顺序中的位置。只读。 |