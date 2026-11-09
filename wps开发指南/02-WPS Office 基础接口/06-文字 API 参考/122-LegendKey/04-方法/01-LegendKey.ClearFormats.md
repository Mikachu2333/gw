# LegendKey.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **LegendKey** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动文档中第一个图表的第一个图例项的图例项标示的格式设置。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Legend.LegendEntries().Item(1).LegendKey.ClearFormats()
    }
}
```


```JavaScript
/*本示例清除第一个文档上第一个形状中图表的最后一个图例项的图例项标示的格式设置。*/
function test() {
    let legendEntries = Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    legendEntries.Item(legendEntries.Count).LegendKey.ClearFormats()
}
```
