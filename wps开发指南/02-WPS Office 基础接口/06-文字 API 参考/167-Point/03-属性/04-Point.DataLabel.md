# Point.DataLabel

返回一个 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/obj)** 对象，它代表与数据点相关的数据标签。只读。



## 语法

express.**DataLabel**

express   一个代表 **Point** 对象的变量。

## 类型

DataLabel

## 示例


```JavaScript
/*本示例为活动文档中第一个内嵌图表的第三个系列的第四个数据点启用数据标签，并将该数据标签的颜色设置为蓝色。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let point = inlineShape.Chart.SeriesCollection(3).Points(4)
        point.HasDataLabel = true
        point.ApplyDataLabels(xlValue)
        point.DataLabel.Font.Color = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例为第一个文档上第一个形状中图表的第二个系列的第三个数据点启用数据标签，并将该数据标签的文本设置为“example”。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    point.HasDataLabel = true
    point.DataLabel.Text = "example"
}
```
