# Axis.MaximumScale

返回或设置数值轴上的最大值。 **Double** 类型，可读写。



## 语法

express.**MaximumScale**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **MaximumScaleIsAuto** 属性设置为 **False** 。



## 示例


```JavaScript
/*本示例对图表工作表 Chart1 中的数值轴的最小值和最大值进行设置。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.MinimumScale = 10
    axis.MaximumScale = 120
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的数值轴的最大值是否为 18。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axis.MaximumScale == 18)
}
```
