# TickLabels.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **TickLabels** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*下例显示 Sheet1 上的第一个图表分类轴刻度线标签的名称。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.Name)
}
```


```JavaScript
/*以下示例显示 Chart1 上数值轴刻度线标签的名称。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    alert(tickLabels.Name)
}
```
