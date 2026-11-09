# DataLabels.Position

返回或设置数据标签的位置。可读/写 **[XlDataLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDataLabelPosition)** 。



## 语法

express.**Position**

express   一个代表 **DataLabels** 对象的变量。

## 类型

XlDataLabelPosition

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一张图表的第一个数据系列的数据标签的位置设置为xlLabelPositionCenter。*/
function test() {
    let dataLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels()
    dataLabels.Position = xlLabelPositionCenter
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的数据标签的位置是否为xlLabelPositionRight。*/
function test() {
    let dataLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    alert(dataLabels.Position == xlLabelPositionRight)
}
```
