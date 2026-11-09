# TickLabels.NumberFormatLocal

以采用用户语言字符串的形式返回或设置一个 **Variant** 值，它代表对象的格式代码。



## 语法

express.**NumberFormatLocal**

express   一个代表 **TickLabels** 对象的变量。

## 类型

any

## 说明


 **Format** 函数使用的格式代码字符串与 **[NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/NumberFormat)** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*下例采用用户语言显示 Sheet1 上的第一个图表分类轴刻度线标签的数字格式。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(`刻度线标签的格式：${tickLabels.NumberFormatLocal}`)
}
```


```JavaScript
/*以下示例将 Chart1 上数值轴刻度线标签的数字格式（用户语言）设置为“G/通用格式”。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    tickLabels.NumberFormatLocal = "G/通用格式"
}
```
