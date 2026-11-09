# LegendKey 对象

代表图表图例中的图例标示。

## 说明


每个图例项标示都是一个图形，它将图例项标示以及与之相关联的图表中的系列或趋势线链接起来。图例项标示链接到与之相关联的系列或趋势线的方式为：更改一个的格式会同时更改另一个的格式。

可以使用 **[LegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/LegendKey)** 属性返回 **LegendKey** 对象。


## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第一个图例项的图例项标示的填充类型是否为实心填充。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        alert(inlineShape.Chart.Legend.LegendEntries().Item(1).LegendKey.Format.Fill.Type == msoFillSolid)
    }
}
```


```JavaScript
/*本示例清除第一个文档上第一个形状中图表的最后一个图例项的图例项标示的格式设置。*/
function test() {
    let legendEntries = Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    legendEntries.Item(legendEntries.Count).LegendKey.ClearFormats()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/member/ClearFormats) | 清除对象的格式设置。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/member/Height) | 以磅为单位返回对象的高度。只读 **Double** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/member/Left) | 以磅为单位返回从对象左边缘至图表区左边缘之间的距离。只读 **Double** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/member/Shadow) | 返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/member/Top) | 以磅为单位返回从对象上边缘至图表区顶端（在图表上）的距离。只读 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/member/Width) | 以磅为单位返回对象的宽度。只读 **Double** 类型。 |