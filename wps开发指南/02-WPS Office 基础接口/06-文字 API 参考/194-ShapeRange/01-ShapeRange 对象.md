# ShapeRange 对象

代表一个形状范围，即某个文档中的一组形状。形状范围可以只包含一个形状，也可以包含该文档中的所有形状。

## 说明


可以包含所需的任何形状（从文档中的所有形状中选择的形状或所选内容中的所有形状）来构造形状区域。例如，可以构造一个 ShapeRange 集合，该集合包含文档、 文档中所有选定的图形或文档中的所有任意多边形中的前三个形状。 **shape** 对象可以执行的大多数操作，您还可以执行仅包含一个形状的 **ShapeRange** 对象。某些操作，一个 **ShapeRange** 对象，该对象包含多个形状，在执行时将导致错误。

使用 **Range** (index) ，其中 index 是形状的名称或索引号或包含形状名称或索引号的数组，可返回一个 **ShapeRange** 集合，该集合代表文档中的一组形状。可使用 JavaScript 数组构造名称或索引号数组。


## 示例


```JavaScript
/*本示例设置活动文档上第一个和第三个形状的填充图案。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 3])
    shapeRange.Fill.Patterned(msoPatternHorizontalBrick)
}
```


```JavaScript
/*本示例在活动文档中选择名称为“shape 1”和“shape 2”的形状。*/
function test() {
    ActiveDocument.Shapes.Range(["shape 1", "shape 2"]).Select()
}
```
虽然可以使用 **Range** 方法返回任意数量的形状，但如果只想返回集合的单个成员，则使用 **Item** 方法会更简单。 例如，`Shapes.Item(1)`是比`Shapes.Range(1)`更简单。

使用 **ShapeRange.Item(index)** ，其中 index 是名称或索引号，可返回代表选定内容中形状的 **Shape** 对象。



```JavaScript
/*本示例为所选内容中的第一个形状设置填充效果，假定所选内容包含至少一个形状。*/
function test() {
    Selection.ShapeRange.Item(1).Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例选择活动文档第一节中的所有形状。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    range.ShapeRange.Select()
}
```
使用 **Align** 、 **Distribute** 或 **ZOrder** 方法可以相对于彼此或相对于文档定位一组形状。

使用 **Group** 、 **Regroup** ，或 **UnGroup** 从形状区域而形成的方法来创建和使用的单个形状。 **Shape** 对象的 **GroupItems** 属性返回 GroupShapes 对象，该对象表示已组合形成一个形状的所有形状。

录制器始终使用 **ShapeRange** 当录制的形状的属性。

一个 **ShapeRange** 对象不包括 **InlineShape** 对象。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Align](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Align) | 对齐指定形状范围中的形状。 |
| [Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Apply) | 应用于使用 **PickUp** 方法复制的特定图形格式。 |
| [ConvertToInlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/ConvertToInlineShape) | 将文档绘图层的指定形状转换为文字层的内嵌形状。只能转换代表图片、OLE 对象或 ActiveX 控件的形状。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Delete) | 删除指定区域的形状。 |
| [Distribute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Distribute) | 在指定的形状范围内均匀分布形状。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Duplicate) | 创建指定的 **ShapeRange** 对象的副本，以标准的偏移将新图形区域从原图形添加至 **Shapes** 集合，然后返回 **ShapeRange** 对象。 |
| [Flip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Flip) | 水平或垂直翻转一个图形。 |
| [Group](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Group) | 组合指定区域中的图形并将组合图形作为单个 **Shape** 对象返回。 |
| [IncrementLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/IncrementLeft) | 将指定形状水平移动指定的磅数。 |
| [IncrementRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/IncrementRotation) | 使指定的形状绕 Z 轴旋转指定的角度。 |
| [IncrementTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/IncrementTop) | 以指定磅数垂直移动指定形状。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Item) | 返回集合中的单个 **Shape** 对象。 |
| [PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/PickUp) | 复制指定形状的格式。 |
| [ScaleHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/ScaleHeight) | 按指定的比例缩放形状范围的高度。 |
| [ScaleWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/ScaleWidth) | 按指定比例调整形状的宽度。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Select) | 选择指定的形状范围。 |
| [SetShapesDefaultProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/SetShapesDefaultProperties) | 将文档中默认形状的格式应用于指定的形状范围。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Ungroup) | 取消指定形状范围中所有组合形状的组合，分解指定形状或形状范围中图片和 OLE 对象的组合，将取消组合后的形状以单个 **ShapeRange** 对象的形式返回。 |
| [ZOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/ZOrder) | 将集合中指定的形状区域移动到其他形状的前面或后面（也就是说，更改形状区域在 Z 顺序中的位置）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlternativeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/AlternativeText) | 返回或设置与网页的图形相关联的可选文字。 **String** 类型，可读写。 |
| [Anchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Anchor) | 返回一个 **Range** 对象，该对象代表指定图形区域的锁定范围。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/AutoShapeType) | 返回或设置指定的 **ShapeRange** 对象的图形类型，该对象不是代表线条或任意多边形，而是代表自选图形。 **MsoAutoShapeType** 类型，可读写。 |
| [CanvasItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/CanvasItems) | 返回一个 **CanvasShapes** 对象，该对象代表绘图画布上图形的集合。 |
| [Child](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Child) | 如果图形是子图形或位于图形区域的所有图形都是同一父图形的子图形，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中图形的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Fill) | 返回一个 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/obj)** 对象，该对象包含指定图形的填充格式属性。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Glow) | 返回一个 **GlowFormat** 对象，该对象代表形状区域的发光格式。只读。 |
| [GroupItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/GroupItems) | 返回一个 **GroupShapes** 对象，该对象代表指定组合形状中的单个形状。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Height) | 返回或设置指定的形状范围的高度。 **Single** 类型，可读写。 |
| [HeightRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/HeightRelative) | 返回或设置一个 **Single** 类型的值，该值代表将形状区域大小调整到的目标形状的百分比。可读写。 |
| [HorizontalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/HorizontalFlip) | 表示该形状范围已进行水平翻转。只读 **MsoTriState** 类型。 |
| [Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Hyperlink) | 返回一个 **Hyperlink** 对象，该对象代表与指定 **ShapeRange** 对象相关联的超链接。只读。 |
| [LayoutInCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/LayoutInCell) | 返回一个 **Long** 类型的值，该值代表表格中的形状是显示在表格内部还是表格外部。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Left) | 返回或设置一个 **Single** 类型的值，该值代表指定形状范围的水平位置，以磅为单位。也可以是任何有效的 [WdShapePosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShapePosition)常量。可读写。 |
| [LeftRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/LeftRelative) | 返回或设置一个 **Single** 类型的值，该值代表形状区域左侧的相对位置。可读写。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Line) | 返回一个 **LineFormat** 对象，该对象包含指定形状范围的线条格式属性。只读。 |
| [LockAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/LockAnchor) | 如果指定 **ShapeRange** 对象的锁定标记锁定到锁定范围，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [LockAspectRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/LockAspectRatio) | 如果在调整指定形状的大小时保留其最初比例，则该属性值为 **msoTrue** ；如果在调整形状大小时可分别改变其高度和宽度，则该属性值为 **msoFalse** 。可读写 **MsoTriState** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Name) | 返回或设置指定对象的名称。 **String** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **ShapeRange** 对象的父对象。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/PictureFormat) | 返回一个 **PictureFormat** 对象，该对象包含指定形状范围的图片格式属性。只读。 |
| [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Reflection) | 返回一个 **ReflectionFormat** 对象，该对象代表形状区域的反射格式。只读。 |
| [RelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/RelativeHorizontalPosition) | 指定形状范围的相对水平位置。可读写 **[WdRelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalPosition)** 类型。 |
| [RelativeHorizontalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/RelativeHorizontalSize) | 返回或设置一个 **[WdRelativeHorizontalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalSize)** 常量，该常量代表形状区域相对的对象。可读写。 |
| [RelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/RelativeVerticalPosition) | 指定形状范围的相对垂直位置。可读写 **[WdRelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalPosition)** 类型。 |
| [RelativeVerticalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/RelativeVerticalSize) | 返回或设置一个 **[WdRelativeVerticalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeVerticalSize)** 常量，该常量代表形状区域相对的对象。可读写。 |
| [Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Rotation) | 返回或设置指定形状绕 Z 轴旋转的度数。可读写 **Single** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Shadow) | 返回一个 **ShadowFormat** 对象，该对象代表指定形状的阴影格式。 |
| [ShapeStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/ShapeStyle) | 设置或返回指定形状范围中形状的形状样式。可读/写 **MsoShapeStyleIndex** 。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/SoftEdge) | 返回一个 **SoftEdgeFormat** 对象，该对象代表形状区域的柔化边缘格式。只读。 |
| [TextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/TextEffect) | 返回一个 **TextEffectFormat** 对象，该对象包含指定形状的文本效果格式属性。只读。 |
| [TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/TextFrame) | 返回一个 **TextFrame** 对象，该对象包含指定形状范围的文字。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/ThreeD) | 返回一个 **ThreeDFormat** 对象，该对象包含指定形状范围的三维格式属性。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Top) | 返回或设置指定形状或形状范围的垂直位置（以磅为单位）。可读写 **Single** 类型。 |
| [TopRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/TopRelative) | 返回或设置一个 **Single** 类型的值，该值代表形状区域顶部的相对位置。可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Type) | 返回形状类型。只读 **MsoShapeType** 类型。 |
| [VerticalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/VerticalFlip) | 如果指定形状围绕垂直轴进行翻转，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Visible) | 如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/Width) | 返回或设置范围内形状的宽度（以磅为单位）。可读写 **Long** 类型。 |
| [WidthRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/WidthRelative) | 返回或设置一个 **Single** 类型的值，该值代表形状区域的相对宽度。可读写。 |
| [WrapFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/WrapFormat) | 返回一个 **WrapFormat** 对象，该对象包含在指定的形状范围四周文字环绕的属性。只读。 |
| [ZOrderPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/member/ZOrderPosition) | 返回一个 **Long** 类型的值，该值代表指定的形状在 Z 顺序中的位置。只读。 |