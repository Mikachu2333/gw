# Axis.Top

返回一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的分类轴到图表顶部的距离。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    alert(`分类轴到图表顶部的距离：${axis.Top} 磅`)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的数值轴到图表顶部的距离是否为 0 磅。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axis.Top == 0)
}
```
