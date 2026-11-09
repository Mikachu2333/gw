# ChartGroup.ShowNegativeBubbles

如果在图表组中显示表示负值的气泡，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowNegativeBubbles**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 说明


该属性仅对气泡图有效。



## 示例


```JavaScript
/*本示例设置活动文档第一个内嵌图表的第一个图表组表示负值的气泡为可见。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.ChartGroups(1).ShowNegativeBubbles = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个图表组表示负值的气泡是否可见。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.ShowNegativeBubbles)
}
```
