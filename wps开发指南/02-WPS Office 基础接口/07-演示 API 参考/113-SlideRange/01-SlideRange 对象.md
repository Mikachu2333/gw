# SlideRange 对象

代表备注页或幻灯片范围的集合，该范围是一组幻灯片，少则仅包含一个，多则包含演示文稿中的所有幻灯片。

## 说明


您可以使用任何所需的幻灯片（从演示文稿的所有幻灯片中进行选择，或从选定内容的所有幻灯片中进行选择）构造幻灯片范围。例如，可以构造一个 **SlideRange** 集合，其中包含演示文稿中的前三张幻灯片、演示文稿中所有选定的幻灯片，或演示文稿中所有的标题幻灯片。

如同在用户界面中选中多个幻灯片并通过命令同时操作它们一样，通过建立一个 **SlideRange** 集合并对其使用属性和方法，可以在编程中同时操作多个幻灯片。如同用户界面中用于单张幻灯片的命令不能用于多张幻灯片一样，某些应用于单独 **Slide** 对象或只包含一张幻灯片的 **SlideRange** 集合的属性和方法不能用于包含多张幻灯片的 **SlideRange** 集合。一般情况下，如果选中多张幻灯片时，某些操作无法手动完成（例如返回某一幻灯片中的单个形状），则编程时也不能对包含多张幻灯片的 **SlideRange** 集合进行该操作。

对于用户界面中可用于一张或多张选中幻灯片的操作（例如复制幻灯片到剪贴板或设置幻灯片背景填充），相应的属性和方法也可用于包含多张幻灯片的 **SlideRange** 集合。下面是如何对多张幻灯片使用这些属性和方法的一些指导。

* 对 **SlideRange** 集合应用某方法等效于将该范围中所有 **Slide** 对象作为一个组来应用此方法。
* 设置 **SlideRange** 集合的属性值等效于逐一设置该范围中每个幻灯片的属性值（对于枚举类型的属性，设置“Mixed”值无效）。
* 如果 **SlideRange** 集合中的所有幻灯片对于某个返回枚举类型的属性具有相同的值，则该属性将返回该集合中单张幻灯片的属性值。如果该集合中的幻灯片对于该属性具有不同的值，则该属性将返回“Mixed”值。
* 如果 **SlideRange** 集合中的所有幻灯片对于某个返回简单数据类型（如 **Long** 、 **Single** 或 **String** ）的属性具有相同的值，则该属性将返回该集合中单张幻灯片的该属性值。如果该集合中的幻灯片对于该属性具有不同的值，则该属性将返回 -2 或产生错误。例如，对于包含多张幻灯片的 **SlideRange** 对象使用 **Name** 属性将产生错误，因为每张幻灯片的 **Name** 属性都有不同的值。
* 幻灯片的某些格式属性不是通过直接应用于 **SlideRange** 集合的属性和方法来设置，而是通过应用于 **SlideRange** 集合中的对象（如 **ColorScheme** 对象）的属性和方法来设置。如果所含对象代表用户界面中可用于多个对象的操作，则可以从包含多张幻灯片的 **SlideRange** 集合返回该对象，且其属性和方法遵循前述规则。例如，可以使用 **ColorScheme** 属性返回 **ColorScheme** 对象，该对象代表用于指定 **SlideRange** 集合中所有幻灯片的配色方案。设置此 **ColorScheme** 对象的属性也将设置 **SlideRange** 集合中所有单张幻灯片的 **ColorScheme** 对象的相应属性。

以下示例说明如何执行下列操作：

* 返回一组通过名称或索引号指定的幻灯片
* 返回演示文稿中全部或部分选定的幻灯片
* 返回备注页
* 将属性和方法应用于某个幻灯片范围

对 **SlideRange** 对象代表的备注页使用下列属性和方法无效： **Copy** 方法、 **Cut** 方法、 **Delete** 方法、 **Duplicate** 方法、 **HeadersFooters** 属性、 **Hyperlinks** 属性、 **Layout** 属性、 **PrintSteps** 属性、 **SlideShowTransition** 属性。

使用 **Slide.Range** (*index*)，其中 *index* 是幻灯片的名称或索引号或包含幻灯片名称或索引号的数组，可返回一个 **SlideRange** 集合，该集合代表演示文稿中的一组幻灯片。


## 示例


```JavaScript
/*本示例设置活动演示文稿中第一张和第三张幻灯片的背景填充。*/
function test() {
    let slideRange = ActivePresentation.Slides.Range([1, 3])
    slideRange.FollowMasterBackground = msoFalse
    slideRange.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```
虽然可以使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/Range)** 方法返回任意数目的幻灯片，但如果您只想返回 **SlideRange** 集合的单个成员，则使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/member/Item)** 方法更简单。例如，`Slides(1)` 比 `Slides.Range(1)` 更简单。

使用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/obj)** 对象的 **SlideRange** 属性返回选定内容中的所有幻灯片。



```JavaScript
/*本示例设置活动演示文稿第一个窗口中所有选定幻灯片的背景填充。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    slideRange.FollowMasterBackground = msoFalse
    slideRange.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```
使用 **Selection.SlideRange** (*index*)（其中 *index* 是幻灯片名称或索引号）从所选内容返回一张幻灯片。



```JavaScript
/*本示例设置活动演示文稿第一个窗口中选定幻灯片的集合中的第二张幻灯片的背景填充。*/
function test() {
    let slide = ActivePresentation.Windows.Item(1).Selection.SlideRange(2)
    slide.FollowMasterBackground = msoFalse
    slide.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
}
```
使用 **NotesPage** 属性返回一个 **SlideRange** 集合，代表指定的备注页。



```JavaScript
/*本示例将文本插入活动演示文稿中第一张幻灯片的备注页上的第二个占位符（备注区域）。*/
function test() {
    ActivePresentation.Slides.Item(1).NotesPage.Shapes.Placeholders.Item(2).TextFrame.TextRange.InsertAfter("Added Text")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Copy) | 将指定对象复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Cut) | 删除指定对象并将其放到剪贴板中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Delete) | 删除指定的 **SlideRange** 对象。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Duplicate) | 创建指定 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象的副本，将新的幻灯片范围添加到 **Slides** 集合中，紧跟在最初指定的幻灯片范围之后，然后返回表示重复幻灯片的 **SlideRange** 对象。 |
| [Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Export) | 使用指定的图形筛选器导出幻灯片或幻灯片范围，并将导出的文件以指定的文件名保存。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Item) | 从指定 **SlideRange** 集合中返回单个 **Slide** 对象。 |
| [MoveTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/MoveTo) | 将指定对象移动到同一集合中的指定位置，并适当地对集合中所有其他项目进行重新编号。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Select) | 选择指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Background) | 返回代表幻灯片背景的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。 |
| [ColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/ColorScheme) | 返回或设置 **[ColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/obj)** 对象，该对象代表指定幻灯片、幻灯片区域或幻灯片母版的配色方案。可读/写。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Design](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Design) | 返回一个 **Design** 对象，该对象表示一个设计。 |
| [DisplayMasterShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/DisplayMasterShapes) | 确定指定的幻灯片范围是否显示幻灯片母版中的背景对象。可读/写。 |
| [FollowMasterBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/FollowMasterBackground) | 确定幻灯片范围是否继承幻灯片母版背景。可读/写。 |
| [HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/HeadersFooters) | 返回一个 **[HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/obj)** 集合，该集合代表与幻灯片、幻灯片母版或幻灯片区域相关联的页眉、页脚、日期和时间以及幻灯片编号。只读。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Hyperlinks) | 返回一个代表指定幻灯片中的所有超链接的 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/obj)** 集合。只读。 |
| [Layout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Layout) | 返回或设置一个 **PpSlideLayout** 常量，该常量代表幻灯片版式。可读/写。 |
| [Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Master) | 返回一个 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象，该对象代表幻灯片母版。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Name) | 向一个演示文稿插入幻灯片时，WPP 会自动为幻灯片分配“幻灯片 n”形式的名称，其中 n 是一个整数，代表幻灯片在演示文稿中创建的顺序。例如，在某个演示文稿中插入的第一张幻灯片被自动命名为“幻灯片 1”。如果将幻灯片从一个演示文稿复制到另一个演示文稿，则该幻灯片会失去它在第一个演示文稿中的名称并在第二个演示文稿中被自动分配新名称。幻灯片范围必须至少包含一张幻灯片。可读/写。 |
| [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Shapes) | 返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合，该集合代表被放置或插入到指定幻灯片、幻灯片母版或幻灯片组的所有元素。只读。 |
| [SlideID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/SlideID) | 返回指定幻灯片的唯一 ID 号。只读。 **Long** 类型。 |
| [SlideIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/SlideIndex) | 返回 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 集合内指定幻灯片的索引号。只读。 |
| [SlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/SlideNumber) | 返回幻灯片编号。只读。 |
| [SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/SlideShowTransition) | 返回一个 **[SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/obj)** 对象，该对象代表指定幻灯片切换的特殊效果。只读。 |