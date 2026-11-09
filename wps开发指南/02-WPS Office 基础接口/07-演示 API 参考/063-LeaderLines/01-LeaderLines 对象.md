# LeaderLines 对象

代表图表的引导线。引导线将数据标签连接到数据点。

## 说明


此对象不是一个集合；没有表示单个引导线的对象。

使用 **[LeaderLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/LeaderLines)** 属性可返回 **LeaderLines** 对象。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中第一个图表中第一个数据系列添加数据标签和引导线，然后设置引导线的宽度。如果看不到引导线，可从图表中手动拖出其中一个数据标签以便显示引导线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let seriesCollection = shape.Chart.SeriesCollection(1)
        seriesCollection.HasDataLabels = true
        seriesCollection.DataLabels.Position = xlLabelPositionBestFit
        seriesCollection.HasLeaderLines = true
        seriesCollection.LeaderLines.Border.Weight = xlMedium
    }
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

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LeaderLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LeaderLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LeaderLines/member/Border) | 返回 **LeaderLines** 对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LeaderLines/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |