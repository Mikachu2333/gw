# LeaderLines.Border

返回 **LeaderLines** 对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **LeaderLines** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表中第一个数据系列的引导线的粗细设置为 xlMedium。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let leaderLines = shape.Chart.SeriesCollection(1).LeaderLines
    leaderLines.Border.Weight = xlMedium
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的引导线的样式是否为 xlContinuous*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let leaderLines = shape.Chart.SeriesCollection(2).LeaderLines
    alert(leaderLines.Border.LineStyle == xlContinuous)
}
```
