# TickLabels.MultiLevel

设置轴是否为多级。可读/写 **Boolean** 类型。



## 语法

express.**MultiLevel**

express   一个代表 **TickLabels** 对象的变量。

## 类型

boolean

## 说明

此属性的默认值为 True。



## 示例


```JavaScript
/*下例显示 Sheet1 上的第一个图表分类轴刻度线标签的轴是否为多级轴。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.MultiLevel)
}
```


```JavaScript
/*以下示例显示 Chart1 上分类轴刻度线标签的轴是否为多级轴。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.MultiLevel)
}
```
