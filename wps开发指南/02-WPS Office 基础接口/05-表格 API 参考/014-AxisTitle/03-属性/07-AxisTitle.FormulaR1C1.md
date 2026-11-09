# AxisTitle.FormulaR1C1

获取或设置一个 **String** 值，该值以英语使用 R1C1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**FormulaR1C1**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中图表的数值轴标题设置为工作表 Sheet1 中 F2 单元格的内容。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).AxisTitle
    axistitle.FormulaR1C1 = "='Sheet1'!R2C6"
}
```


```JavaScript
/*本示例判断如果工作表 Sheet1 中第一张图表的分类轴标题设置为可见，则将该分类轴标题设置为该工作表 B10 单元格的内容。*/
function test() {
    let axes = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    if (axes.HasTitle) {
        axes.AxisTitle.FormulaR1C1 = "='Sheet1'!R10C2"
    }
}
```
