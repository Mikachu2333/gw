# LegendKey.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **LegendKey** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档中第一个图表的第一个图例项的图例项标示的阴影可见。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Legend.LegendEntries().Item(1).LegendKey.Shadow = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的最后一个图例项的图例项标示是否带有阴影。*/
function test() {
    let legendEntries = Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    alert(legendEntries.Item(legendEntries.Count).LegendKey.Shadow)
}
```
