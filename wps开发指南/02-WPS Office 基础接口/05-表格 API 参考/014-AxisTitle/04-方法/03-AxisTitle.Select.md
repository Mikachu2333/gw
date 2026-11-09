# AxisTitle.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **AxisTitle** 对象的变量。

## 返回值

一个代表所选对象的 Variant 值

## 示例


```JavaScript
/*本示例选中图表工作表 Chart1 中图表的分类轴标题。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.Select()
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴标题设置为可见，并选中该标题。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.HasTitle = true
    axis.AxisTitle.Select()
}
```
