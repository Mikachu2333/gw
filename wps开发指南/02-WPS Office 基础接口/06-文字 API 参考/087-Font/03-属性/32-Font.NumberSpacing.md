# Font.NumberSpacing

返回或设置字体的数字间距设置。可读/写 **[WdNumberSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberSpacing)** 类型。



## 语法

express.**NumberSpacing**

express   一个代表 **Font** 对象的变量。

## 类型

WdNumberSpacing

## 说明


OpenType 字体支持成比例和表格图表功能来控制数字间距。成比例数字间距按不同的宽度处理每个数字。例如，“1”的显示要比“5”窄。表格数字间距按宽度相等处理数字，从而使它们能够垂直对齐，以增加可读性，特别是对于财务信息。



## 示例


```JavaScript
/*本示例将活动文档中字体的数字间距设置为成比例。*/
function test() {
    ActiveDocument.Range().Font.NumberSpacing = wdNumberSpacingProportional
}
```


```JavaScript
/*本示例判断所选内容的字体的数字间距设置，并通知用户。*/
function test() {
    switch (Selection.Font.NumberSpacing) {
        case wdNumberSpacingDefault:
            alert("应用字体的默认数字间距")
            break
        case wdNumberSpacingProportional:
            alert("对字体应用成比例数字间距")
            break
        case wdNumberSpacingTabular:
            alert("对字体应用表格数字间距")
            break
    }
}
```
