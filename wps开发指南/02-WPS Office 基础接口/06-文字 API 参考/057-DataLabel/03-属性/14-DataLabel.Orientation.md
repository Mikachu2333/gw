# DataLabel.Orientation

返回或设置文本方向。可读/写 **Long** 类型。



## 语法

express.**Orientation**

express   一个代表 **DataLabel** 对象的变量。

## 类型

any

## 说明


该属性的值可以是介于 –90 至 90 度之间的整数或 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/XlOrientation)** 常量之一。



## 示例


```JavaScript
/*本示例设置活动文档中第一张内嵌图表的第三个系列的第一个数据标签的文本方向。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.SeriesCollection(3).HasDataLabels = true
    chart.SeriesCollection(3).DataLabels(1).Orientation = 45
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的第一个数据点的数据标签的文字方向是否为xlHorizontal。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(1)
    alert(point.DataLabel.Orientation == xlHorizontal)
}
```
