# PrintOptions 对象

包含演示文稿的打印选项。

## 说明


指定 **[PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PrintOut)** 方法的可选参数 **From** 、 **To** 、 **Copies** 和 **Collate** 将设置 **PrintOptions** 对象的相应属性。

使用 **[PrintOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PrintOptions)** 属性返回 **PrintOptions** 对象。


## 示例


```JavaScript
/*本示例以非逐份方式打印活动演示文稿所有幻灯片（无论可见或隐藏）的两个彩色副本。该示例还调整每个幻灯片的大小以适应打印页，并给每个幻灯片加细边框。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.NumberOfCopies = 2
    printOptions.Collate = msoFalse
    printOptions.PrintColorType = ppPrintColor
    printOptions.PrintHiddenSlides = msoTrue
    printOptions.FitToPage = msoTrue
    printOptions.FrameSlides = msoTrue
    printOptions.OutputType = ppPrintOutputSlides
    ActivePresentation.PrintOut()
}
```
使用 **[RangeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/RangeType)** 属性指定打印整个演示文稿或仅打印其中的指定部分。如果想要只打印特定幻灯片，请将 **[RangeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/RangeType)** 属性设为 **ppPrintSlideRange** ，并使用 **[Ranges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/Ranges)** 属性指定要打印的页。



```JavaScript
/*本示例打印活动演示文稿中的第一、四、五、六张幻灯片。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.RangeType = ppPrintSlideRange
    let printRanges = printOptions.Ranges
    printRanges.Add(1, 1)
    printRanges.Add(4, 6)
    ActivePresentation.PrintOut()
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActivePrinter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/ActivePrinter) | 返回当前打印机的名称。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [Collate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/Collate) | 决定是否在打印指定演示文稿的完整副本之后才打印其下一个副本的第一页。可读/写。 |
| [FitToPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/FitToPage) | 决定是否调整幻灯片大小以适应打印页面。可读/写。 |
| [FrameSlides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/FrameSlides) | 决定是否在打印的幻灯片的边框周围放置窄框架。可读/写。 |
| [HandoutOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/HandoutOrder) | 返回或设置在打印的讲义上显示幻灯片的页面版式顺序，其中可在一个页面上显示多张幻灯片。可读/写。 |
| [NumberOfCopies](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/NumberOfCopies) | 返回或设置要打印的演示文稿份数。可读/写。 |
| [OutputType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/OutputType) | 返回或设置一个值，该值指示要打印演示文稿的哪些组件（幻灯片、讲义、备注页或大纲）。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/Parent) | 返回指定对象的父对象。 |
| [PrintColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/PrintColorType) | 返回或设置指定文档的打印方式：黑白方式、纯黑色和纯白色（亦称为高对比度）方式或彩色方式。可读/写。 |
| [PrintComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/PrintComments) | 设置或返回是否打印批注。可读/写。 |
| [PrintFontsAsGraphics](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/PrintFontsAsGraphics) | 决定是否将 TrueType 字体作为图形打印。可读/写。 |
| [PrintHiddenSlides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/PrintHiddenSlides) | 决定是否打印指定演示文稿中的隐藏幻灯片。可读/写。 |
| [PrintInBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/PrintInBackground) | 决定是否在后台打印指定的演示文稿。可读/写。 |
| [RangeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/RangeType) | 返回或设置演示文稿打印范围的类型。可读/写。 |
| [Ranges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/Ranges) | 返回一个 **[PrintRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/obj)** 对象，该对象代表演示文稿中要打印的幻灯片范围。只读。 |
| [SlideShowName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/SlideShowName) | 返回或设置要打印的自定义幻灯片放映的名称。可读/写。 |