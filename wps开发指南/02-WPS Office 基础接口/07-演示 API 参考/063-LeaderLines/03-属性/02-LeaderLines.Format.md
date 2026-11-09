# LeaderLines.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **LeaderLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个图表的第一个数据系列的引导线发光效果的大小和透明度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let leaderLines = shape.Chart.SeriesCollection(1).LeaderLines
    leaderLines.Format.Glow.Radius = 5
    leaderLines.Format.Glow.Transparency = 0.2
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的引导线柔化边缘的大小。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let leaderLines = shape.Chart.SeriesCollection(2).LeaderLines
    alert(leaderLines.Format.SoftEdge.Radius)
}
```
