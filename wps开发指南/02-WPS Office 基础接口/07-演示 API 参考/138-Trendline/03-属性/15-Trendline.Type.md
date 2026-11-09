# Trendline.Type

返回或设置趋势线类型。可读/写 **[XlTrendlineType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTrendlineType)** 。



## 语法

express.**Type**

express   一个代表 **Trendline** 对象的变量。

## 类型

XlTrendlineType

## 示例


```JavaScript
/*本示例更改活动演示文稿的第一张幻灯片中第一个图表的第一个系列的第一条趋势线的趋势线类型。如果该系列没有趋势线，该示例将失败。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Trendlines(1).Type = xlMovingAvg
    }
}
```


```JavaScript
/*此示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一条趋势线的类型为xlLinear，则显示该趋势线的顺序号。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    if (trendline.Type == xlLinear) {
        alert(trendline.Order)
    }
}
```
