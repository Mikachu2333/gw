# Chart.Axes

返回一个代表图表上单个坐标轴或坐标轴集合的某个对象。



## 语法

express.**Axes(Type, AxisGroup)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 指定要返回的坐标轴。可为以下 XlAxisType 常量之一：xlValue、xlCategory 或 xlSeriesAxis（xlSeriesAxis 仅对三维图表有效）。 |
| AxisGroup | 可选 | XlAxisGroup | 指定坐标轴组。如果省略该参数，则使用主坐标轴组。三维图表仅有一个坐标轴组。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例为图表工作表 Chart1 的分类轴添加轴标签。*/
function test() {
    let axes = Application.Charts.Item("Chart1").Axes(xlCategory)
    axes.HasTitle = true
    axes.AxisTitle.Text = "July Sales"
}
```


```JavaScript
/*本示例将关闭图表工作表 Chart1 中分类轴的主要网格线。*/
function test() {
    Application.Charts.Item("Chart1").Axes(xlCategory).HasMajorGridlines = false
}
```


```JavaScript
/*本示例将关闭 Chart1 中所有坐标轴的网格线。*/
function test() {
    for (let i = 1; i <= Application.Charts.Item("Chart1").Axes().Count; i++) {
        Application.Charts.Item("Chart1").Axes().Item(i).HasMajorGridlines = false
        Application.Charts.Item("Chart1").Axes().Item(i).HasMinorGridlines = false
    }
}
```
