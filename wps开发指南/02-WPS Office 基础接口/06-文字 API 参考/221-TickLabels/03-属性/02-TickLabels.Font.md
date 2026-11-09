# TickLabels.Font

返回指定对象的字体。只读 **[ChartFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/obj)** 对象。



## 语法

express.**Font**

express   一个代表 **TickLabels** 对象的变量。

## 类型

ChartFont

## 示例


```JavaScript
/*本示例将活动文档上第一个内嵌图表的数值轴的刻度线标签的字体设置为粗斜体。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Font.Bold = msoTrue
    tickLabels.Font.Italic = msoTrue
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的类别轴的刻度线标签的字体名称和字体颜色。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.Font.Name = "黑体"
    tickLabels.Font.Color = RGB(255, 0, 0)
}
```
