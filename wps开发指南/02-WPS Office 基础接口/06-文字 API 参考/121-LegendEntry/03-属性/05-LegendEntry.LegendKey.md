# LegendEntry.LegendKey

返回与图例项相关联的图例项标示。只读 **[LegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/obj)** 对象。



## 语法

express.**LegendKey**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

LegendKey

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第一个图例项的图例项标示的宽度。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        alert(inlineShape.Chart.Legend.LegendEntries().Item(1).LegendKey.Width)
    }
}
```


```JavaScript
/*本示例显示第一个文档第一个形状中图表最后一个图例项的图例项标示的高度。*/
function test() {
    let legendEntries = Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    alert(legendEntries.Item(legendEntries.Count).LegendKey.Height)
}
```
