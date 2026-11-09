# Axis.MinimumScaleIsAuto

如果 ET 为数值轴计算最小值，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MinimumScaleIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **MinimumScale** 属性会将该属性设置为 False。



## 示例


```JavaScript
/*本示例自动计算图表工作表 Chart1 中的数值轴的最小刻度和最大刻度。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.MinimumScaleIsAuto = true
    axis.MaximumScaleIsAuto = true
}
```


```JavaScript
/*本示例关闭工作表 Sheet1 中的数值轴的最小刻度自动计算，并将数值轴的最小刻度设置为 2.5。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.MinimumScaleIsAuto = false
    axis.MinimumScale = 2.5
}
```
