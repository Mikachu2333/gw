# LegendEntry.Height

以磅为单位返回对象的高度。只读 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示第一个文档中第一个形状中图表上位于图例顶部的图例项（这通常是第一个系列的图例）的高度。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.Legend.LegendEntries().Item(1).Height)
    }
}
```


```JavaScript
/*本示例遍历活动文档中第一个图表的图例项集合，并显示这些图例项的高度。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let legend = inlineShape.Chart.Legend
        for (let i = 1; i <= legend.LegendEntries().Count; i++) {
            alert(legend.LegendEntries().Item(i).Height)
        }
    }
}
```
