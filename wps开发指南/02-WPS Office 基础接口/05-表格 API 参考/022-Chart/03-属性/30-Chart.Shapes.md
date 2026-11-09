# Chart.Shapes

返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)** 集合，它代表图表工作表上所有的形状。只读。



## 语法

express.**Shapes**

express   一个代表 **Chart** 对象的变量。

## 类型

Shapes

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中Shape对象的数量。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    alert(chart.Shapes.Count)
}
```


```JavaScript
/*本示例将工作表 Sheet1 第一个内嵌图表的第一个形状的前景色设置为红色。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    chart.Shapes.Item(1).Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
