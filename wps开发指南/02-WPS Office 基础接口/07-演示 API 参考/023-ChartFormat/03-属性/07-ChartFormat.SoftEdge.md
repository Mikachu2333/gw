# ChartFormat.SoftEdge

返回形状的柔化边缘格式。只读 **[SoftEdgeFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SoftEdgeFormat/obj)** 对象。



## 语法

express.**SoftEdge**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

SoftEdgeFormat

## 示例


```JavaScript
/*此示例设置活动演示文稿的第一张幻灯片中第一张图表的图表区的柔化边缘效果的大小为2磅。*/
function test() {
    let chartformat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    chartformat.SoftEdge.Radius = 2
}
```


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片中第一张图表的图表区的柔化边缘类型是否为 msoSoftEdgeType1。*/
function test() {
    let chartformat = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    alert(chartformat.SoftEdge.Type == msoSoftEdgeType1)
}
```
