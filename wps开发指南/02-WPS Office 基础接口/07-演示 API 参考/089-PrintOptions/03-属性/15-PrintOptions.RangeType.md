# PrintOptions.RangeType

返回或设置演示文稿打印范围的类型。可读/写。



## 语法

express.**RangeType**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

PpPrintRangeType

## 说明


 **RangeType** 属性的值可以是 **[PpPrintRangeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/PpPrintRangeType)** 常量之一。

若要打印在 **[PrintRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/obj)** 集合中定义的幻灯片范围，必须先将 **RangeType** 属性设置为 **ppPrintSlideRange** 。将 **RangeType** 设置为除 **ppPrintSlideRange** 之外的值会使在 **PrintRanges** 集合中定义的范围失效。但是这不会以任何方式影响 **PrintRanges** 集合的内容。也就是说，如果定义了一些打印范围，将 **RangeType** 属性设置为除 **ppPrintSlideRange** 之外的值，然后将 **RangeType** 重新设置为 **ppPrintSlideRange** ，则之前定义的打印范围将保持不变。

指定 **[PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/PrintOut)** 方法的 *To* 和 *From* 参数将设置该属性的值。



## 示例


```JavaScript
/*本示例打印当前演示文稿的当前幻灯片。*/
function test() {
    ActivePresentation.PrintOptions.RangeType = ppPrintCurrent
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例显示第一篇演示文稿打印范围的类型是否为ppPrintSection。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.RangeType == ppPrintSection)
}
```
