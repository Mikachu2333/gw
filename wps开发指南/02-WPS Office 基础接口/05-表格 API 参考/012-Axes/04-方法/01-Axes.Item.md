# Axes.Item

从 **Axes** 集合中返回一个 **[Axis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/obj)** 对象。



## 语法

express.**Item(Type, AxisGroup)**

express   一个代表 **Axes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlAxisType | 坐标轴类型。 |
| AxisGroup | 可选 | XlAxisGroup | 坐标轴。 |

## 返回值

Axis

## 示例


```JavaScript
/*本示例为 Chart1 中分类轴设置标题文本。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes().Item(xlCategory)
    axis.HasTitle = true
    axis.AxisTitle.Caption = "1994"
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴的主要刻度线设置为跨轴，并将其颜色设置为红色。*/
function test() {
    let axes = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes()
    axes.Item(xlValue).MajorTickMark = xlTickMarkCross
    axes.Item(xlValue).Border.ColorIndex = 3
}
```
