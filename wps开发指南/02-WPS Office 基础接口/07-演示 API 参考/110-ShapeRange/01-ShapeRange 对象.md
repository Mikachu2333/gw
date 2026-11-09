# ShapeRange 对象

代表一个形状范围，即某个文档中的一组形状。形状范围可以只包含文档中的一个形状，也可以包含该文档中的所有形状。

## 说明


您可以使用任何所需的形状（从文档的所有形状中进行选择，或从选定内容的所有形状中进行选择）构造形状范围。例如，可以构造一个 **ShapeRange** 集合，其中包含文档中的前三个形状、文档中所有选定的形状，或文档中所有的任意多边形。

有关如何使用一个形状或同时使用多个形状的概述，请参阅 使用形状（图形对象）。

以下示例说明如何执行下列操作：

* 返回一组通过名称或索引序号指定的形状。

* 返回文档中全部或部分选定的形状。

使用 **Shapes.Range** (index) ，其中 index 是形状的名称或索引号，或者包含形状名称或索引号的数组，可返回一个 **ShapeRange** 集合，该集合代表文档中的一组形状。可使用 JavaScript 数组构造名称或索引号数组。


## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片上第一个和第三个形状的填充图案。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Range([1, 3]).Fill.Patterned(msoPatternHorizontalBrick)
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中名称为“矩形 5”和“直角三角形 7”形状的填充图案。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapeRange = slide.Shapes.Range(["矩形 5", "直角三角形 7"])
    shapeRange.Fill.Patterned(msoPatternHorizontalBrick)
}
```
虽然可以使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Range)** 方法返回任意数量的形状或幻灯片，但如果只想返回集合的单个成员，则使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Item)** 方法会更简单。例如，`Shapes.Item(1)` 是比 `Shapes.Range(1)` 更简单。

使用 **Selection** 对象的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/ShapeRange)** 属性可返回选定内容中的所有形状。



```JavaScript
/*本示例设置第一个窗口上选中形状的前景填充色，假定所选内容至少包含一个形状。*/
function test() {
    Windows.Item(1).Selection.ShapeRange.Fill.ForeColor.RGB = RGB(255, 0, 255)
}
```
使用 **Selection.ShapeRange.Item** (index) ，其中 index 是形状名称或索引号，以返回所选内容中的单个形状。



```JavaScript
/*本示例设置第一个窗口上选中的第二个形状的前景填充色，假定所选内容至少包含两个形状。*/
function test() {
    Windows.Item(1).Selection.ShapeRange.Item(2).Fill.ForeColor.RGB = RGB(255, 0, 255)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Align](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Align) | 对齐指定形状区域中的形状。 |
| [Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Apply) | 适用于指定的形状格式，该格式已使用 **[PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/PickUp)** 方法复制。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Copy) | 将指定对象复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Cut) | 删除指定对象并将其放到剪贴板中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Delete) | 删除指定的 **ShapeRange** 对象。 |
| [Distribute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Distribute) | 在指定的形状范围内均匀分布形状。可以指定是水平还是垂直分布形状，以及是在整个幻灯片中还是在它们原来所在的空间内分布形状。 |
| [Flip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Flip) | 将指定形状范围绕其水平或垂直轴翻转。 |
| [Group](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Group) | 将指定区域中的形状形成一组。以单个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象返回分组后的形状。 |
| [IncrementLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/IncrementLeft) | 以指定磅数水平移动指定的形状范围。 |
| [IncrementRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/IncrementRotation) | 按指定度数改变指定形状绕 z 轴的旋转量。使用 **Rotation** 属性设置形状的绝对旋转量。 |
| [IncrementTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/IncrementTop) | 以指定磅数垂直移动指定的形状范围。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Item) | 返回指定的 **ShapeRange** 集合中的单个 **Shape** 对象。 |
| [MergeShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/MergeShapes) | 合并范围中的所有形状以创建单个新形状。 |
| [PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/PickUp) | 复制指定形状的格式。用 **Apply** 方法可将复制的格式应用于其他形状。 |
| [PickupAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/PickupAnimation) | 从 **ShapeRange** 对象中拾取所有动画。 |
| [ScaleHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/ScaleHeight) | 以指定的比例缩放形状范围的高度。 |
| [ScaleWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/ScaleWidth) | 根据指定的系数缩放形状宽度。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Select) | 选择指定的对象。 |
| [SetShapesDefaultProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/SetShapesDefaultProperties) | 将指定形状的格式应用于默认形状。使用该方法后所创建的形状将默认应用此格式。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Ungroup) | 取消指定形状或者形状区域中任意组合形状的组合。取消指定形状或形状区域中图片和 OLE 对象的组合。取消组合后的形状以单个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象的形式返回。 |
| [ZOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/ZOrder) | 将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 z-顺序中的位置）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlternativeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/AlternativeText) | 返回或设置与 Web 演示文稿中的形状关联的可选文字。可读/写。 |
| [AnimationSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/AnimationSettings) | 返回一个 **[AnimationSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/obj)** 对象，该对象代表所有可应用于指定形状的动画的特殊效果。只读。 |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/AutoShapeType) | 返回或设置指定的 **ShapeRange** 对象的形状类型，该形状类型必须代表自选图形，而不能代表直线、任意多边形图形或连接符。可读/写。 |
| [BlackWhiteMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/BlackWhiteMode) | 返回或设置一个值，该值指示以黑白模式查看演示文稿时指定形状的出现形式。可读/写。 |
| [Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Chart) | 返回当前 **Shape** 对象的 **Chart** 对象。只读。 |
| [Child](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Child) | 如果形状是子形状，或者如果形状区域内的所有形状都是同一个父形状的子形状，则属性值为 **msoTrue** 。只读。 |
| [ConnectionSiteCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/ConnectionSiteCount) | 返回指定形状中的连结点的数量。只读。 |
| [Connector](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Connector) | 确定指定的形状是否为连接符。只读。 |
| [ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/ConnectorFormat) | 返回 **[ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/obj)** 对象，包含连接符格式属性。适用于代表连接符的 **Shape** 或 **ShapeRange** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Fill) | 返回一个 FillFormat 对象，该对象包含指定形状的填充格式属性。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Glow) | 返回指定形状范围的发光格式。只读。 |
| [GroupItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/GroupItems) | 返回一个 **[GroupShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/obj)** 对象，该对象代表指定形状组中的单个形状。使用 **GroupShapes** 对象的 **Item** 方法可返回形状组中的单个形状。适用于代表组合形状的 **Shape** 或 **ShapeRange** 对象。只读。 |
| [HasChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/HasChart) | 返回指定的对象代表的形状区域是否包含图表。只读。 |
| [HasTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/HasTable) | 返回指定的形状是否为表。只读。MsoTriState 类型。 |
| [HasTextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/HasTextFrame) | 返回指定形状是否有文本框。只读。 **MsoTriState** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Height) | 以磅为单位返回或设置指定对象的高度。可读/写， **Single** 类型。 |
| [HorizontalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/HorizontalFlip) | 返回指定的形状是否绕水平轴翻转。只读。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Id) | 返回一个 **Long** 类型值，该值标识形状或形状范围。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Left) | 返回或设置一个 **Single** 类型值，该值代表从形状范围中最左侧形状的左边缘到幻灯片左边缘的距离（以磅为单位）。可读/写。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Line) | 返回一个 **LineFormat** 对象，该对象包含指定形状的线条格式属性。（对于线条来说， **LineFormat** 对象代表线条本身；而对于带有边框的形状来说， **LineFormat** 对象代表边框。）只读。 |
| [LockAspectRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/LockAspectRatio) | 确定在调整指定形状的大小时该形状是否保持其原始比例。可读/写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Name) | 创建形状时，WPP 自动以 ShapeType Number 的形式为其分配一个名称，其中 ShapeType 指明形状或自选图形的类型，Number 是在幻灯片上形状的集合中具有唯一性的整数。例如，为幻灯片上的形状自动生成的名称可以为 Placeholder 1、Oval 2 和 Rectangle 3。为了避免与自动分配的名称发生冲突，对用户定义的名称请不要使用 ShapeType Number 形式，其中 ShapeType 为一个用于自动生成名称的值，Number 为任意的正整数。形状范围必须至少包含一个形状。 **String** 类型，可读/写。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/PictureFormat) | 返回一个 **PictureFormat** 对象，该对象包含指定形状的图片格式属性。只读。 |
| [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Reflection) | 返回指定形状范围的反射格式。只读。 |
| [Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Rotation) | 返回或设置指定形状绕 Z 轴旋转的角度。可读/写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Shadow) | 返回一个只读的 **ShadowFormat** 对象，该对象包含指定形状的阴影格式属性。 |
| [ShapeStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/ShapeStyle) | 设置或返回指定对象的形状样式索引。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/SoftEdge) | 返回指定形状区域的柔化边缘格式。只读。 |
| [Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Table) | 返回一个 **[Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/obj)** 对象，该对象代表某个形状或形状区域内的一个表格。只读。 |
| [TextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/TextEffect) | 返回一个 **[TextEffectFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/obj)** 对象，该对象包含指定形状的文本效果格式属性。只读。 |
| [TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/TextFrame) | 返回一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/obj)** 对象，该对象包含指定形状或母版文本样式的对齐方式和定位属性。只读。 |
| [TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/TextFrame2) | 返回与指定的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象相关联的 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/obj)** 对象，前者包含指定的形状范围的对齐和定位属性。只读。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/ThreeD) | 返回一个 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/obj)** 对象，该对象包含指定形状的三维效果格式属性。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Top) | 返回或设置一个 **Single** 类型值，该值代表形状范围内最上方形状的上边缘到文档上边缘的距离。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Type) | 返回一个 **MsoShapeType** 常量，该常量代表单个形状或形状范围内多个形状的类型。只读。 |
| [VerticalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/VerticalFlip) | 确定指定的形状是否绕垂直轴翻转。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Visible) | 返回或设置指定对象的可见性或应用于指定对象的格式。可读/写。 **MsoTriState** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Width) | 以磅为单位返回或设置指定对象的宽度。可读/写 **Single** 类型。 |