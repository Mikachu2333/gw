# View 对象

包含窗口或窗格的视图属性（如全部显示、域底纹和网格线）。

## 说明


使用 **View** 属性可返回 **View** 对象。


## 示例


```JavaScript
/*本示例设置活动窗口的视图选项。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.ShowAll = true
    view.TableGridlines = true
    view.WrapToWindow = false
}
```
使用 **Type** 属性可更改视图。



```JavaScript
/*本示例将活动窗口切换至普通视图。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdNormalView
}
```
使用 **Percentage** 属性可更改屏幕上文本的尺寸。



```JavaScript
/*本示例将屏幕上文本的显示比例放大到 120%。*/
function test() {
    ActiveDocument.ActiveWindow.View.Zoom.Percentage = 120
}
```
使用 **SeekView** 属性可查看批注、尾注、脚注或者文档页眉或页脚。



```JavaScript
/*本示例在页面视图中显示活动窗口中的当前页脚。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.SeekView = wdSeekCurrentPageFooter
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [CollapseOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/CollapseOutline) | 将选定内容或指定范围内的正文折叠一个标题级别。 |
| [ExpandOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ExpandOutline) | 按照一个标题级别展开选定内容下的文本。 |
| [NextHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/NextHeaderFooter) | 根据视图中显示的是页眉还是页脚，移动到下一页眉或页脚。 |
| [PreviousHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/PreviousHeaderFooter) | 根据视图中显示的是页眉还是页脚，移动到前一页眉或页脚。 |
| [ShowAllHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowAllHeadings) | 在显示所有文本（包括标题和正文）和仅显示标题之间切换。 |
| [ShowHeading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowHeading) | 显示所有高于指定标题级别的标题，隐藏子标题和正文。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [ColumnWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ColumnWidth) | 返回或设置一个常量，该常量确定阅读模式下的列宽。可读/写， **[WdColumnWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdColumnWidth)** 类型。 |
| [ConflictMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ConflictMode) | 如果文档处于冲突模式视图中，则该属性值为 **True** 。可读/写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DisplayBackgrounds](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/DisplayBackgrounds) | 返回或设置一个 **Boolean** 类型的值，该值代表在页面视图中显示文档时，是否显示背景色和图像。 |
| [DisplayPageBoundaries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/DisplayPageBoundaries) | 如果为 **True** ，则显示文档顶部和底部页边距（空白区域）并在页面间显示灰色区域（灰色间隔）。 **Boolean** 类型，可读写。 |
| [Draft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Draft) | 如果窗口中的所有文本以具有最少格式信息的相同的 sans-serif 字体显示以加速显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [FieldShading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/FieldShading) | 返回或设置域的屏幕底纹。 **WdFieldShading** 类型，可读写。 |
| [FullScreen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/FullScreen) | 如果窗口为全屏显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Magnifier](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Magnifier) | 如果为 **True** ，则在打印预览中将鼠标指针显示为放大镜形状，表示用户可以通过单击来放大页面的某个区域或通过缩小显示比例查看整页或展开多页。 **Boolean** 类型，可读写。 |
| [MailMergeDataView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/MailMergeDataView) | 如果在指定窗口中显示邮件合并数据，而不显示邮件合并域，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MarkupMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/MarkupMode) | 返回或设置一个 **[WdRevisionsMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRevisionsMode)** 常量，该常量代表修订的显示模式。可读写。 |
| [PageColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/PageColor) | 返回或设置阅读模式下的页面颜色。可读/写， **[WdPageColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPageColor)** 类型。 |
| [Panning](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Panning) | 返回或设置 **Boolean** 类型的值，该值表示 WPS 是否处于平移模式。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **View** 对象的父对象。 |
| [ReadingLayoutActualView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ReadingLayoutActualView) | 设置或返回一个 **Boolean** 类型的值，该值代表是否使用与打印页面相同的版式在阅读版式视图中显示页面。 |
| [ReadingLayoutAllowEditing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ReadingLayoutAllowEditing) | 返回 **Boolean** 值，该值表示是否允许在阅读布局模式下编辑文本。可读/写。 |
| [ReadingLayoutAllowMultiplePages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ReadingLayoutAllowMultiplePages) | 设置或返回一个 **Boolean** 类型的值，该值代表阅读版式视图是否并排显示两页。 |
| [ReadingLayoutTruncateMargins](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ReadingLayoutTruncateMargins) | 返回或设置一个 **[WdReadingLayoutMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdReadingLayoutMargin)** 常量，该常量代表当在阅读版式中查看文档时是显示还是隐藏边距。可读写。 |
| [Reviewers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Reviewers) | 返回一个 **Reviewers** 对象，该对象代表所有审阅者。 |
| [RevisionsBalloonShowConnectingLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/RevisionsBalloonShowConnectingLines) | 如果为 **True** ，则 WPS 显示从文本到修订和批注气球之间的连接线。 **Boolean** 类型，可读写。 |
| [RevisionsBalloonSide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/RevisionsBalloonSide) | 设置或返回一个 **WdRevisionsBalloonMargin** 常量，指定 WPS 是否在文档的左边距或右边距中显示修订气球。 |
| [RevisionsBalloonWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/RevisionsBalloonWidth) | 设置或返回一个 **Single** 类型的值，该值代表 WPS 中用于指定修订气球宽度的全局设置。可读写。 |
| [RevisionsBalloonWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/RevisionsBalloonWidthType) | 设置或返回一个 **WdRevisionsBalloonWidthType** 常量，该常量代表指定 WPS 如何测量修订气球的宽度的全局设置。可读写。 |
| [RevisionsFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/RevisionsFilter) | 返回 **RevisionsFilter** 对象的实例。只读。 |
| [RevisionsView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/RevisionsView) | 设置或返回一个代表全局选项的 **WdRevisionsView** 常量，该选项用于指定 WPS 是显示文档的原始版本还是应用了修订和格式更改的版本。可读写。 |
| [SeekView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/SeekView) | 返回或设置在页面视图中显示的文档元素。 **[WdSeekView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSeekView)** 类型，可读写。 |
| [ShadeEditableRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShadeEditableRanges) | 返回或设置一个 **Long** 类型的值，该值代表是否将底纹应用于文档中用户有权修改的区域。 |
| [ShowAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowAll) | 如果显示所有非打印字符（如隐藏文字、制表符、空格和段落标记），则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [ShowAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowAnimation) | 如果显示文本动画，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowBookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowBookmarks) | 如果在每个书签的首尾显示方括号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowComments) | 如果为 **True** ，则 WPS 在文档中显示批注。 **Boolean** 类型，可读写。 |
| [ShowCropMarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowCropMarks) | 返回或设置一个 **Boolean** 类型的值，该值表示是否在页面的角显示裁剪标记，以指示页边距的位置。可读/写。 |
| [ShowDrawings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowDrawings) | 如果在页面视图中显示由绘图工具创建的对象，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowFieldCodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowFieldCodes) | 如果显示域代码，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowFirstLineOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowFirstLineOnly) | 如果在大纲视图中仅显示正文每段的第一行，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowFormat) | 如果在大纲视图中显示字符格式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowFormatChanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowFormatChanges) | 如果为 **True** ，则在启用“修订”功能后，WPS 显示对文档所作的格式更改。 **Boolean** 类型，可读写。 |
| [ShowHiddenText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowHiddenText) | 如果显示具有隐藏格式的文本，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowHighlight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowHighlight) | 如果显示和打印文档中突出显示格式的文本，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowHyphens](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowHyphens) | 如果为 **True** ，则显示可选连字符，该连字符指明在何处断开处于行尾的字。 **Boolean** 类型，可读写。 |
| [ShowInkAnnotations](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowInkAnnotations) | 返回或设置一个 **Boolean** 类型的值，该值表示显示还是隐藏手写墨迹注释。如果值为 **True** ，则显示墨迹注释。如果值为 **False** ，则隐藏墨迹注释。 |
| [ShowInsertionsAndDeletions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowInsertionsAndDeletions) | 如果为 **True** ，则 WPS 显示用“修订”功能在文档中插入和删除的文本。 **Boolean** 类型，可读写。 |
| [ShowMainTextLayer](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowMainTextLayer) | 如果在显示页眉和页脚区域时同时显示指定文档的文字，则该属性值为 **True** 。该属性等效于 **“页眉和页脚”** 工具栏上的 **“显示/隐藏文档文字”** 按钮。 **Boolean** 类型，可读写。 |
| [ShowMarkupAreaHighlight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowMarkupAreaHighlight) | 返回或设置 **Boolean** 值，该值表示显示修订和注释气球的标记区域是否带底纹。可读/写。 |
| [ShowObjectAnchors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowObjectAnchors) | 如果在可在页面视图中定位的项目附近显示对象锁定标记，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowOptionalBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowOptionalBreaks) | 如果 WPS 显示可选换行符，则该属性值为 **True** 。 **Boolean** 类型，可读写 |
| [ShowOtherAuthors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowOtherAuthors) | 如果应在文档中显示其他作者，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [ShowParagraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowParagraphs) | 如果显示段落标记，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowPicturePlaceHolders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowPicturePlaceHolders) | 如果将空白方框作为图片的占位符进行显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowRevisionsAndComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowRevisionsAndComments) | 如果为 **True** ，则 WPS 显示使用“修订”功能对文档所作的修订和批注。 **Boolean** 类型，可读写。 |
| [ShowSpaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowSpaces) | 如果显示空格字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowTabs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowTabs) | 如果显示制表符，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowTextBoundaries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowTextBoundaries) | 如果在页面视图中显示页边距、文本列、对象和框架周围的虚线，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowXMLMarkup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/ShowXMLMarkup) | 返回一个 **Long** 类型的值，该值表示是否在文档中显示 XML 标记。 |
| [SplitSpecial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/SplitSpecial) | 返回或设置活动窗口的窗格。 **WdSpecialPane** 类型，可读写。 |
| [TableGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/TableGridlines) | 如果显示表格虚框，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Type) | 返回或设置视图的类型。可读/写 **[WdViewType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 类型。 |
| [WrapToWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/WrapToWindow) | 如果文字在文档窗口的右边缘换行，而不是在右边距或文本栏的右边界，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Zoom) | 返回一个 **[Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Zoom/obj)** 对象，该对象代表指定视图的显示比例。 |