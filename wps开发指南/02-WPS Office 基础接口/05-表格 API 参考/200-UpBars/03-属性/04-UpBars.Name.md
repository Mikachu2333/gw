# UpBars.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **UpBars** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的第一个图表组的涨柱线的名称。*/
function test() {
    let upbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).UpBars
    alert(upbars.Name)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一个图表的第一个图表组的涨柱线的名称。*/
function test() {
    let upbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).UpBars
    alert(`涨柱线的名称：${upbars.Name}`)
}
```
