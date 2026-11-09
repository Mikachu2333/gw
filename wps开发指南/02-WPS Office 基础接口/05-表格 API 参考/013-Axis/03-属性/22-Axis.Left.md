# Axis.Left

返回一个 **Double** 值，它代表从对象左边缘到图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的分类坐标轴到图表区左边缘的距离。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    alert(axis.Left)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的数值坐标轴到图表区左边缘的距离。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axis.Left)
}
```
