# Axis.MaximumScaleIsAuto

如果 ET 计算该数值轴的最大值，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MaximumScaleIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **MaximumScale** 属性会将该属性设置为 False。



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
/*本示例判断如果工作表 Sheet1 中第一张图表的数值轴未开启自动计算最小刻度，则开启该数值轴自动计算最大刻度。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    if (axis.MinimumScaleIsAuto == false) {
        axis.MaximumScaleIsAuto = true
    }
}
```
