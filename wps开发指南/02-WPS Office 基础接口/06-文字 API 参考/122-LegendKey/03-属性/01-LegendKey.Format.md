# LegendKey.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **LegendKey** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第一个图例项的图例项标示的填充类型是否为实心填充。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        alert(inlineShape.Chart.Legend.LegendEntries().Item(1).LegendKey.Format.Fill.Type == msoFillSolid)
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表最后一个图例项的图例项标示的柔化边缘效果的辐射长度。*/
function test() {
    let legendEntries = Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    legendEntries.Item(legendEntries.Count).LegendKey.Format.SoftEdge.Radius = 5
}
```
