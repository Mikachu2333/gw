# ChartGroup.DoughnutHoleSize

返回或设置圆环图图表组的内径大小。可读/写 **Long** 类型。



## 语法

express.**DoughnutHoleSize**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 说明


内径大小以图表大小的百分比表示，有效取值范围为 10% 到 90%。



## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的第一个圆环图图表组的内径大小。本示例应在二维圆环图上运行。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.ChartGroups(1).DoughnutHoleSize = 10
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个图表组的内径大小。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.DoughnutHoleSize)
}
```
