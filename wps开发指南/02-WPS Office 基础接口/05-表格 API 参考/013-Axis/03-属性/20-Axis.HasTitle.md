# Axis.HasTitle

如果坐标轴或图表有可见标题，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasTitle**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


坐标轴标题由 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/obj)** 对象代表。



## 示例


```JavaScript
/*此示例为图表工作表 Chart1 中图表的分类坐标轴添加坐标轴标志。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes().Item(xlCategory)
    axis.HasTitle = true
    axis.AxisTitle.Text = "July Sales"
}
```


```JavaScript
/*此示例将工作表 Sheet1 中第一张图表的数值轴标题设置为不可见。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes().Item(xlValue)
    axis.HasTitle = false
}
```
