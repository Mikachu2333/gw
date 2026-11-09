# TickLabels.Format

返回对象的线条、填充和效果格式。只读 **[Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **TickLabels** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档上第一个内嵌图表的数值轴的刻度线标签的前景填充色设置为红色。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的类别轴的刻度线标签是否包含文本。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.Format.TextFrame2.HasText === msoTrue)
}
```
