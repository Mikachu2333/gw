# Axis 对象

代表图表中的单个坐标轴。

## 说明


 **Axis** 对象是 **Axes** 集合的成员。

使用 **Axes** (*type*, *group* )（其中 *type* 为坐标轴类型，而 *group* 为坐标轴组）可返回单个 **Axis** 对象。*Type* 可为以下 **[XlAxisType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisType)** 常量之一： **xlCategory** 、 **xlSeries** 或 **xlValue** 。*Group* 可为以下 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 常量之一： **xlPrimary** 或 **xlSecondary** 。有关详细信息，请参阅 **[Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Axes)** 方法。


## 示例


```JavaScript
/*本示例在名为“Chart1”的图表工作表中设置分类轴的标题文本。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.HasTitle = true
    axis.AxisTitle.Caption = "1994"
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴的主要刻度线设置为跨轴，并将其颜色设置为红色。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.MajorTickMark = xlTickMarkCross
    axis.Border.ColorIndex = 3
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Application) | 如果不使用对象识别符，则该属性返回一个 **App**  **lication** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AxisBetweenCategories](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/AxisBetweenCategories) | 如果数值轴与分类坐标轴相交于分类之间，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/AxisGroup) | 返回指定轴的组。只读 |
| [AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/AxisTitle) | 返回一个 **AxisTitle** 对象，该对象表示指定坐标轴的标题。只读。 |
| [BaseUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/BaseUnit) | 返回或设置指定分类轴的基本单位。 **XlTimeUnit** 类型，可读写。 |
| [BaseUnitIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/BaseUnitIsAuto) | 如果由 ET 为指定的分类轴选取适当的基本单位，则该值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [CategoryNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/CategoryNames) | 以文本数组形式返回或设置指定坐标轴中所有分类的名称。该属性既可设为一个数组，也可设为一个包含所有分类名称的 **Range** 对象。 **Variant** 类型，可读写。 |
| [CategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/CategoryType) | 返回或设置分类轴类型。 **XlCategoryType** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Crosses](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Crosses) | 返回或设置指定坐标轴与其他坐标轴相交的点。 **Long** 类型，可读写。 |
| [CrossesAt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/CrossesAt) | 返回或设置数值轴中与分类坐标轴的交点。仅应用于数值轴。 **Double** 类型，可读写。 |
| [DisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/DisplayUnit) | 返回或设置数值轴的单位标签。 **XlDisplayUnit** 、 **xlCustom** 或 **xlNone** 类型，可读写。 |
| [DisplayUnitCustom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/DisplayUnitCustom) | 如果 **DisplayUnit** 属性的值是 **xlCustom** ，则 **DisplayUnitCustom** 返回或设置显示的单位的值。该值范围必须是从 0 到 10E307。 **Double** 类型，可读写。 |
| [DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/DisplayUnitLabel) | 返回指定坐标轴的 **DisplayUnitLabel** 对象。如果 **HasDisplayUnitLabel** 属性设置为 **False** ，则返回 **null** 。只读。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Format) | 返回 ChartFormat 对象。只读。 |
| [HasDisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/HasDisplayUnitLabel) | 如果由 **DisplayUnit** 或 **DisplayUnitCustom** 属性指定的标签显示在指定坐标轴上，则该属性值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [HasMajorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/HasMajorGridlines) | 如果坐标轴有主要网格线，则该值为 **True** 。只有主要坐标轴组中的坐标轴才能有网格线。 **Boolean** 类型，可读写。 |
| [HasMinorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/HasMinorGridlines) | 如果坐标轴有次要网格线，则该值为 **True** 。只有主要坐标轴组中的坐标轴才能有网格线。 **Boolean** 类型，可读写。 |
| [HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/HasTitle) | 如果坐标轴或图表有可见标题，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Height) | 返回一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Left) | 返回一个 **Double** 值，它代表从对象左边缘到图表区左边缘的距离（以磅为单位）。 |
| [LogBase](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/LogBase) | 在使用对数刻度时返回或设置对数的底。可读/写 **Double** 类型。 |
| [MajorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MajorGridlines) | 返回一个 **Gridlines** 对象，该对象表示指定坐标轴的主要网格线。只有主要坐标轴组中的坐标轴才能有网格线。只读。 |
| [MajorTickMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MajorTickMark) | 返回或设置指定坐标轴的主刻度线类型。 **XlTickMark** 类型，可读写。 |
| [MajorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MajorUnit) | 返回或设置数值轴的主要单位。 **Double** 类型，可读写。 |
| [MajorUnitIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MajorUnitIsAuto) | 如果 ET 计算数值轴的主要单位，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MajorUnitScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MajorUnitScale) | 当 **CategoryType** 属性设置为 **xlTimeScale** 时，返回或设置分类轴主要单位的刻度值。 **XlTimeUnit** 类型，可读写。 |
| [MaximumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MaximumScale) | 返回或设置数值轴上的最大值。 **Double** 类型，可读写。 |
| [MaximumScaleIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MaximumScaleIsAuto) | 如果 ET 计算该数值轴的最大值，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MinimumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinimumScale) | 返回或设置数值轴上的最小值。 **Double** 类型，可读写。 |
| [MinimumScaleIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinimumScaleIsAuto) | 如果 ET 为数值轴计算最小值，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MinorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinorGridlines) | 返回 **Gridlines** 对象，该对象表示指定坐标轴的次要网格线。只有主要坐标轴组中的坐标轴才能有网格线。只读。 |
| [MinorTickMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinorTickMark) | 返回或设置指定坐标轴的次要刻度线类型。 **XlTickMark** 类型，可读写。 |
| [MinorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinorUnit) | 返回或设置数值轴上的次要单位。 **Double** 类型，可读写。 |
| [MinorUnitIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinorUnitIsAuto) | 如果 ET 为数值轴计算次要单位，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MinorUnitScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinorUnitScale) | 返回或设置当 **CategoryType** 属性设置为 **xlTimeScale** 时分类轴次要单位的刻度值。 **XlTimeUnit** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Parent) | 返回指定对象的父对象。只读。 |
| [ReversePlotOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/ReversePlotOrder) | 如果 ET 的绘图区数据点的顺序为从后往前，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ScaleType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/ScaleType) | 返回或设置数值轴的刻度类型。 **XlScaleType** 类型，可读写。 |
| [TickLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/TickLabelPosition) | 说明指定坐标轴上刻度线标志的位置。 **[XlTickLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickLabelPosition)** 类型，可读写。 |
| [TickLabelSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/TickLabelSpacing) | 返回或设置刻度线标签之间的分类数或数据系列数。仅应用于分类轴和系列轴。可以是 1 到 31999 之间的一个数值。 **Long** 类型，可读写。 |
| [TickLabelSpacingIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/TickLabelSpacingIsAuto) | 返回或设置刻度标签间距是否是自动设置的。可读/写 **Boolean** 类型。 |
| [TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/TickLabels) | 返回一个 **TickLabels** 对象，该对象表示指定坐标轴的刻度线标签。只读。 |
| [TickMarkSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/TickMarkSpacing) | 返回或设置刻度线之间的分类数或数据系列数。仅应用于分类轴和系列轴。可以是 1 到 31999 之间的一个数值。 **Long** 类型，可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Top) | 返回一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Width) | 返回一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |