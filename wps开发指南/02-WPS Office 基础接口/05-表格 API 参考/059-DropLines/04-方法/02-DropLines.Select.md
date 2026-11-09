# DropLines.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DropLines** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选中工作表 Sheet1 中第一个图表的第一个图表组的垂直线。*/
function test() {
    let droplines = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).DropLines
    droplines.Select()
}
```


```JavaScript
/*本示例判断如果图表工作表 Chart1 中图表的第一个图表组的垂直线的名称为“垂直线 1”，则选中该垂直线。*/
function test() {
    let droplines = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).DropLines
    if (droplines.Name == "垂直线 1") {
        droplines.Select()
    }
}
```
