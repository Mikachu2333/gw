# Axis.MinorTickMark

返回或设置指定坐标轴的次要刻度线类型。 **XlTickMark** 类型，可读写。



## 语法

express.**MinorTickMark**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTickMark

## 说明


| **XlTickMark** 可为以下 **XlTickMark** 常量之一。 |
| ---------------------------------------- |
| **xlTickMarkInside**                     |
| **xlTickMarkOutside**                    |
| **xlTickMarkCross**                      |
| **xlTickMarkNone**                       |



## 示例


```JavaScript
/*本示例为图表工作表 Chart1 数值轴内侧设置次要刻度线。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.MinorTickMark = xlTickMarkInside
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的分类轴的次要刻度线是否在轴外。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    alert(axis.MinorTickMark == xlTickMarkOutside)
}
```
