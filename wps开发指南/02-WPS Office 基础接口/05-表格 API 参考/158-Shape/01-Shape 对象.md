# Shape 对象

代表绘图层中的对象，例如自选图形、任意多边形、OLE 对象或图片。

## 说明


 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象是 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)** 集合的成员。 **Shapes** 集合包含某个工作簿中的所有形状。

 **注释：** 有三个代表形状的对象： **Shapes** 集合，它代表工作簿中所有的形状；[ **ShapeRange** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)集合，它代表工作簿中形状的指定子集（例如， **ShapeRange** 对象可以代表工作簿中的形状一和形状四，或者，可以代表工作簿中所有选定的形状）； **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，它代表文档中的某一个形状。如果您需要同时处理几个形状，或处理选定区域中的多个形状，请使用 **ShapeRange** 集合。

以下各节说明了如何使用 Shape 对象：

1\.返回与连接符的端点相连的形状

 要返回一个代表连接符所连接形状之一的 **Shape** 对象，请使用 **BeginConnectedShape** 或 **EndConnectedShape** 属性。

2\. 返回新建的任意多边形

 使用 **BuildFreeform** 和 **AddNodes** 方法可定义一个新任意多边形的几何特性，使用 **ConvertToShape** 方法可创建任意多边形并返回代表它的 **Shape** 对象。

3\. 返回组中的单个形状

 使用 **[GroupItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/GroupItems)** (*index* )（其中 *index* 是形状的名称或组中的索引号）可返回一个代表一组形状中某一形状的 **Shape** 对象。

4\. 返回新组成的形状组

 使用 **Group** 或 **Regroup** 方法可将一系列形状分成一组并返回一个 **Shape** 对象，该对象代表新形成的组。在形成了一个组之后，您可以按您处理其他任何形状的方法来处理该组

5\. 返回现有的形状

 使用 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)** (*index* )（其中 *index* 是形状名称或索引号）可返回代表某个形状的 **Shape** 对象。

6\. 返回选定区域中的形状

 使用 `Selection.ShapeRange`(*index*)（其中 *index* 是形状名称或索引号）可返回一个代表选定区域中的形状的 **Shape** 对象。


## 示例


```JavaScript
/*本示例将第一张工作表中形状一和名为“Rectangle 1”的形状进行水平翻转。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.Item(1).Flip(msoFlipHorizontal)
    shapes.Item("Rectangle 1").Flip(msoFlipHorizontal)
}
```
每个添加到 Shapes 集合的形状将被分配一个默认名称。 若要赋予该形状一个更有意义的名称，请使用 Name 属性。



```JavaScript
/*本示例向活动工作表添加一个正方形，为其命名为“Red Square”，然后设置其前景色和线条样式。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let shape = shapes.AddShape(msoShapeRectangle, 144, 144, 72, 72)
    shape.Name = "Red Square"
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
    shape.Line.DashStyle = msoLineDashDot
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Apply) | 应用通过 **[PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/PickUp)** 方法复制的指定形状格式。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Copy) | 将对象复制到剪贴板。 |
| [CopyPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/CopyPicture) | 将所选对象作为图片复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Cut) | 将对象剪切到剪贴板。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Delete) | 删除对象。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Duplicate) | 复制对象，并返回对新复制对象的引用。 |
| [Flip](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Flip) | 绕指定形状的水平或垂直对称轴翻转该形状。 |
| [IncrementLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/IncrementLeft) | 以指定磅数水平移动指定形状。 |
| [IncrementRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/IncrementRotation) | 使指定的形状按指定度数值绕 Z 轴旋转。使用 **[Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Rotation)** 属性可设置形状的绝对转角。 |
| [IncrementTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/IncrementTop) | 以指定磅数垂直移动指定形状。 |
| [PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/PickUp) | 复制指定形状的格式。使用 **[Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Apply)** 方法可将复制的格式应用到其他形状。 |
| [RerouteConnections](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/RerouteConnections) | 此方法将重排连接在指定形状上的所有连接符；如果指定的形状是连接符，就重排该连接符。 |
| [ScaleHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ScaleHeight) | 按指定的比例调整形状的高度。对于图片和 OLE 对象，可以指定是相对于原有尺寸还是相对于当前尺寸来调整该形状。对于不是图片和 OLE 对象的形状，总是相对于其当前大小来调整高度。 |
| [ScaleWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ScaleWidth) | 按指定的比例调整形状的宽度。对于图片和 OLE 对象，可以指定是相对于原有尺寸还是相对于当前尺寸来调整该形状。对于不是图片和 OLE 对象的形状，总是相对于其当前大小来调整宽度。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Select) | 选择对象。 |
| [SetShapesDefaultProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/SetShapesDefaultProperties) | 将指定形状的格式设置为形状的默认格式。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Ungroup) | 取消指定形状或者形状区域中组合形状的组合。取消指定形状或形状区域中图片和 OLE 对象的组合。 |
| [ZOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ZOrder) | 将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 z-次序中的位置）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Adjustments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Adjustments) | 返回一个 **[Adjustments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Adjustments/obj)** 对象，它包括指定形状的所有调整操作的调整值。应用于任何代表自选图形、艺术字或连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。 |
| [AlternativeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/AlternativeText) | 返回或设置一个当 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象保存为网页时，该对象的描述性（可选）文本字符串。 **String** 型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/AutoShapeType) | 返回或设置指定的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 或 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象的形状类型，该对象必须代表自选图形，而不能代表直线、任意多边形图形或连接符。 **MsoAutoShapeType** 类型，可读写。 |
| [BottomRightCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/BottomRightCell) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于该对象右下角下方的单元格。只读。 |
| [Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Chart) | 返回 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，该对象代表形状中包含的图表。只读。 |
| [Child](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Child) | 如果指定的形状是子形状，或者如果形状区域中的所有形状都是同一个父形状的子形状，则返回 **msoTrue** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，只读。 |
| [ConnectionSiteCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ConnectionSiteCount) | 返回指定形状中的连接部位的数量。 **Long** 型，只读。 |
| [Connector](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Connector) | 如果指定的形状是连接符，则此属性为 **True** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，只读。 |
| [ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ConnectorFormat) | 返回一个包含连接符格式属性的 **[ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/obj)** 对象。应用于代表连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。只读。 |
| [ControlFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ControlFormat) | 返回一个 **[ControlFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/obj)** 对象，该对象包含 ET 控件 （ET 控件：ET 本身具有的控件，而不是 ActiveX 控件。）属性。只读。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Fill) | 返回指定形状的 [ **FillFormat** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/obj) 对象或指定图表的 [ **ChartFillFormat** ](#TODO) 对象，这些对象包含形状或图表的填充格式属性。只读。 |
| [FormControlType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/FormControlType) | 返回 ET 控件 （ET 控件：ET 本身具有的控件，而不是 ActiveX 控件。） **[XlFormControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormControl)** 类型，只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Glow) | 返回一个包含形状发光格式属性的指定形状的 **[GlowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GlowFormat/obj)** 对象。只读。 |
| [GroupItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/GroupItems) | 返回一个 **[GroupShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/GroupShapes/obj)** 对象，它代表指定形状组中的单个形状。使用 **GroupShapes** 对象的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/GroupShapes/member/Item)** 方法可从形状组中返回单个形状。应用于代表成组形状的 **Shape** 对象。只读。 |
| [HasChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/HasChart) | 返回形状是否包含图表。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Height) | 返回或设置一个 **Single** 值，它代表对象的高度（以磅为单位）。 |
| [HorizontalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/HorizontalFlip) | 如果指定的形状绕水平对称轴翻转，则为 **True** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** ，只读。 |
| [Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Hyperlink) | 返回一个 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/obj)** 对象，该对象表示该形状的超链接。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ID) | 返回一个 Long 值，它代表指定对象的类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Left) | 返回或设置 **Single** 值，它代表从对象左边缘到工作表的 A 列左边缘或到图表上的图表区左边缘的距离（以磅为单位）。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Line) | 返回一个 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/obj)** 对象，它包含指定形状的线条格式属性。对于线条， **LineFormat** 对象代表线条本身；而对于带有边框的形状， **LineFormat** 对象代表边框。只读。 |
| [LockAspectRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/LockAspectRatio) | 如果指定的形状在调整大小时其原始比例保持不变，则此属性为 **True** 。如果调整大小时可以分别更改形状的高度和宽度，则此属性为 **False** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，可读写。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Locked) | 返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [Nodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Nodes) | 返回一个 **[ShapeNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/obj)** 集合，它代表指定形状的几何描述。 |
| [OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/OLEFormat) | 返回一个 **[OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/obj)** 对象，该对象包含 OLE 对象属性。只读。 |
| [OnAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/OnAction) | 返回或设置单击指定对象时运行的宏的名称。 **String** 类型，可读写。 |
| [ParentGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ParentGroup) | 返回 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，它代表子形状或子形状区域的共同父形状。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/PictureFormat) | 返回一个 **[PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/obj)** 对象，它包含指定形状的图片格式属性。应用于代表图片或 OLE 对象的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。只读。 |
| [Placement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Placement) | 返回或设置一个 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 值，它代表对象附加到对象下面的单元格的方式。 |
| [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Reflection) | 返回指定形状的 **[ReflectionFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/obj)** 对象，该对象包含形状的映像格式属性。只读。 |
| [Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Rotation) | 返回或设置形状的旋转角度（以度为单位）。 **Single** 型，可读写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Shadow) | 返回一个只读的 **[ShadowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/obj)** 对象，它包含指定形状的阴影格式属性。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/SoftEdge) | 返回指定形状的 **[SoftEdgeFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SoftEdgeFormat/obj)** 对象，该对象包含形状的柔化边缘格式设置属性。只读。 |
| [TextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/TextEffect) | 该属性返回一个 **[TextEffectFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextEffectFormat/obj)** 对象，它包含指定形状的文本效果格式属性。 |
| [TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/TextFrame) | 返回一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/obj)** 对象，它包含指定形状的对齐方式和定位属性。 |
| [TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/TextFrame2) | 返回一个 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/obj)** 对象，该对象包含指定形状的文本格式。只读。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ThreeD) | 返回一个 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/obj)** 对象，它包含指定形状的三维效果格式属性。只读。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Title) | 返回或设置与指定形状关联的可选文本的标题。 读/写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Top) | 返回或设置一个 **Single** 值，它代表形状范围内最上面的形状的上边缘到工作表上边缘的距离（以磅为单位）。 |
| [TopLeftCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/TopLeftCell) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于指定对象左上角下方的单元格。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Type) | 返回一个代表形状类型的 **[MsoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoShapeType)** 值。只读。 |
| [VerticalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/VerticalFlip) | 如果指定的形状绕垂直坐标轴翻转，则此属性为 **True** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Visible) | 返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/Width) | 返回或设置一个 **Single** 值，它代表对象的宽度（以磅为单位）。 |