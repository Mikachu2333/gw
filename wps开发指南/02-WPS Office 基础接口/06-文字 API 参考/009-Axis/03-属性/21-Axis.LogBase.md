# Axis.LogBase

在使用对数刻度时返回或设置对数的底。可读/写 **Double** 类型。



## 语法

express.**LogBase**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


试图将该属性设置为小于或等于零 (0) 的值将导致错误。默认值为 10。



## 示例


```JavaScript
/*本示例显示活动文档中第一张图表的数值轴单位的对数的底。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes(1).Chart.Axes(xlValue)
    alert(axis.LogBase)
}
```


```JavaScript
/*本示例将活动文档第一个图表的数值轴的单位设置为 10，并将其刻度对数的底设置为 8。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes(1).Chart.Axes(xlValue)
    axis.DisplayUnit = xlCustom
    axis.DisplayUnitCustom = 10
    axis.LogBase = 8
}
```
