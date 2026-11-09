# Axis.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **Axis** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一张图表的分类轴的边框线条样式设置为虚线。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    axis.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第二张图表的数值轴边框的粗细。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    axis.Border.Weight = xlThick
}
```
