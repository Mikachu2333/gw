# ChartGroup.HasHiLoLines

如果折线图有高低点连线，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasHiLoLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于折线图。



## 示例


```JavaScript
/*本示例为活动文档中第一个图表上的第一个图表组启用高低点连线，然后设置其线型和粗细。应该在具有三个系列类似股票报价的数据（最高价-最低价-收盘价）的 2D 折线图上运行示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasHiLoLines = true
        let border = chartGroup.HiLoLines.Border
        border.LineStyle = xlContinuous
        border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个图表组是否具有高低点连线。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.HasHiLoLines)
}
```
