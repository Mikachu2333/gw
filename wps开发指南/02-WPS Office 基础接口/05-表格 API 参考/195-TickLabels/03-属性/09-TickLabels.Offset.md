# TickLabels.Offset

返回或设置一个 **Long** 值，它代表各级别标签之间的距离以及第一级标签与坐标轴之间的距离。



## 语法

express.**Offset**

express   一个代表 **TickLabels** 对象的变量。

## 类型

number（int4 精度）

## 说明


其默认距离为百分之百，代表坐标轴标签之间以及标签与坐标轴线之间的默认距离。其值可以为从 0 到 1000 之间的一个整数百分比，表示相对于坐标轴标签的字号。



## 示例


```JavaScript
/*如果偏移量小于 500，则此示例将 Chart1 中分类轴上标签之间的距离设置为当前距离的两倍。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    if (tickLabels.Offset < 500) {
        tickLabels.Offset = tickLabels.Offset * 2
    }
}
```


```JavaScript
/*下例显示 Sheet1 上的第一个图表数值轴刻度线标签之间的距离。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    alert(tickLabels.Offset)
}
```
