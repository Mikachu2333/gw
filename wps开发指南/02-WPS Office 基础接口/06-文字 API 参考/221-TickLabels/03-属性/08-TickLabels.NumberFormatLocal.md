# TickLabels.NumberFormatLocal

以用户语言返回或设置对象的格式代码字符串。可读/写 **Variant** 类型。



## 语法

express.**NumberFormatLocal**

express   一个代表 **TickLabels** 对象的变量。

## 类型

any

## 说明


 **Format** 函数使用的格式代码字符串与 **[NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/NumberFormat)** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例显示以用户语言表示的活动文档上第一个内嵌图表的数值轴刻度线标签的格式代码。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).TickLabels
    alert(tickLabels.NumberFormatLocal)
}
```


```JavaScript
/*本示例设置以用户语言表示的第一个文档上第一个形状中图表的类别轴刻度线标签的格式代码。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.NumberFormatLocal = "0.00E+00"
}
```
