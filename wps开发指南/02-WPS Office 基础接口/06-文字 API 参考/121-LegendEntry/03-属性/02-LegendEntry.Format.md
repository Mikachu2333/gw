# LegendEntry.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例更改第一个文档中第一个形状中图表上位于图例顶部的图例项（这通常是第一个系列的图例）的前景填充色。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).Format.Fill.ForeColor.RGB = RGB(0, 128, 128)
    }
}
```


```JavaScript
/*本示例遍历活动文档中第一个图表的图例项集合，并更改这些图例项的填充透明度。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let legend = inlineShape.Chart.Legend
        for (let i = 1; i <= legend.LegendEntries().Count; i++) {
            legend.LegendEntries().Item(i).Format.Fill.Transparency = 0.5
        }
    }
}
```
