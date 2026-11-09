# Slide 对象

代表一个幻灯片。 **[Slides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slides/obj)** 集合包含演示文稿中的所有 **Slide** 对象。

## 说明


如果试图返回对单张幻灯片的引用却得到了一个 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象，请不要奇怪。单张幻灯片既可以由 **Slide** 对象表示也可以由只包含一张幻灯片的 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 集合表示，这取决于返回该幻灯片引用的方式。例如，如果使用 **Add** 方法创建并返回对幻灯片的引用，则该幻灯片由 **Slide** 对象表示。然而，如果使用 **[Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/member/Duplicate)** 方法创建并返回对幻灯片的引用，则该幻灯片由包含单张幻灯片的 **SlideRange** 集合表示。因为应用于 **Slide** 对象的所有属性和方法也可应用于包含单张幻灯片的 **SlideRange** 集合，所以可对返回的幻灯片进行相同的操作，而不管它是由 **Slide** 对象还是 **SlideRange** 集合表示。

 以下示例说明如何执行下列操作：

* 返回一个通过名称、索引号或幻灯片 ID 号指定的幻灯片

* 返回选定范围中的幻灯片

* 返回指定的任意文档窗口或幻灯片放映窗口中当前显示的幻灯片

* 新建幻灯片

使用 **Slides** (*index*)（其中 *index* 是幻灯片名称或索引号）或者使用 **Slides.FindBySlideID** (*index*)（其中 *index* 是幻灯片 ID 号）返回单个 **Slide** 对象。


## 示例


```JavaScript
/*本示例设置活动演示文稿中第一张幻灯片的版式。*/
function test() {
    ActivePresentation.Slides.Item(1).Layout = ppLayoutTitle
}
```
使用 **Slide** 属性返回指定文档窗口或幻灯片放映窗口视图中当前显示的幻灯片。



```JavaScript
/*本示例将第二个文档窗口中当前显示的幻灯片复制到剪贴板。*/
function test() {
    Windows(2).View.Slide.Copy()
}
```
使用 **Add** 方法新建幻灯片并添加到演示文稿中。



```JavaScript
/*本示例在当前演示文稿的开头添加一个标题幻灯片。*/
function test() {
    ActivePresentation.Slides.Add(1, ppLayoutTitleOnly)
}
```
使用 **Selection.SlideRange** (*index*) 返回单个 **Slide** 对象，其中 *index* 是选定范围中的幻灯片的名称或索引号。



```JavaScript
/*本示例设置活动窗口选定范围中的第一张幻灯片的版式（假设至少选定一张幻灯片）。*/
function test() {
    Application.ActiveWindow.Selection.SlideRange.Item(1).Layout = ppLayoutTitle
}
```
如果只选定了一张幻灯片，可以使用 **Selection.SlideRange** 返回包含选定幻灯片的 **SlideRange** 集合。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/ApplyTemplate) | 将设计模板应用于指定的幻灯片。 |
| [ApplyTheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/ApplyTheme) | 对指定幻灯片应用主题或设计模板。 |
| [ApplyThemeColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/ApplyThemeColorScheme) | 对指定幻灯片应用配色方案。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Copy) | 将指定对象复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Cut) | 删除指定对象并将其放到剪贴板中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Delete) | 删除指定的 **Slide** 对象。 |
| [Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Export) | 使用指定的图形筛选器导出幻灯片或幻灯片范围，并将导出的文件以指定的文件名保存。 |
| [MoveTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/MoveTo) | 将指定对象移动到同一集合中的指定位置，并适当地对集合中所有其他项目进行重新编号。 |
| [MoveToSectionStart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/MoveToSectionStart) | 将当前幻灯片移到指定节的开头。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Select) | 选择指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Background) | 返回代表幻灯片背景的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。 |
| [ColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/ColorScheme) | 返回或设置 **ColorScheme** 对象，该对象代表指定幻灯片、幻灯片区域或幻灯片母版的配色方案。可读/写。 |
| [Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Comments) | 返回一个 **Comments** 对象，该对象代表批注的集合。 |
| [Design](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Design) | 返回代表设计的 **Design** 对象。 |
| [DisplayMasterShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/DisplayMasterShapes) | 确定指定的幻灯片是否显示幻灯片母版中的背景对象。可读/写。 |
| [FollowMasterBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/FollowMasterBackground) | 确定幻灯片是否继承幻灯片母版背景。可读/写。 |
| [HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/HeadersFooters) | 返回一个 **HeadersFooters** 集合，该集合代表与幻灯片、幻灯片母版或幻灯片区域相关联的页眉、页脚、日期和时间以及幻灯片编号。只读。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Hyperlinks) | 返回一个代表指定幻灯片中的所有超链接的 **HyperLinks** 集合。只读。 |
| [Layout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Layout) | 返回或设置一个 **PpSlideLayout** 常量，该常量代表幻灯片版式。可读/写。 |
| [Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Master) | 返回一个 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象，该对象代表幻灯片母版。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Name) | 向一个演示文稿插入幻灯片时，WPP 自动为幻灯片分配“幻灯片 n”形式的名称，其中 n 是一个整数，代表幻灯片在演示文稿中创建的顺序。例如，在某个演示文稿中插入的第一张幻灯片被自动命名为 Slide1。如果将幻灯片从一个演示文稿复制到另一个演示文稿，则该幻灯片会失去它在第一个演示文稿中的名称并在第二个演示文稿中被自动分配新名称。 **String** 可读/写。 |
| [NotesPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/NotesPage) | 返回一个 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象，该对象代表指定幻灯片或幻灯片区域的备注页。只读。 |
| [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Shapes) | 返回一个 [ **Shapes** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj) 集合，该集合代表被放置或插入到指定幻灯片、幻灯片母版或幻灯片组的所有元素。此为只读属性。 |
| [SlideID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/SlideID) | 返回指定幻灯片的唯一 ID 号。只读。 |
| [SlideIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/SlideIndex) | 返回 **Slides** 集合中指定幻灯片的索引号。只读。 |
| [SlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/SlideNumber) | 返回幻灯片编号。只读。 |
| [SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/SlideShowTransition) | 返回一个 **[SlideShowTransition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowTransition/obj)** 对象，该对象代表指定幻灯片切换的特殊效果。只读。 |
| [Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Tags) | 返回一个代表指定对象的标签的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 对象。只读。 |
| [ThemeColorScheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/ThemeColorScheme) | 返回一个 **ThemeColorScheme** 对象，该对象代表与指定幻灯片相关联的配色方案。只读。 |
| [TimeLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/TimeLine) | 返回 **TimeLine** 对象，该对象代表幻灯片的动画时间线。只读。 |
| [sectionIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/sectionIndex) | 返回在 **Slide** 范围中选择的节的索引。只读。 |