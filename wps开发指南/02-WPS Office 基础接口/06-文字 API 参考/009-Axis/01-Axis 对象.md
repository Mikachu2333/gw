# Axis 对象

代表图表中的单个坐标轴。

## 说明


 **Axis** 对象是 **[Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axes/obj)** 集合的成员。

可以使用 **Axes** (_Type_, _AxisGroup_)（其中 _Type_ 为坐标轴类型，_AxisGroup_ 为坐标轴组）返回单个 **Axis** 对象。_Type_ 可以是下列 **[XlAxisType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisType)** 常量之一： **xlCategory** 、 **xlSeries** 或 **xlValue** 。_AxisGroup_ 可以是下列 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 常量之一： **xlPrimary** 或 **xlSecondary** 。有关详细信息，请参阅 **[Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/Axes)** 方法。


## 示例


```JavaScript
/*本示例为活动文档中的第一张内嵌图表设置分类轴标题文本。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlCategory)
        axis.HasTitle = true
        axis.AxisTitle.Caption = "1994"
    }
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的数值轴的主要刻度线设置为跨轴，并将其线条样式设置为虚线。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    axis.MajorTickMark = xlTickMarkCross
    axis.Border.LineStyle = xlDash
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AxisBetweenCategories](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/AxisBetweenCategories) | 如果数值轴与分类坐标轴相交于分类之间，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/AxisGroup) | 返回坐标轴组的类型。只读 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。 |
| [AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/AxisTitle) | 返回指定坐标轴的标题。只读 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/obj)** 对象。 |
| [BaseUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/BaseUnit) | 返回或设置指定分类轴的基本单位。可读/写 **[XlTimeUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTimeUnit)** 。 |
| [BaseUnitIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/BaseUnitIsAuto) | 如果由 Wps 为指定的分类轴选择适当的基本单位，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。 |
| [CategoryNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/CategoryNames) | 以文本数组形式返回或设置指定坐标轴中所有分类的名称。可读/写 **Variant** 类型。 |
| [CategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/CategoryType) | 返回或设置分类轴类型。可读/写 **[XlCategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlCategoryType)** 。 |
| [Crosses](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Crosses) | 返回或设置指定坐标轴与其他坐标轴相交的点。可读/写 **Long** 类型。 |
| [CrossesAt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/CrossesAt) | 返回或设置数值轴中与分类坐标轴的交点。仅应用于数值轴。可读/写 **Double** 类型。 |
| [DisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/DisplayUnit) | 返回或设置数值轴的单位标签。可读/写 **[XlDisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayUnit)** 、 **xlCustom** 或 **xlNone** 常量。 |
| [DisplayUnitCustom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/DisplayUnitCustom) | 如果 **[DisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/DisplayUnit)** 属性的值为 **xlCustom** ，则该属性返回或设置显示的单位的值。可读/写 **Double** 类型。 |
| [DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/DisplayUnitLabel) | 返回指定坐标轴的 **[DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DisplayUnitLabel/obj)** 对象。如果 **[HasDisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/HasDisplayUnitLabel)** 属性设置为 **False** ，则返回 **null** 。只读。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [HasDisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/HasDisplayUnitLabel) | 如果由 **[DisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/DisplayUnit)** 或 **[DisplayUnitCustom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/DisplayUnitCustom)** 属性指定的标签显示在指定坐标轴上，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasMajorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/HasMajorGridlines) | 如果坐标轴有主要网格线，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasMinorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/HasMinorGridlines) | 如果坐标轴有次要网格线，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/HasTitle) | 如果坐标轴或图表有可见标题，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Height) | 以磅为单位返回对象的高度。只读 **Double** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Left) | 以磅为单位返回从对象左边缘至图表区左边缘之间的距离。只读 **Double** 类型。 |
| [LogBase](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/LogBase) | 在使用对数刻度时返回或设置对数的底。可读/写 **Double** 类型。 |
| [MajorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MajorGridlines) | 返回指定坐标轴的主要网格线。只读 **[Gridlines](#TODO)** 对象。 |
| [MajorTickMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MajorTickMark) | 返回或设置指定坐标轴的主刻度线类型。可读/写 **[XlTickMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickMark)** 。 |
| [MajorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MajorUnit) | 返回或设置数值轴的主要单位。可读/写 **Double** 类型。 |
| [MajorUnitIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MajorUnitIsAuto) | 如果 WPS 计算数值轴的主要单位，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MajorUnitScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MajorUnitScale) | 当 **[CategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/CategoryType)** 属性设置为 **xlTimeScale** 时，返回或设置分类轴的主要单位刻度值。可读/写 **[XlTimeUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTimeUnit)** 。 |
| [MaximumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MaximumScale) | 返回或设置数值轴上的最大值。可读/写 **Double** 类型。 |
| [MaximumScaleIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MaximumScaleIsAuto) | 如果 WPS文字 计算数值轴的最大值，则为 **True** 。可读/写 **Boolean** 类型。 |
| [MinimumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinimumScale) | 返回或设置数值轴上的最小值。可读/写 **Double** 类型。 |
| [MinimumScaleIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinimumScaleIsAuto) | 如果 WPS文字 计算数值轴的最小值，则为 **True** 。可读/写 **Boolean** 类型。 |
| [MinorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinorGridlines) | 返回指定坐标轴的次要网格线。只读 **[Gridlines](#TODO)** 对象。 |
| [MinorTickMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinorTickMark) | 返回或设置指定坐标轴的次要刻度线类型。可读/写 **[XlTickMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickMark)** 。 |
| [MinorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinorUnit) | 返回或设置数值轴上的次要单位。 **Double** 类型，可读写。 |
| [MinorUnitIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinorUnitIsAuto) | 如果 WPS文字 计算数值轴的次要刻度单位，则为 **True** 。可读/写 **Boolean** 类型。 |
| [MinorUnitScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinorUnitScale) | 当 **[CategoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/CategoryType)** 属性设置为 **xlTimeScale** 时，返回或设置分类轴的次要单位刻度值。可读/写 **[XlTimeUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTimeUnit)** 。 |
| [ReversePlotOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/ReversePlotOrder) | 如果 WPS文字 绘制数据点的顺序为从后往前，则为 **True** 。可读/写 **Boolean** 类型。 |
| [ScaleType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/ScaleType) | 返回或设置数值轴的刻度类型。可读/写 **[XlScaleType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlScaleType)** 。 |
| [TickLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickLabelPosition) | 说明指定坐标轴上刻度线标志的位置。可读/写 **[XlTickLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickLabelPosition)** 。 |
| [TickLabelSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickLabelSpacing) | 返回或设置刻度线标签之间的分类数或系列数。可读/写 **Long** 类型。 |
| [TickLabelSpacingIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickLabelSpacingIsAuto) | 返回或设置表示是否自动设置刻度标签间距的值。可读/写 **Boolean** 类型。 |
| [TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickLabels) | 返回指定坐标轴的刻度线标签。只读 **[TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/obj)** 对象。 |
| [TickMarkSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickMarkSpacing) | 返回或设置刻度线之间的分类数或系列数。可读/写 **Long** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Top) | 返回从对象的上边缘到图表区的顶部（在图表上）的距离（以磅为单位），只读 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/Width) | 以磅为单位返回对象的宽度。只读 **Double** 类型。 |