# Series.PictureType

返回或设置一个指定图片在柱形图或条形图上的显示方式的值。可读/写 **[XlChartPictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartPictureType)** 。



## 语法

express.**PictureType**

express   一个代表 **Series** 对象的变量。

## 类型

XlChartPictureType

## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第一个系列的图片设置为拉伸图片。应在具有图片数据标记的二维柱形图上运行该示例。*/
function test() {
    let Shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (Shape.HasChart) {
        Shape.Chart.SeriesCollection(1).PictureType = xlStretch
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第一张幻灯片中第一个图表的第三个系列的图片展示方式是否为xlStack。应在具有图片数据标记的二维柱形图上运行该示例。*/
function test() {
    let series = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3)
    alert(series.PictureType == xlStack)
}
```
