# AxisTitle.Caption

返回或设置一个 **String** 值，它代表坐标轴标题文本。



## 语法

express.**Caption**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴标题设置为“一年级成绩”。*/
function test() {
    let axes = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axes.HasTitle = true
    let axistitle = axes.AxisTitle
    axistitle.Caption = "一年级成绩"
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的分类轴标题。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    alert(axistitle.Caption)
}
```
