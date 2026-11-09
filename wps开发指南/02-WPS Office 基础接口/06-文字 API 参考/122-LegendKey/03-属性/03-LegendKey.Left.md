# LegendKey.Left

以磅为单位返回从对象左边缘至图表区左边缘之间的距离。只读 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **LegendKey** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第一个图例项的图例项标示左边缘至图表区左边缘之间的距离。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        alert(inlineShape.Chart.Legend.LegendEntries().Item(1).LegendKey.Left)
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表最后一个图例项的图例项标示左边缘至图表区左边缘之间的距离。*/
function test() {
    let legendEntries = Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    alert(legendEntries.Item(legendEntries.Count).LegendKey.Left)
}
```
