# ShapeRange 对象

代表形状区域，它是文档中的一组形状。

## 说明


形状区域可以只包含文档中的一个形状，或者也可包含所有形状。您可以在形状区域中包含所需的任意形状（在文档中的所有形状中选取，或从选定内容中的所有形状中选取）。例如，您可以构造一个 **ShapeRange** 集合，它包含文档中前三个形状、文档中所有选定的形状，或文档中所有的任意多边形的。

### 1\. 返回指定名称或索引号的一组形状

使用 `Shapes.Range`(*index*)（其中 *index* 是形状的名称或索引号，或由形状的名称或索引号组成的数组）可返回代表文档中的一组形状的 **ShapeRange** 集合。您可以使用 **Array** 函数来构造名称或索引号的数组。


## 示例


```JavaScript
/*本示例设置第一张工作表上的形状一和三的填充图案。*/
function test() {
    let myDocument = Application.Worksheets.Item(1)
    myDocument.Shapes.Range([1, 3]).Fill.Patterned(msoPatternHorizontalBrick)
}
```
虽然可以使用 **Range** 属性来返回任意数量的形状或幻灯片，但如果您只想返回一个集合成员，则使用 **Item** 方法会更简单。例如，`Shapes(1)` 比 `Shapes.Range(1)` 简单。



```JavaScript
/*本示例设置第一张工作表上名为“Oval 4”和“Rectangle 5”的形状的填充图案。*/
function test() {
    let myDocument = Application.Worksheets.Item(1)
    let myRange = myDocument.Shapes.Range(["Oval 4", "Rectangle 5"])
    myRange.Fill.Patterned(msoPatternHorizontalBrick)
}
```
### 2\. 返回文档中全部或部分选定的形状

使用 **Selection** 对象的 **ShapeRange** 属性可返回选定对象中的所有形状。



```JavaScript
/*本示例为活动工作表上选定内容中的所有形状设置前景填充色。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Fill.ForeColor.RGB = RGB(255, 0, 255)
}
```
使用 `Selection.ShapeRange`(*index*)（其中 *index* 是形状的名称或索引号）返回某一选定的形状。



```JavaScript
/*本示例为活动工作表上选定内容中的第二个形状设置前景填充色。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Item(2).Fill.ForeColor.RGB = RGB(255, 0, 255)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Align](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Align) | 对齐指定形状区域中的形状。 |
| [Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Apply) | 应用通过 **[PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/PickUp)** 方法复制的指定形状格式。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Delete) | 删除对象。 |
| [Distribute](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Distribute) | 水平或垂直地分布指定的形状区域中的各形状。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Duplicate) | 复制对象，并返回对新复制对象的引用。 |
| [Flip](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Flip) | 绕指定形状的水平或垂直对称轴翻转该形状。 |
| [Group](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Group) | 将指定区域中的形状形成一组。 |
| [IncrementLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/IncrementLeft) | 以指定磅数水平移动指定形状。 |
| [IncrementRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/IncrementRotation) | 使指定的形状按指定度数值绕 Z 轴旋转。使用 **[Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Rotation)** 属性可设置形状的绝对转角。 |
| [IncrementTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/IncrementTop) | 以指定磅数垂直移动指定形状。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Item) | 从集合中返回一个对象。 |
| [PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/PickUp) | 复制指定形状的格式。使用 **[Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Apply)** 方法可将复制的格式应用到其他形状。 |
| [ScaleHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ScaleHeight) | 按指定的比例调整形状的高度。对于图片和 OLE 对象，可以指定是相对于原有尺寸还是相对于当前尺寸来调整该形状。对于不是图片和 OLE 对象的形状，总是相对于其当前大小来调整高度。 |
| [ScaleWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ScaleWidth) | 按指定的比例调整形状的宽度。对于图片和 OLE 对象，可以指定是相对于原有尺寸还是相对于当前尺寸来调整该形状。对于不是图片和 OLE 对象的形状，总是相对于其当前大小来调整宽度。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Select) | 选择对象。 |
| [SetShapesDefaultProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/SetShapesDefaultProperties) | 将指定形状的格式设置为形状的默认格式。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Ungroup) | 取消指定形状或者形状区域中组合形状的组合。取消指定形状或形状区域中图片和 OLE 对象的组合。 |
| [ZOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ZOrder) | 将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 z-次序中的位置）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Adjustments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Adjustments) | 返回一个 **Adjustments** 对象，它包括指定形状的所有调整操作的调整值。应用于任何代表自选图形、艺术字或连接符的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象。 |
| [AlternativeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/AlternativeText) | 返回或设置一个当 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象保存为网页时，该对象的描述性（可选）文本字符串。 **String** 型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/AutoShapeType) | 返回或设置指定的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 或 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象的形状类型，该对象必须代表自选图形，而不能代表直线、任意多边形图形或连接符。 **[MsoAutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAutoShapeType)** 类型，可读写。 |
| [Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Chart) | 返回 **Chart** 对象，该对象代表形状区域中包含的图表。只读。 |
| [Child](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Child) | 如果指定的形状是子形状，或者如果形状区域中的所有形状都是同一个父形状的子形状，则返回 **msoTrue** 。 **MsoTriState** 类型，只读。 |
| [ConnectionSiteCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ConnectionSiteCount) | 返回指定形状中的连接部位的数量。 **Long** 型，只读。 |
| [Connector](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Connector) | 如果指定的形状是连接符，则此属性为 **True** 。 **MsoTriState** 类型，只读。 |
| [ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ConnectorFormat) | 返回一个包含连接符格式属性的 **ConnectorFormat** 对象。应用于代表连接符的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Fill) | 返回指定形状的 **FillFormat** 对象或指定图表的 **ChartFillFormat** 对象，这些对象包含形状或图表的填充格式属性。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Glow) | 返回一个包含形状区域发光格式属性的指定形状区域的 **GlowFormat** 对象。只读。 |
| [GroupItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/GroupItems) | 返回一个 **GroupShapes** 对象，它代表指定形状组中的单个形状。使用 **GroupShapes** 对象的 **Item** 方法可从形状组中返回单个形状。应用于代表成组形状的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象。只读。 |
| [HasChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/HasChart) | 返回形状区域是否包含图表。 **MsoTriState** 类型，只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Height) | 返回或设置一个 **Single** 值，它代表对象的高度（以磅为单位）。 |
| [HorizontalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/HorizontalFlip) | 如果指定的形状绕水平对称轴翻转，则为 **True** 。 **MsoTriState** ，只读。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ID) | 返回一个 Long 值，它代表指定对象的类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Left) | 返回或设置 **Single** 值，它代表从对象左边缘到工作表的 A 列左边缘或到图表上的图表区左边缘的距离（以磅为单位）。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Line) | 返回一个 **LineFormat** 对象，它包含指定形状的线条格式属性。对于线条， **LineFormat** 对象代表线条本身；而对于带有边框的形状， **LineFormat** 对象代表边框。只读。 |
| [LockAspectRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/LockAspectRatio) | 如果指定的形状在调整大小时其原始比例保持不变，则此属性为 **True** 。如果调整大小时可以分别更改形状的高度和宽度，则此属性为 **False** 。 **MsoTriState** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Parent) | 返回指定对象的父对象。只读。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/PictureFormat) | 返回一个 **PictureFormat** 对象，它包含指定形状的图片格式属性。应用于代表图片或 OLE 对象的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象。只读。 |
| [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Reflection) | 返回指定形状区域的 **ReflectionFormat** 对象，该对象包含形状区域的反射格式属性。只读。 |
| [Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Rotation) | 返回或设形状的旋转角度（以度为单位）。 **Single** 型，可读写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Shadow) | 返回一个只读的 **ShadowFormat** 对象，它包含指定形状的阴影格式属性。 |
| [ShapeStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ShapeStyle) | 返回或设置 **[MsoShapeStyleIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoShapeStyleIndex)** 类型的值，该值代表形状区域的形状样式。可读/写。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/SoftEdge) | 返回指定形状区域的 **SoftEdgeFormat** 对象，该对象包含形状区域的柔化边缘格式设置属性。只读。 |
| [TextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/TextEffect) | 该属性返回一个 **TextEffectFormat** 对象，它包含指定形状的文本效果格式属性。 |
| [TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/TextFrame) | 返回一个 **TextFrame** 对象，它包含指定形状的对齐方式和定位属性。 |
| [TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/TextFrame2) | 返回一个 **TextFrame2** 对象，该对象包含指定形状区域的文本格式。只读。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ThreeD) | 返回一个 **ThreeDFormat** 对象，它包含指定形状的三维效果格式属性。只读。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Title) | 返回或设置与指定的形状区域关联的可选文本的标题。可读/写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Top) | 返回或设置一个 **Single** 值，它代表形状范围内最上面的形状的上边缘到工作表上边缘的距离（以磅为单位）。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Type) | 返回一个代表形状类型的 **MsoShapeType** 值。 |
| [VerticalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/VerticalFlip) | 如果指定的形状绕垂直坐标轴翻转，则此属性为 **True** 。 **MsoTriState** 类型，只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Visible) | 返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/Width) | 返回或设置一个 **Single** 值，它代表对象的宽度（以磅为单位）。 |
| [ZOrderPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ZOrderPosition) | 返回指定形状在 z-顺序中的位置。 **Long** 型，只读。 |