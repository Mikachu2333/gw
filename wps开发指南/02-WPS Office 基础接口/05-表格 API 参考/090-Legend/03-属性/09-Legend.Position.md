# Legend.Position

返回或设置一个 **XlLegendPosition** 值，它代表图表上图例的位置。



## 语法

express.**Position**

express   一个代表 **Legend** 对象的变量。

## 类型

XlLegendPosition

## 示例


```JavaScript
/*本示例将图表中的图例移到图表的底部。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Position = xlLegendPositionBottom
}
```


```JavaScript
/*本示例显示第一张工作表上的第一个图表中图例的位置是否位于图表上方。*/
function test() {
    alert(Worksheets.Item(1).ChartObjects(1).Chart.Legend.Position == xlLegendPositionTop)
}
```
