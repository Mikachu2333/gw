# Series.Trendlines

返回系列中所有趋势线的集合。



## 语法

express.**Trendlines(Index)**

express   一个代表 **Series** 对象的变量。

## 返回值

一个代表系列中所有趋势线的 **[Trendlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Trendlines/obj)** 对象。

## 示例


```JavaScript
/*本示例向活动演示文稿上第一张幻灯片中第一个图表的第一个系列添加线性趋势线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Trendlines().Add(xlLinear)
    }
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的第一条趋势线类型更改为xlMovingAvg。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(3).Trendlines(1).Type = xlMovingAvg
    }
}
```
