# ErrorBars.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一张图表的第一个系列的误差线的边框线条样式是否为虚线。*/
function test() {
    let errorBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    alert(errorBars.Border.LineStyle == xlDash)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的第二个系列的误差线的边框粗细设置为粗线。*/
function test() {
    let errorBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).ErrorBars
    errorBars.Border.Weight = xlThick
}
```
