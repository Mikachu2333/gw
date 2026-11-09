# Chart.ChartTitle

返回指定图表的标题。只读 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/obj)** 对象。



## 语法

express.**ChartTitle**

express   一个代表 **Chart** 对象的变量。

## 类型

ChartTitle

## 说明


除非图表的 **[HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/HasTitle)** 属性为 **True** ，否则 **ChartTitle** 将不存在，因此无法使用。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的标题文本设置为“First Quarter Sales”。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "First Quarter Sales"
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片中第二张图表的图表标题。*/
function test() {
    let charts = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    charts.ChartTitle.Delete()
}
```
