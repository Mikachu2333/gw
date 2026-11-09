# Axis.AxisTitle

返回一个 **AxisTitle** 对象，该对象表示指定坐标轴的标题。只读。



## 语法

express.**AxisTitle**

express   一个代表 **Axis** 对象的变量。

## 类型

AxisTitle

## 示例


```JavaScript
/*本示例向图表工作表 Chart1 上图表的分类轴添加坐标轴标签。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.HasTitle = true
    axis.AxisTitle.Text = "July Sales"
}
```


```JavaScript
/*本示例向工作表 Sheet1 上第一张图表的数值轴添加坐标轴标签，并将字号设置为 10 磅。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.HasTitle = true
    axis.AxisTitle.Text = "2023年度"
    axis.AxisTitle.Font.Size = 10
}
```
