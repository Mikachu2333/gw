# Point.DataLabel

返回一个 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/obj)** 对象，它代表与数据点相关的数据标签。只读。



## 语法

express.**DataLabel**

express   一个代表 **Point** 对象的变量。

## 类型

DataLabel

## 示例


```JavaScript
/*此示例打开 Chart1 上第三个数据系列的第七个数据点的数据标签，并将该数据标签的颜色设置为蓝色。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).Points(7)
    point.HasDataLabel = true
    point.ApplyDataLabels(xlValue)
    point.DataLabel.Font.ColorIndex = 5
}
```


```JavaScript
/*下例打开Chart1的图表工作表上第二个系列中第三个数据点的数据标签，并将数据标签文本设置为Saturday。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).Points(3)
    point.HasDataLabel = true
    point.DataLabel.Text = "Saturday"
}
```
