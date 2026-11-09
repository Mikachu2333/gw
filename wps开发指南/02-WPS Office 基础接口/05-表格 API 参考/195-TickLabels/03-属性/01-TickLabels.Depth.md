# TickLabels.Depth

返回一个 **Long** 值，它代表分类轴刻度线标签的级别数。



## 语法

express.**Depth**

express   一个代表 **TickLabels** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*下例显示 Sheet1 上的第一个图表分类轴刻度线标签的级别数。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.Depth)
}
```


```JavaScript
/*以下示例显示 Chart1 上分类轴刻度线标签的级别数。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.Depth)
}
```
