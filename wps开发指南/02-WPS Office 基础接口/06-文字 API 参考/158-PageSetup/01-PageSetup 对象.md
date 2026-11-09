# PageSetup 对象

代表页面设置说明。 **PageSetup** 对象包含文档的所有页面设置属性（如左边距、下边距和纸张大小）。

## 说明


使用 **PageSetup** 属性可返回 **PageSetup** 对象。


## 示例


```JavaScript
/*本示例将活动文档的第一节设为横向，并打印该文档。*/
function test() {
    ActiveDocument.Sections.Item(1).PageSetup.Orientation = wdOrientLandscape
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例设置命名为“Sales.doc”的文档的所有页边距。*/
function test() {
    let pagesetup = Documents.Item("Sales.doc").PageSetup
    pagesetup.LeftMargin = InchesToPoints(0.75)
    pagesetup.RightMargin = InchesToPoints(0.75)
    pagesetup.TopMargin = InchesToPoints(1.5)
    pagesetup.BottomMargin = InchesToPoints(1)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [SetAsTemplateDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/SetAsTemplateDefault) | 将指定的页面设置格式设为活动文档和所有基于活动模板的新文档的默认格式。 |
| [TogglePortrait](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/TogglePortrait) | 在文档或节的纵向和横向页面方向之间切换。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [BookFoldPrinting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/BookFoldPrinting) | 如果为 **True** ，则 WPS 将文档打印为一系列小册子，这样可以折叠打印的页面并以书籍的形式阅读。 **Boolean** 类型，可读写。 |
| [BookFoldPrintingSheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/BookFoldPrintingSheets) | 返回或设置一个 **Long** 类型的值，该值代表每一本小册子的页数。 **Boolean** 类型，可读写。 |
| [BookFoldRevPrinting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/BookFoldRevPrinting) | 如果为 **True** ，则 WPS 反转用于双向或亚洲语言文档的书籍折页打印的打印顺序。 **Boolean** 类型，可读写。 |
| [BottomMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/BottomMargin) | 返回或设置页面底边与正文文本边界之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [CharsLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/CharsLine) | 返回或设置文档网格中每行的字符数。 **Single** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DifferentFirstPageHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/DifferentFirstPageHeaderFooter) | 如果第一页使用了不同的页眉或页脚，则为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。 **Long** 类型，可读写。 |
| [FirstPageTray](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/FirstPageTray) | 返回或设置用于文档或章节首页的纸盒。 **WdPaperTray** 类型，可读写。 |
| [FooterDistance](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/FooterDistance) | 返回或设置页脚与页面底边之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [Gutter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/Gutter) | 返回或设置文档或节的每一页的额外页边距的大小（以磅为单位），以备装订需要。 **Single** 类型，可读写。 |
| [GutterPos](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/GutterPos) | 返回或设置文档中的装订线位于哪一侧。 **WdGutterStyle** 类型，可读写。 |
| [GutterStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/GutterStyle) | 返回或设置 WPS 将装订线应用于当前文档时，基于从右向左的语言还是从左向右的语言。 **WdGutterStyleOld** 类型，可读写。 |
| [HeaderDistance](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/HeaderDistance) | 返回或设置页眉与页面顶端之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [LayoutMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/LayoutMode) | 返回或设置当前文档的版式模式。 **WdLayoutMode** 类型，可读写。 |
| [LeftMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/LeftMargin) | 返回或设置页面左边缘与正文左边界之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [LineNumbering](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/LineNumbering) | 返回或设置一个 **[LineNumbering](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineNumbering/obj)** 对象，该对象代表指定 **PageSetup** 对象的行号。 |
| [LinesPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/LinesPage) | 返回或设置文档网格中每页的行数。 **Single** 类型，可读写。 |
| [MirrorMargins](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/MirrorMargins) | 如果对开页的内外边距宽度相等，则该属性值为 **msoTrue** 。 **Long** 类型，可读写 |
| [OddAndEvenPagesHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/OddAndEvenPagesHeaderFooter) | 如果指定的 **PageSetup** 对象的奇数页和偶数页具有不同的页眉和页脚，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/Orientation) | 返回或设置页面的方向。可读写 **[WdOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOrientation)** 类型。 |
| [OtherPagesTray](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/OtherPagesTray) | 返回或设置用于文档或节中除第一页以外其他所有页的纸盒。 **WdPaperTray** 类型，可读写。 |
| [PageHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/PageHeight) | 返回或设置页面高度（以磅为单位）。 **Single** 类型，可读写。 |
| [PageWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/PageWidth) | 返回或设置页面宽度（以磅为单位）。 **Single** 类型，可读写。 |
| [PaperSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/PaperSize) | 返回或设置纸张大小。 **WdPaperSize** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **PageSetup** 对象的父对象。 |
| [RightMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/RightMargin) | 返回或设置页面右边缘与正文右边界之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [SectionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/SectionDirection) | 返回或设置指定节的阅读顺序和对齐方式。 **WdSectionDirection** 类型，可读写。 |
| [SectionStart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/SectionStart) | 返回或设置指定对象的分节符类型。 **WdSectionStart** 类型，可读写。 |
| [SuppressEndnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/SuppressEndnotes) | 如果在下一个没有隐藏尾注的节的末尾打印尾注，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [TextColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/TextColumns) | 返回一个 **[TextColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/obj)** 集合，该集合代表指定 **PageSetup** 对象的文本栏集合。 |
| [TopMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/TopMargin) | 返回或设置页面的上边缘与正文文本的上边界之间的距离（以磅为单位）。可读写 **Single** 类型。 |