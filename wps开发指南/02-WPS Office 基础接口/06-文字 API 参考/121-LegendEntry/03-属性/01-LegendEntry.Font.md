# LegendEntry.Font

返回指定对象的字体。只读 **[ChartFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/obj)** 对象。



## 语法

express.**Font**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

ChartFont

## 示例


```JavaScript
/*本示例更改第一个文档中第一个形状中图表上位于图例顶部的图例项（这通常是第一个系列的图例）的文字字体。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).Font.Italic = true
    }
}
```


```JavaScript
/*本示例遍历活动文档中第一个图表的图例项集合，并更改这些图例项的字体颜色。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let legend = inlineShape.Chart.Legend
        for (let i = 1; i <= legend.LegendEntries().Count; i++) {
            legend.LegendEntries().Item(i).Font.Color = RGB(255, 0, 0)
        }
    }
}
```
