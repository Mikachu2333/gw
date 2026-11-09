# PrintOptions.SlideShowName

返回或设置要打印的自定义幻灯片放映的名称。可读/写。



## 语法

express.**SlideShowName**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

string

## 说明


必须将 **[RangeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/RangeType)** 属性设置为 **ppPrintNamedSlideShow** 才能打印自定义幻灯片放映。



## 示例


```JavaScript
/*本示例打印活动演示文稿中名为“example1”的现有自定义幻灯片放映。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.RangeType = ppPrintNamedSlideShow
    printOptions.SlideShowName = "example1"
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的打印范围的类型为ppPrintNamedSlideShow，则显示要打印的自定义幻灯片放映的名称。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    if (printOptions.RangeType == ppPrintNamedSlideShow) {
        alert(printOptions.SlideShowName)
    }
}
```
