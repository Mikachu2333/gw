# Point.DataLabel

返回与数据点关联的数据标签。只读 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/obj)** 。



## 语法

express.**DataLabel**

express   一个代表 **Point** 对象的变量。

## 类型

DataLabel

## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的第三个系列的第四个数据点启用数据标签，并将该数据标签的颜色设置为蓝色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let point = shape.Chart.SeriesCollection(3).Points(4)
        point.HasDataLabel = true
        point.ApplyDataLabels(xlValue)
        point.DataLabel.Font.Color = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例为第一个演示文稿的第一张幻灯片上第一个图表的第二个系列的第三个数据点启用数据标签，并将该数据标签的文本设置为“example”。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    point.HasDataLabel = true
    point.DataLabel.Text = "example"
}
```
