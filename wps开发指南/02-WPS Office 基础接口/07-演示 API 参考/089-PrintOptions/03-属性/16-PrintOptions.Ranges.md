# PrintOptions.Ranges

返回一个 **[PrintRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/obj)** 对象，该对象代表演示文稿中要打印的幻灯片范围。只读。



## 语法

express.**Ranges**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

PrintRanges

## 说明


如果不想打印整个演示文稿，必须使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/member/Add)** 方法为每个要打印的连续的幻灯片组创建一个 **[PrintRange](#TODO)** 对象。例如，如果要打印指定演示文稿中的第一张、第三张到第五张以及第八张和第九张幻灯片，则必须创建三个 **PrintRange** 对象：一个代表第一张幻灯片；一个代表第三张到第五张幻灯片；一个代表第八张和第九张幻灯片。有关详细信息，请参阅此属性的示例。

[ **RangeType** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/RangeType) 属性必须设置为 **ppPrintSlideRange** 以应用 **PrintRanges** 集合中的打印范围。

要从 **PrintRanges** 集合中清除现有的所有打印范围，请使用 **[ClearAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/member/ClearAll)** 方法。

指定 **[PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PrintOut)** 方法的 **To** 和 **From** 参数将设置 **[PrintRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/obj)** 对象的内容。



## 示例


```JavaScript
/*本示例打印活动演示文稿中的第一张幻灯片、第三张到第五张幻灯片以及第八张和第九张幻灯片。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.RangeType = ppPrintSlideRange
    let printRanges = printOptions.Ranges
    printRanges.Add(1, 1)
    printRanges.Add(3, 5)
    printRanges.Add(8, 9)
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例清除第一篇演示文稿中所有定义的打印范围。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    printOptions.Ranges.ClearAll()
}
```
