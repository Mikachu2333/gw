# AxisTitle.Format

返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 对象，该对象代表线条、填充和效果格式。只读。



## 语法

express.**Format**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档中第一个内嵌图表的分类轴标题的边框设置为虚线。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.Format.Line.DashStyle = msoLineDashDotDot
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的数值轴标题的前景色。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    axisTitle.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```
