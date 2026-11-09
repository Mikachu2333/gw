# Axis.MinimumScale

返回或设置数值轴上的最小值。 **Double** 类型，可读写。



## 语法

express.**MinimumScale**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **MinimumScaleIsAuto** 属性设置为 **False** 。



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
/*本示例将工作表 Sheet1 中第一张图表的数值轴的最小值设置为该工作表单元格 E1 中的值。*/
function test() {
    let sheet = Application.Worksheets.Item("Sheet1")
    let axis = sheet.ChartObjects(1).Chart.Axes(xlValue)
    axis.MinimumScale = sheet.Range("E1").Value2
}
```
