# Series.ErrorBars

返回系列的误差线。只读 **[ErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/obj)** 。



## 语法

express.**ErrorBars**

express   一个代表 **Series** 对象的变量。

## 类型

ErrorBars

## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第一个系列的误差线设置为虚线。应在第一个系列有误差线的二维折线图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).ErrorBars.Border.LineStyle = xlDash
    }
}
```


```JavaScript
/*本示例删除第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的误差线。应在第三个系列有误差线的二维折线图上运行该示例。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    shape.Chart.SeriesCollection(3).ErrorBars.Delete()
}
```
