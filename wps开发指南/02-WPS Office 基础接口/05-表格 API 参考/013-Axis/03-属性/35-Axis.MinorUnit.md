# Axis.MinorUnit

返回或设置数值轴上的次要单位。 **Double** 类型，可读写。



## 语法

express.**MinorUnit**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **MinorUnitIsAuto** 属性设置为 **False** 。  
使用 **TickMarkSpacing** 属性可设置分类轴上的刻度线间距。



## 示例


```JavaScript
/*本示例为图表工作表 Chart1 中的数值轴设置主要单位和次要单位。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.MajorUnit = 100
    axis.MinorUnit = 20
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的数值轴的次要单位。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(`数值轴上的次要单位：${axis.MinorUnit}`)
}
```
