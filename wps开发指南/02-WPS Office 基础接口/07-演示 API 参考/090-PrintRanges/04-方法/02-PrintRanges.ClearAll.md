# PrintRanges.ClearAll

从 **[PrintRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/obj)** 集合中清除所有打印范围。使用 **PrintRanges** 集合的 **Add** 方法可向该集合中添加打印范围。



## 语法

express.**ClearAll()**

express   一个代表 **PrintRanges** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除当前演示文稿中所有以前定义的打印范围；创建新的打印范围，其中包含第一张，第三张到第五张，第八张和第九张幻灯片；打印新定义的幻灯片范围；然后清除新定义的打印范围。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.RangeType = ppPrintSlideRange
    let printRanges = printOptions.Ranges
    printRanges.ClearAll()
    printRanges.Add(1, 1)
    printRanges.Add(3, 5)
    printRanges.Add(8, 9)
    printRanges.Parent.Parent.PrintOut()
    printRanges.ClearAll()
}
```


```JavaScript
/*本示例清除第一篇演示文稿中所有以前定义的打印范围。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    printOptions.Ranges.ClearAll()
}
```
