# ChartGroups.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **ChartGroups** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表组的数量是否为1。*/
function test() {
    let chartgroups = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups()
    alert(chartgroups.Count == 1)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一个内嵌图表的图表组的数量。*/
function test() {
    let chartgroups = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups()
    alert(chartgroups.Count)
}
```
