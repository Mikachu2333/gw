# Series.LeaderLines

返回系列的引导线。只读 **[LeaderLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LeaderLines/obj)** 。



## 语法

express.**LeaderLines**

express   一个代表 **Series** 对象的变量。

## 类型

LeaderLines

## 说明


该属性仅适用于饼图。



## 示例


```JavaScript
/*本示例向活动演示文稿上第一张幻灯片中第一个饼图的第一个系列添加数据标签和粗边框引导线。如果看不到引导线，可从饼图中手动拖出其中一个数据标签以便显示引导线。*/
function test() {
    let Shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (Shape.HasChart) {
        let series = Shape.Chart.SeriesCollection(1)
        series.HasDataLabels = true
        series.DataLabels.Position = xlLabelPositionBestFit
        series.HasLeaderLines = true
        series.LeaderLines.Border.Weight = xlThick
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第一张幻灯片中第一个饼图的引导线是不是实线。*/
function test() {
    let series = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    alert(series.LeaderLines.Border.LineStyle == xlContinuous)
}
```
