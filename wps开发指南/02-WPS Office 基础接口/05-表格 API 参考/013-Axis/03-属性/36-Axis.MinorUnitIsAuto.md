# Axis.MinorUnitIsAuto

如果 ET 为数值轴计算次要单位，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MinorUnitIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **MinorUnit** 属性会将该属性设置为 False。



## 示例


```JavaScript
/*本示例自动计算图表工作表 Chart1 数值轴的主要单位和次要单位。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.MajorUnitIsAuto = true
    axis.MinorUnitIsAuto = true
}
```


```JavaScript
/*本示例判断如果未开启工作表 Sheet1 中第一个图表的数值轴自动计算主要单位，则关闭自动计算该数值轴的次要单位。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    if (axis.MajorUnitIsAuto == false) {
        axis.MinorUnitIsAuto = false
    }
}
```
