# SeriesLines 对象

代表图表组中的系列线。

## 说明


系列线连接每个系列中的数据值。只有二维堆积条形图、二维堆积柱形图、复合饼图或复合条饼图可以有系列线。此对象不是集合。没有代表单个系列线的对象；您或者启用图表组中所有数据点的系列线，或者将其全部禁用。

如果 **[HasSeriesLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HasSeriesLines)** 属性为 **False** ，则会禁用 **SeriesLines** 对象的大多数属性。

可以使用 **[SeriesLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/SeriesLines)** 属性返回 **SeriesLines** 对象。


## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个图表组中的系列线的边框粗细设置为中等。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasSeriesLines = true
        chartGroup.SeriesLines.Border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的第一个图表组的系列线名称为“系列线 1”，则删除该系列线。*/
function test() {
    let seriesLines = Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1).SeriesLines
    if (seriesLines.Name == "系列线 1") {
        seriesLines.Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesLines/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesLines/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesLines/member/Name) | 返回对象的名称。只读 **String** 类型。 |