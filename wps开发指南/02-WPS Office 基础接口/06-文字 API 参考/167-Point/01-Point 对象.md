# Point 对象

代表图表系列中的单个数据点。

## 说明


 **Point** 对象是 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Points/obj)** 集合的成员。 **Points** 集合包含一个系列中的所有数据点。

可以使用 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/Points)** (_Index_)（其中 _Index_ 是数据点的索引号）返回单个 **Point** 对象。系列中的数据点从左至右编号。`Points(1)` 为最左边的数据点，`Points(Points.Count)` 为最右边的数据点。


## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表上第一个系列的第三个数据点的数据标记样式。指定的系列必须是二维折线图、散点图或雷达图系列。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Points(3).MarkerStyle = xlDiamond
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三个系列的所有数据点的名称。*/
function test() {
    let points = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points()
    let str = ""
    for (let i = 1; i <= points.Count; i++) {
        str += points.Item(i).Name + "\n"
    }
    alert(str)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/ApplyDataLabels) | 对数据点应用数据标签。 |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/ClearFormats) | 清除对象的格式设置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ApplyPictToEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/ApplyPictToEnd) | 如果图片应用于系列中的某个数据点或所有数据点之后，则为 **True** 。可读/写 **Boolean** 类型。 |
| [ApplyPictToFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/ApplyPictToFront) | 如果图片应用于系列中的某个数据点或所有数据点之前，则为 **True** 。可读/写 **Boolean** 类型。 |
| [ApplyPictToSides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/ApplyPictToSides) | 如果将图片应用于系列中的某个数据点或所有数据点的两侧，则为 **True** 。可读/写 **Boolean** 类型。 |
| [DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/DataLabel) | 返回一个 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/obj)** 对象，它代表与数据点相关的数据标签。只读。 |
| [Explosion](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Explosion) | 返回或设置饼图或圆环图的扇区的分离程度值。可读/写 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Has3DEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Has3DEffect) | 如果数据点具有三维外观，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasDataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/HasDataLabel) | 如果数据点具有数据标签，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [InvertIfNegative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/InvertIfNegative) | 如果对象与一个负数相对应时 WPS 就将其反色，则为 **True** 。可读/写 **Variant** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Left) | 返回一个值，该值代表从对象左边缘到图表区左边缘的距离（以磅为单位）。只读。 |
| [MarkerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/MarkerSize) | 以磅为单位返回或设置数据标记的大小。可读/写 **Long** 类型。 |
| [MarkerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/MarkerStyle) | 返回或设置折线图、散点图或雷达图中数据点或系列的数据标记样式。可读/写 **[XlMarkerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlMarkerStyle)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Name) | 返回对象名称。只读。 |
| [PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/PictureType) | 返回或设置一个指定图片在柱形图或条形图上的显示方式的值。可读/写 **[XlChartPictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartPictureType)** 。 |
| [PictureUnit2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/PictureUnit2) | 如果 **[PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/PictureType)** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位（否则，将忽略该属性）。可读/写 **Double** 类型。 |
| [SecondaryPlot](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/SecondaryPlot) | 如果数据点位于复合饼图或复合条饼图中的从属部分，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Shadow) | 返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Top) | 返回一个值，该值代表从对象上边缘到图表区上边缘的距离（以磅为单位）。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/member/Width) | 返回对象的宽度（以磅为单位）。只读。 |