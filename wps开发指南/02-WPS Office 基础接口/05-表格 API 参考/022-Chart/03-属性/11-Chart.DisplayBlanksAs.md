# Chart.DisplayBlanksAs

返回或设置在图表中绘制空白单元格的方式。可以是 **[XlDisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayBlanksAs)** 常量之一。 **Long** 类型，可读写。



## 语法

express.**DisplayBlanksAs**

express   一个代表 **Chart** 对象的变量。

## 类型

XlDisplayBlanksAs

## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 中不绘制空白单元格。*/
function test() {
    Application.Charts.Item("Chart1").DisplayBlanksAs = xlNotPlotted
}
```


```JavaScript
/*本示例判断图表工作表 Chart2 绘制空白单元格的方式是否为将值内插入图表。*/
function test() {
    let chart = Application.Charts.Item("Chart2")
    alert(chart.DisplayBlanksAs == xlInterpolated)
}
```
