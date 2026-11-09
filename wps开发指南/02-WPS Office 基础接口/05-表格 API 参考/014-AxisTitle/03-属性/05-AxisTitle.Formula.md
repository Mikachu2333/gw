# AxisTitle.Formula

获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**Formula**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 说明


有关 A1 样式表示法的详细信息，请参阅操作方法：使用 A1 表示法引用单元格和区域。



## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 中图表的分类轴标题为工作表 Sheet1 中 E1 单元格的内容。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.Formula = "=Sheet1!$E$1"
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴标题设置为可见，并将该数值轴标题设置为该工作表 E5 单元格的内容。*/
function test() {
    let axes = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axes.HasTitle = true
    axes.AxisTitle.Formula = "=Sheet1!$E$5"
}
```
