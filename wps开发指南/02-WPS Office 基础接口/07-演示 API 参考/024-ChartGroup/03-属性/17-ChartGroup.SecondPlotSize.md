# ChartGroup.SecondPlotSize

返回或设置复合饼图或复合条饼图中第二部分的尺寸，以主饼图部分尺寸的百分比表示。可读/写 **Long** 类型。



## 语法

express.**SecondPlotSize**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性的值可以介于 5 到 200 之间。



## 示例


```JavaScript
/*本示例按数值拆分图表的两部分，组合主饼图部分所有小于 10 的数值，并在从属部分显示这些数值。从属部分的大小为主饼图部分大小的 50%。必须在复合饼图或复合条饼图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartGroup = shape.Chart.ChartGroups(1)
        chartGroup.SplitType = xlSplitByValue
        chartGroup.SplitValue = 10
        chartGroup.VaryByCategories = true
        chartGroup.SecondPlotSize = 50
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个复合饼图的第一个图表组内从属部分占主饼图的大小。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.SecondPlotSize)
}
```
