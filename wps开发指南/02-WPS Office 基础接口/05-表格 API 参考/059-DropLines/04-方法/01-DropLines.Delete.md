# DropLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DropLines** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例删除工作表 Sheet1 中第一个图表的第一个图表组的垂直线。*/
function test() {
    let droplines = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).DropLines
    droplines.Delete()
}
```


```JavaScript
/*本示例判断如果图表工作表 Chart1 中图表的第一个图表组的垂直线的颜色为红色，则删除该垂直线。*/
function test() {
    let droplines = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).DropLines
    if (droplines.Border.ColorIndex == 3) {
        droplines.Delete()
    }
}
```
