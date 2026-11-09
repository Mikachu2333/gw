# Axis.MajorUnitIsAuto

如果 ET 计算数值轴的主要单位，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MajorUnitIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **MajorUnit** 属性会将该属性设置为 False。



## 示例


```JavaScript
/*本示例自动设置图表工作表 Chart1 中的数值轴的主要单位和次要单位。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes().Item(xlValue)
    axis.MajorUnitIsAuto = true
    axis.MinorUnitIsAuto = true
}
```


```JavaScript
/*本示例显示是否自动设置工作表 Sheet1 中第一张图表的数值轴的主要单位。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes().Item(xlValue)
    alert(axis.MajorUnitIsAuto)
}
```
