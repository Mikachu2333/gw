# Axis.ReversePlotOrder

如果 ET 的绘图区数据点的顺序为从后往前，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ReversePlotOrder**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


该属性不能用于雷达图。



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 数值轴的绘图区数据点的顺序设置为从后往前。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.ReversePlotOrder = true
}
```


```JavaScript
/*本示例判断工作表 Sheet1 中第一张图表的分类轴的绘图区数据点的顺序，并通知用户。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    if (axis.ReversePlotOrder) {
        alert("分类轴的绘图区数据点的顺序为从后往前")
    } else {
        alert("分类轴的绘图区数据点的顺序为从前往后")
    }
}
```
