# PageSetup 对象

代表页面设置说明。

## 说明


 **PageSetup** 对象包含所有页面设置的属性（左边距、底部边距、纸张大小等）。

使用 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/obj)** 属性可返回一个 **PageSetup** 对象。


## 示例


```JavaScript
/*本示例将 Sheet1 设置为横向打印，然后打印该工作表。*/
function test() {
    let wss = Application.Worksheets.Item("Sheet1")
    wss.PageSetup.Orientation = xlLandscape
    wss.PrintOut()
}
```


```JavaScript
/*此示例将第一张工作表左边距设置为0.5英寸、右边距设置为0.75英寸、上边距设置为1.5英寸、底部边距设置为1英寸、页眉与页脚边距设置为0.5英寸。*/
function test() {
    let psp = Application.Worksheets.Item(1).PageSetup
    psp.LeftMargin = Application.InchesToPoints(0.5)
    psp.RightMargin = Application.InchesToPoints(0.75)
    psp.TopMargin = Application.InchesToPoints(1.5)
    psp.BottomMargin = Application.InchesToPoints(1)
    psp.HeaderMargin = Application.InchesToPoints(0.5)
    psp.FooterMargin = Application.InchesToPoints(0.5)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [PrintQuality](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintQuality) | 返回或设置打印质量。 **Variant** 类型，可读写。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlignMarginsHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/AlignMarginsHeaderFooter) | 如果 ET 以页面设置选项中设置的边距对齐页眉和页脚，则返回 **True** 。可读/写 **Boolean** 类型。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [BlackAndWhite](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/BlackAndWhite) | 如果指定文档中的元素以黑白方式打印，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [BottomMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/BottomMargin) | 以磅为单位返回或设置底端边距的大小。 **Double** 类型，可读写。 |
| [CenterFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/CenterFooter) | 居中对齐 **PageSetup** 对象中的页脚信息。可读/写 **String** 类型。 |
| [CenterFooterPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/CenterFooterPicture) | 返回一个 **Graphic** 对象，该对象表示页脚中间部分的图片。用于设置图片的属性。 |
| [CenterHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/CenterHeader) | 居中对齐 **PageSetup** 对象中的页眉信息。可读/写 **String** 类型。 |
| [CenterHeaderPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/CenterHeaderPicture) | 返回一个 **Graphic** 对象，该对象表示页眉中间部分的图片。用于设置图片的属性。 |
| [CenterHorizontally](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/CenterHorizontally) | 如果在页面的水平居中位置打印指定工作表，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CenterVertically](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/CenterVertically) | 如果在页面的垂直居中位置打印指定工作表，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DifferentFirstPageHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/DifferentFirstPageHeaderFooter) | 如果在第一页使用不同的页眉或页脚，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Draft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Draft) | 如果打印工作表时不打印其中的图形，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EvenPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/EvenPage) | 返回一个 **Page** 对象，该对象可用于设置工作簿或节的偶数页上的文本对齐方式。只读。 |
| [FirstPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/FirstPage) | 返回一个 **Page** 对象，该对象可用于设置工作簿或节的第一页上的文本对齐方式。只读。 |
| [FirstPageNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/FirstPageNumber) | 返回或设置打印指定工作表时第一页的页号。如果设为 **xlAutomatic** ，则 ET 采用第一页的页号。默认值为 **xlAutomatic** 。 **Long** 类型，可读写。 |
| [FitToPagesTall](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/FitToPagesTall) | 返回或设置打印工作表时，对工作表进行缩放使用的页高。仅应用于工作表。 **Variant** 类型，可读写。 |
| [FitToPagesWide](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/FitToPagesWide) | 返回或设置打印工作表时，对工作表进行缩放使用的页宽。仅应用于工作表。 **Variant** 类型，可读写。 |
| [FooterMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/FooterMargin) | 以磅为单位返回或设置页脚到页面底端的距离。 **Double** 类型，可读写。 |
| [HeaderMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/HeaderMargin) | 以磅为单位返回或设置页面顶端到页眉的距离。 **Double** 类型，可读写。 |
| [LeftFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/LeftFooter) | 返回或设置工作簿或节的左页脚上的文本信息。 |
| [LeftFooterPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/LeftFooterPicture) | 返回一个 **Graphic** 对象，该对象表示页脚左边的图片。用于设置图片的属性。 |
| [LeftHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/LeftHeader) | 返回或设置工作簿或节的左页眉上的文本信息。 |
| [LeftHeaderPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/LeftHeaderPicture) | 返回一个 **Graphic** 对象，该对象表示页眉左边的图片。用于设置图片的属性。 |
| [LeftMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/LeftMargin) | 以磅为单位返回或设置左边距的大小。 **Double** 类型，可读写。 |
| [OddAndEvenPagesHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/OddAndEvenPagesHeaderFooter) | 如果指定的 **PageSetup** 对象的奇数页和偶数页具有不同的页眉和页脚，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Order](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Order) | 返回或设置一个 **[XlOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOrder)** 值，它代表 ET 打印一张大工作表时所使用的页编号的次序。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Orientation) | 返回或设置一个 **[XlPageOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageOrientation)** 值，它代表纵向或横向打印模式。 |
| [Pages](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Pages) | 返回或设置 **Pages** 集合中的页数。 |
| [PaperSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PaperSize) | 返回或设置纸张的大小。XlPaperSize 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Parent) | 返回指定对象的父对象。只读。 |
| [PrintArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintArea) | 以字符串返回或设置要打印的区域，该字符串使用宏语言的 A1 样式的引用。 **String** 类型，可读写。 |
| [PrintComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintComments) | 返回或设置批注随工作表打印的方式。 **[XlPrintLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPrintLocation)** 类型，可读写。 |
| [PrintErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintErrors) | 设置或返回一个 **[XlPrintErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPrintErrors)** 常量，该常量指定显示的打印错误类型。该功能允许用户在打印工作表时取消错误显示。可读写。 |
| [PrintGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintGridlines) | 如果在页面上打印单元格网格线，则该值为 **True** 。仅应用于工作表。 **Boolean** 类型，可读写。 |
| [PrintHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintHeadings) | 如果打印本页时同时打印行标题和列标题，则该值为 **True** 。仅应用于工作表。 **Boolean** 类型，可读写。 |
| [PrintNotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintNotes) | 如果打印工作表时单元格批注作为尾注一起打印，则该值为 **True** 。仅应用于工作表。 **Boolean** 类型，可读写。 |
| [PrintTitleColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintTitleColumns) | 返回或设置包含在每一页的左边重复出现的单元格的列，用宏语言 A1-样式中的字符串表示。 **String** 类型，可读写。 |
| [PrintTitleRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintTitleRows) | 返回或设置那些包含在每一页顶部重复出现的单元格的行，用宏语言字符串以 A1 样式表示法表示。 **String** 类型，可读写。 |
| [RightFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/RightFooter) | 返回或设置页脚的右边部分内容。可读/写 **String** 类型。 |
| [RightFooterPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/RightFooterPicture) | 返回一个 **Graphic** 对象，该对象代表页脚右边的图片，用于设置图片的属性。 |
| [RightHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/RightHeader) | 返回或设置页眉的右边部分内容。可读/写 **String** 类型。 |
| [RightHeaderPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/RightHeaderPicture) | 返回一个 **Graphic** 对象，该对象代表页眉右边的图片，用于设置图片的属性。 |
| [RightMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/RightMargin) | 以磅为单位返回或设置右边距的大小。 **Double** 类型，可读写。 |
| [ScaleWithDocHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/ScaleWithDocHeaderFooter) | 返回或设置页眉和页脚是否在文档大小更改时随文档缩放。可读/写 **Boolean** 类型。 |
| [TopMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/TopMargin) | 以磅为单位返回或设置上边距的大小。 **Double** 类型，可读写。 |
| [Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Zoom) | 返回或设置一个 **Variant** 值，它代表一个数值在 10% 到 400% 之间的百分比，该百分比为 ET 打印工作表时的缩放比例。 |