# DataTable.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **DataTable** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第一张图表的模拟运算表的边框线条样式设置为虚线。*/
function test() {
    let dataTable = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的模拟运算表的边框粗细设置为xlThick。*/
function test() {
    let dataTable = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.Border.Weight = xlThick
}
```
