# AxisTitle.HorizontalAlignment

返回或设置一个 **Variant** 值，它代表指定对象的水平对齐方式。



## 语法

express.**HorizontalAlignment**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

any

## 说明


此属性的值可以设置为 **[XlHAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlHAlign)** 常量之一。

某些常量可能不可用，这取决于所选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的分类轴标题的水平对齐方式设置为靠右。*/
function test() {
    let axistitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.HorizontalAlignment = xlHAlignRight
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中图表的数值轴标题的水平对齐方式设置为居中。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).AxisTitle
    axistitle.HorizontalAlignment = xlHAlignCenter
}
```
