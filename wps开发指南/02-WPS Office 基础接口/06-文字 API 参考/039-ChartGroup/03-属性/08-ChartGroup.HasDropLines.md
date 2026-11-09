# ChartGroup.HasDropLines

如果折线图或者面积图中有垂直线，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasDropLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于折线图和面积图。



## 示例


```JavaScript
/*本示例为活动文档中第一个图表上的第一个图表组启用垂直线，然后设置其线型和粗细。本示例应在包含一个数据系列的二维折线图上运行。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasDropLines = true
        let border = chartGroup.DropLines.Border
        border.LineStyle = xlContinuous
        border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个图表组是否展示垂直线。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.HasDropLines)
}
```
