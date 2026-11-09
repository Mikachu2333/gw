# Legend 对象

代表图表中的图例。每个图表只能有一个图例。

## 说明


 **Legend** 对象包含一个或多个 **[LegendEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/obj)** 对象；每个 **LegendEntry** 对象包含一个 **[LegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/obj)** 对象。

除非 **[HasLegend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/HasLegend)** 属性为 **True** ，否则无法看到图表的图例。如果该属性为 **False** ，则 **Legend** 对象的属性和方法无效。

可以使用 **[Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/Legend)** 属性返回 **Legend** 对象。


## 示例


```JavaScript
/*本示例将活动文档中第一个内嵌图表的第一个图例项的字体设置为粗体格式。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart == msoTrue) {
        inlineShape.Chart.Legend.LegendEntries().Item(1).Font.Bold = msoTrue
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表图例的前景填充色。*/
function test() {
    let legend = Documents.Item(1).Shapes.Item(1).Chart.Legend
    legend.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Clear) | 清除整个对象。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Delete) | 删除对象。 |
| [LegendEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/LegendEntries) | 返回图例中的图例项集合。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Height) | 以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。 |
| [IncludeInLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/IncludeInLayout) | 如果在确定图表布局时图例将占用图表布局空间，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Left) | 以磅为单位返回从对象左边缘至图表区左边缘之间的距离。可读写， **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Name) | 返回对象的名称。只读， **String** 类型。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Position) | 返回或设置图例在图表上的位置。可读/写 **[XlLegendPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlLegendPosition)** 。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Shadow) | 返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Top) | 返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/Width) | 以磅为单位返回或设置对象的宽度。可读/写 **Double** 类型。 |