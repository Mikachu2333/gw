# ChartGroup.SplitValue

返回或设置分隔复合饼图或复合条饼图的两部分的临界值。可读/写 **Variant** 类型。



## 语法

express.**SplitValue**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*以下示例以数值拆分图表的两部分，在主饼图部分中合并所有小于 10 的数值，并在第二部分中显示这些数值。必须在复合饼图或复合条饼图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartGroup = shape.Chart.ChartGroups(1)
        chartGroup.SplitType = xlSplitByValue
        chartGroup.SplitValue = 10
        chartGroup.VaryByCategories = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个复合饼图的第一个图表组拆分两部分的临界值。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.SplitValue)
}
```
