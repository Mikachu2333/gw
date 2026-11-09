# ChartFormat.AutoShapeType

返回或设置指定对象的自动形状类型。可读/写 **[MsoAutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAutoShapeType)** 类型。



## 语法

express.**AutoShapeType**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

MsoAutoShapeType

## 示例


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第一个数据标签的形状是否为 msoShapeRectangle。*/
function test() {
    let chartFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels(1).Format
    alert(chartFormat.AutoShapeType == msoShapeRectangle)
}
```


```JavaScript
/*此示例设置第一个演示文稿的第一张幻灯片中第一个图表的第二个数据系列的第二个数据标签的形状为 msoShape10pointStar。*/
function test() {
    let chartFormat = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels(2).Format
    chartFormat.AutoShapeType = msoShape10pointStar
}
```
