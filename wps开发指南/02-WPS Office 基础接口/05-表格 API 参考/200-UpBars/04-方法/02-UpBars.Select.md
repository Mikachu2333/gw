# UpBars.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **UpBars** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选中图表工作表 Chart1 中图表的第一个图表组的涨柱线。*/
function test() {
    let upbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).UpBars
    upbars.Select()
}
```


```JavaScript
/*本示例选中工作表 Sheet1 中第一个图表的第一个图表组的涨柱线，并显示该涨柱线的名称。*/
function test() {
    let upbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).UpBars
    upbars.Select()
    alert(Selection.Name)
}
```
