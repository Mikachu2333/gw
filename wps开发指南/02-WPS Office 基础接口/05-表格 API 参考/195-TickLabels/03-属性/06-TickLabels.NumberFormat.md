# TickLabels.NumberFormat

返回或设置一个 **String** 值，它代表对象的格式代码。



## 语法

express.**NumberFormat**

express   一个代表 **TickLabels** 对象的变量。

## 类型

string

## 说明


格式代码与 **“设置单元格格式”** 对话框中的 **“格式代码”** 选项是同一个字符串。 **Format** 函数使用的格式代码字符串与 **NumberFormat** 和 **[NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/NumberFormatLocal)** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*下例显示 Sheet1 上的第一个图表分类轴刻度线标签的数字格式。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.NumberFormat)
}
```


```JavaScript
/*以下示例将 Chart1 上数值轴刻度线标签的数字格式设置为 0.00%。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    tickLabels.NumberFormat = "0.00%"
}
```
