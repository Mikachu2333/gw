# Chart.ApplyLayout

应用功能区中显示的版式。



## 语法

express.**ApplyLayout(Layout, ChartType)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Layout | 必选 | number（int4 精度） | 版式类型。版式类型由 1 到 10 的数字表示。 |
| ChartType | 可选 | any | 一个代表图表类型的 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 常量。 |

## 返回值

void

## 说明


在当前图表类型上使用版式时，会将 1 到 10 之间的数字应用于该图表类型。还可以将某一图表类型的版式应用于另一个图表类型。例如，可以将折线图中的可用版式应用于柱形图。版式只会添加适用于该特定图表类型的图表元素。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一张图表的版式设置为堆积条形图的第二个版式。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ApplyLayout(2, xlBarStacked)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第二张图表的版式设置为数据点折线图的第五个版式，并将图表标题设置为不可见。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.ApplyLayout(5, xlLineMarkers)
    chart.HasTitle = false
}
```
