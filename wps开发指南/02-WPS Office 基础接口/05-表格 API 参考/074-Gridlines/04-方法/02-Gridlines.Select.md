# Gridlines.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Gridlines** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例判断如果工作表 Sheet1 中第一个图表类别轴有主要网格线，则选中主要网格线。*/
function test() {
    let axis = Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    if (axis.HasMajorGridlines) {
        axis.MajorGridlines.Select()
    }
}
```


```JavaScript
/*本示例选中图表工作表 Chart1 数值轴的主要网格线。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.MajorGridlines.Select()
}
```
