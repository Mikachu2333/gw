# DataLabel.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **DataLabel** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的第一个数据系列的第三个数据标签的线条宽度设置为 2 磅。*/
function test() {
    let dataLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels(3)
    dataLabel.Format.Line.Weight = 2
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的第三个数据标签的前景色设置为蓝色。*/
function test() {
    let dataLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).DataLabels(3)
    dataLabel.Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```
