# LeaderLines 对象

代表图表的引导线。引导线将数据标签连接到数据点。

## 说明


此对象不是集合；没有代表单个引导线的对象。

此对象只适用于饼图。

可以使用 **[LeaderLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/LeaderLines)** 属性返回 **LeaderLines** 对象。


## 示例


```JavaScript
/*本示例向活动文档中第一个图表的第一个系列添加数据标签和引导线（虚线）。如果看不到引导线，则该示例代码将失败。在这种情况下，可从饼图中手动拖出其中一个数据标签以便显示引导线。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let series = inlineShape.Chart.SeriesCollection(1)
        series.HasDataLabels = true
        series.DataLabels.Position = xlLabelPositionBestFit
        series.HasLeaderLines = true
        series.LeaderLines.Border.LineStyle = xlDash
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的第一个数据系列的引导线为虚线，则选中引导线。*/
function test() {
    let series = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    if (series.LeaderLines.Border.LineStyle == xlDash) {
        series.LeaderLines.Select()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LeaderLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LeaderLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LeaderLines/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LeaderLines/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |