# Axis.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Axis** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中工作表 Sheet1 中第一张图表的数值轴。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.Select()
}
```


```JavaScript
/*本示例选中图表工作表 Chart1 中图表的类别轴。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.Select()
}
```
