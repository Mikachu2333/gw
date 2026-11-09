# Shape 对象

代表绘制层中的对象，如自选图形、任意多边形、OLE 对象、ActiveX 控件或图片。 **Shape** 对象是 **Shapes** 集合的一个成员，该集合包含了某个文档的正文或个文档的所有页眉和页脚中的所有形状。

## 说明


形状总是属于某个锁定范围。可以将形状置于包含锁定标记的页面上的任何位置。有三种代表形状的对象：

1. **Shapes** 集合，代表文档中所有的形状
2. **ShapeRange** 对象，代表文档中指定的形状子集（例如， **ShapeRange** 对象可以代表文档中的形状一和形状四，也可以代表文档中的所有选定形状）；
3. **Shape** 对象，代表文档中的一个形状。如果需要同时处理若干个形状或处理所选内容中的若干个形状，可使用 **ShapeRange** 集合。

使用 **Shapes** (*Index*) 可返回一个 **Shape** 对象，其中 *Index* 为名称或索引号。

在创建每个形状时为其指定一个默认名称。例如，如果向文档中添加了三个不同的形状，则这三个形状的名称可以是“矩形 2”、“文本框 3”和“椭圆 4”。要使形状的名称更有意义，请设置 **Name** 属性。

使用 **ShapeRange** (*Index*) 可返回代表所选内容中某个形状的 **Shape** 对象，其中 *Index* 为名称或索引号。

要将 **Shape** 对象添加到指定文档的形状集合，并返回一个代表新建形状的 **Shape** 对象，可使用 **Shapes** 集合的下列方法之一： **AddCallout** 、 **AddCurve** 、 **AddLabel** 、 **AddLine** 、 **AddOleControl** 、 **AddOleObject** 、 **AddPolyline** 、 **AddShape** 、 **AddTextbox** 、 **AddTextEffect** 或 **BuildFreeForm** 。

使用 **GroupItems** (*Index*) 可返回一个代表组合形状中的单个形状的 **Shape** 对象，其中 *Index* 为形状的名称或形状在该组中的索引号。

使用 **Group** 或 **Regroup** 方法可对一系列形状进行组合，并返回一个代表新组合的 **Shape** 对象。形成一个组合之后，便可以像处理任何其他形状一样处理该组合。

每个 **Shape** 对象都锁定到某个文本范围。将某个形状锁定到包含锁定范围的第一段的开头。该形状总是与其锁定标记在同一页上。

将 **ShowObjectAnchors** 属性设置为 **True** 可以查看锁定标记本身。形状的 **Top** 和 **Left** 属性决定了其垂直和水平位置。形状的 **RelativeHorizontalPosition** 和 **RelativeVerticalPosition** 属性决定了形状的位置是从锁定段落、包含锁定段落的栏、页边距还是页边缘开始计算。

如果将形状的 **LockAnchor** 属性设置为 **True** ，则无法将锁定标记从其所在位置拖动到页面上。

使用 **Fill** 属性可返回 **FillFormat** 对象，该对象包含用于设置闭合形状的填充格式的所有属性和方法。 **Shadow** 属性返回 **ShadowFormat** 对象，该对象用于设置阴影的格式。使用 **Line** 属性可返回 **LineFormat** 对象，该对象包含用于设置线条格式和箭头格式的各种属性和方法。 **TextEffect** 属性返回 **TextEffectFormat** 对象，该对象用于设置艺术字的格式。 **Callout** 属性返回 **CalloutFormat** 对象，该对象用于设置线形标注的格式。 **WrapFormat** 属性返回 **WrapFormat** 对象，该对象用于定义文字环绕形状的方式。 **ThreeD** 属性返回 **ThreeDFormat** 对象，该对象用于创建三维形状。可使用 **PickUp** 和 **Apply** 方法将一个形状的格式设置传送给另一个形状。

对 **Shape** 对象使用 **SetShapesDefaultProperties** 方法可设置文档的默认形状的格式。新形状将继承默认形状的许多属性。

使用 **Type** 属性可指定形状的类型；例如，任意多边形、自选图形、OLE 对象、标注或链接图片。使用 **AutoShapeType** 属性可指定自选图形的类型；例如，椭圆、矩形或气球。

使用 **Width** 和 **Height** 属性可指定形状的大小。

 **TextFrame** 属性返回 **TextFrame** 对象，该对象包含用于将文本附加到形状和链接文本框之间的文本的所有属性和方法。

 **Shape** 对象锁定到某一文本范围，但可以自由浮动，并且可以放置在页面上的任何位置。 **InlineShape** 对象被视为字符，并作为字符置于文本行中。可以使用 **ConvertToInlineShape** 方法和 **ConvertToShape** 方法来转换形状的类型。只能将图片、OLE 对象和 ActiveX 控件转换为内嵌形状。


## 示例


```JavaScript
/*本示例水平翻转活动文档中的第一个形状。*/
function test() {
    Application.ActiveDocument.Shapes.Item(1).Flip(msoFlipHorizontal)
}
```


```JavaScript
/*本示例水平翻转活动文档中名为 Rectangle 1 的形状。*/
function test() {
    Application.ActiveDocument.Shapes.Item("Rectangle 1").Flip(msoFlipHorizontal)
}
```


```JavaScript
/*本示例为所选内容中的第一个形状设置填充效果。*/
function test() {
    Selection.ShapeRange.Item(1).Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例为所选区域的所有形状设置填充效果。*/
function test() {
    let shapeRange = Application.Selection.ShapeRange
    for (let i = 1; i <= shapeRange.Count; i++) {
        shapeRange.Item(i).Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例在活动文档中添加一个矩形，并显示该矩形的宽度。*/
function test() {
    let shape = Application.ActiveDocument.Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200)
    alert(shape.Width)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Apply](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Apply) | 应用于使用 **PickUp** 方法复制的特定图形格式。 |
| [ConvertToInlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/ConvertToInlineShape) | 将文档绘图层的指定图形转换为文字层的嵌入式图形。只能转换代表图片、OLE 对象或 ActiveX 控件的图形。此方法返回一个 **InlineShape** 对象，该对象代表图片或 OLE 对象。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Delete) | 删除指定的图形节点。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Duplicate) | 创建指定的 **Shape** 对象的副本，以标准的偏移将新图形从原图形添加至 **Shapes** 集合，然后返回新的 **Shape** 对象。 |
| [Flip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Flip) | 水平或垂直翻转一个图形。 |
| [IncrementLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/IncrementLeft) | 将指定形状水平移动指定的磅数。 |
| [IncrementRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/IncrementRotation) | 使指定的形状绕 Z 轴旋转指定的角度。 |
| [IncrementTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/IncrementTop) | 以指定磅数垂直移动指定形状。 |
| [PickUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/PickUp) | 复制指定形状的格式。 |
| [SaveAsPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/SaveAsPicture) | 将单个形状另存为图片文件。 |
| [ScaleHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/ScaleHeight) | 以指定的比例缩放形状的高度。 |
| [ScaleWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/ScaleWidth) | 按指定的比例缩放形状的宽度。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Select) | 选择指定的形状。 |
| [SetShapesDefaultProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/SetShapesDefaultProperties) | 将文档中默认形状的格式应用于指定的形状。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Ungroup) | 取消组合指定形状中的所有组合形状。 |
| [ZOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/ZOrder) | 将指定的形状移到集合中其他形状的前面或后面（即更改该形状在 Z 顺序中的位置）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Adjustments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Adjustments) | 返回一个 **Adjustments** 对象，该对象包含所有对指定 **Shape** 对象（代表自选图形或艺术字）进行调整操作的调整值。只读。 |
| [AlternativeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/AlternativeText) | 返回或设置与网页的图形相关联的可选文字（可选文字：由 Web 浏览器用于在图像下载过程中显示文本，其对象是那些关闭图形的用户，以及那些依赖屏幕阅读软件将屏幕上的图形转换为可读语言的用户。）。 **String** 类型，可读写。 |
| [Anchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Anchor) | 返回一个 **Range** 对象，该对象代表指定图形或图形区域的锁定范围。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/AutoShapeType) | 返回或设置指定的 **Shape** 对象的图形类型，该对象不是代表线条或任意多边形，而是代表自选图形。 **MsoAutoShapeType** 类型，可读写。 |
| [CanvasItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/CanvasItems) | 返回一个 **CanvasShapes** 对象，该对象代表绘图画布上图形的集合。 |
| [Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Chart) | 返回一个 **Chart** 对象，该对象代表文档中形状集合内的图表。只读。 |
| [Child](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Child) | 如果图形是子图形或位于图形区域的所有图形都是同一父图形的子图形，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Fill) | 返回一个 **FillFormat** 对象，该对象包含指定图形的填充格式属性。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Glow) | 返回一个 **GlowFormat** 对象，该对象代表形状的发光格式。只读。 |
| [GroupItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/GroupItems) | 返回一个 **GroupShapes** 对象，该对象代表指定图形组中的单个图形。只读。 |
| [HasChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/HasChart) | 如果指定的形状具有图表，则为 **msoTrue** 。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Height) | 返回或设置指定图形的高度。 **Single** 类型，可读写。 |
| [HeightRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/HeightRelative) | 返回或设置一个 **Single** 类型的值，该值代表形状高度的相对百分比。可读写。 |
| [HorizontalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/HorizontalFlip) | 表示形状进行过水平翻转。 **MsoTriState** 类型，只读。 |
| [Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Hyperlink) | 返回一个 **Hyperlink** 对象，该对象代表与 **Shape** 对象相关联的超链接。只读。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/ID) | 返回指定形状的标识类型。只读 **Long** 类型。 |
| [LayoutInCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/LayoutInCell) | 返回一个 **Long** 类型的值，该值表示表格中的形状显示在表格内部还是表格外部。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Left) | 返回或设置一个 **Single** 类型的值，该值代表指定形状或形状范围的水平位置（以磅为单位）。也可以是任何有效的 **WdShapePosition** 常量。可读写。 |
| [LeftRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/LeftRelative) | 返回或设置一个 **Single** 类型的值，该值代表形状左侧的相对位置。可读写。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Line) | 返回一个 **LineFormat** 对象，该对象包含指定形状的线条格式属性。只读。 |
| [LinkFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/LinkFormat) | 返回一个 **LinkFormat** 对象，该对象代表链接到文件的形状的链接选项。只读。 |
| [LockAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/LockAnchor) | 如果 **Shape** 对象的锁定标记锁定到锁定范围，则该属性值为 **True** 。可读写 **Long** 类型。 |
| [LockAspectRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/LockAspectRatio) | 如果在调整指定形状的大小时保留其最初比例，则该属性值为 **msoTrue** ；如果在调整形状大小时可分别改变其高度和宽度，则该属性值为 **msoFalse** 。可读写 **MsoTriState** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Name) | 返回或设置指定对象的名称。 **String** 类型，可读写。 |
| [Nodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Nodes) | 返回一个 **ShapeNodes** 集合，该集合代表指定形状的几何描述。 |
| [OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/OLEFormat) | 返回一个 **OLEFormat** 对象，该对象代表指定形状、内嵌形状或域的 OLE 特性（链接除外）。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Shape** 对象的父对象。 |
| [ParentGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/ParentGroup) | 返回一个 **Shape** 对象，该对象代表子形状或子形状范围的通用父形状。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/PictureFormat) | 返回一个 **PictureFormat** 对象，该对象包含指定对象的图片格式属性。 |
| [Reflection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Reflection) | 返回一个 **ReflectionFormat** 对象，该对象代表形状的反射格式。只读。 |
| [RelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/RelativeHorizontalPosition) | 指定形状的相对水平位置。可读写 **WdRelativeHorizontalPosition** 类型。 |
| [RelativeHorizontalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/RelativeHorizontalSize) | 返回或设置一个 **WdRelativeHorizontalSize** 常量，该常量代表形状区域相对的对象。可读写。 |
| [RelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/RelativeVerticalPosition) | 指定形状的相对垂直位置。可读写 **WdRelativeVerticalPosition** 类型。 |
| [RelativeVerticalSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/RelativeVerticalSize) | 返回或设置一个 **WdRelativeVerticalSize** 常量，该常量代表形状的相对垂直大小。可读写。 |
| [Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Rotation) | 返回或设置指定图形绕 Z 轴旋转的度数。正数表示按顺时针方向进行旋转，负值表示按逆时针方向旋转。 **Single** 类型，可读写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Shadow) | 返回一个 **ShadowFormat** 对象，该对象代表指定形状的阴影格式。 |
| [SmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/SmartArt) | 返回 SmartArt对象，该对象提供一种处理与指定形状相关联的 SmartArt 的方式。只读。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/SoftEdge) | 返回一个 **SoftEdgeFormat** 对象，该对象代表形状的软边缘格式。只读。 |
| [TextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/TextEffect) | 返回一个 **TextEffectFormat** 对象，该对象包含指定形状的文本效果格式属性。只读。 |
| [TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/TextFrame) | 返回一个 **TextFrame** 对象，该对象包含指定形状的文字。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/ThreeD) | 返回一个 **ThreeDFormat** 对象，该对象包含指定形状的三维格式属性。只读。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Title) | 返回或设置包含指定形状的标题的 **String** 类型值。可读/写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Top) | 返回或设置指定形状或形状范围的垂直位置（以磅为单位）。可读写 **Single** 类型。 |
| [TopRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/TopRelative) | 返回或设置一个 **Single** 类型的值，该值代表形状顶部的相对位置。可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Type) | 返回内嵌形状的类型。只读 **MsoShapeType** 类型。 |
| [VerticalFlip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/VerticalFlip) | 如果指定形状围绕垂直轴进行翻转，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Visible) | 如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Width) | 返回或设置指定形状的宽度（以磅为单位）。可读写 **Long** 类型。 |
| [WidthRelative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/WidthRelative) | 返回或设置一个代表形状的相对宽度的 **Single** 。可读写。 |
| [WrapFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/WrapFormat) | 返回一个 **WrapFormat** 对象，该对象包含在指定的形状四周文字环绕的属性。只读。 |
| [ZOrderPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/ZOrderPosition) | 返回一个 **Long** 类型的值，该值代表指定的形状在 Z 顺序中的位置。只读。 |