# LegendEntry.Top

以磅为单位返回从对象上边缘至图表区顶端（在图表上）的距离。只读 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示第一个文档中第一个形状中图表上位于图例顶部的图例项（这通常是第一个系列的图例）上边缘至图表区顶端之间的距离。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.Legend.LegendEntries().Item(1).Top)
    }
}
```


```JavaScript
/*本示例遍历活动文档中第一个图表的图例项集合，并显示这些图例项的上边缘至图表区顶端之间的距离。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let legend = inlineShape.Chart.Legend
        for (let i = 1; i <= legend.LegendEntries().Count; i++) {
            alert(legend.LegendEntries().Item(i).Top)
        }
    }
}
```
