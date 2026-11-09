# Axis.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **Axis** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的分类轴的边框线条样式设置为虚线。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory)
    axis.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的数值轴边框的粗细和线条的样式。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    axis.Border.Weight = xlThick
    axis.Border.LineStyle = xlDashDot
}
```
