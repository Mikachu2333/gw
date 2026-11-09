# SparklineGroup 对象

代表一组迷你图。

## 说明


 **SparklineGroup** 对象可包含多个迷你图以及该迷你图组的属性设置，例如颜色和轴设置。每个迷你图都由一个 **[Sparkline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/obj)** 对象表示。

使用 **[Modify](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Modify)** 方法可在迷你图组中添加或删除迷你图。使用 **[ModifyLocation](#TODO)** 方法可更改迷你图的位置，使用 **[ModifySourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/ModifySourceData)** 方法则可以更改源数据所在的区域。


## 示例


```JavaScript
/*本示例会在 A1:A4 处创建一组绑定到 Sheet1!B1:E4 区域中的源数据的列迷你图，并更改系列颜色以便用红色显示各个列。*/
function test() {
    let sparklineGroup = Range("A1:A4").SparklineGroups.Add(xlSparkColumn, "Sheet1!B1:E4")
    sparklineGroup.SeriesColor.Color = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动工作表上单元格 H1 中第一个迷你图组中迷你图的高点是否可见。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("H1").SparklineGroups.Item(1)
    alert(sparklineGroup.Points.Highpoint.Visible)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Delete) | 删除迷你图组。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Item) | 返回一个 **[Sparkline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sparkline/obj)** 对象。只读 |
| [Modify](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Modify) | 设置迷你图组的位置和源数据。 |
| [ModifyDateRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/ModifyDateRange) | 设置迷你图组的日期范围。 |
| [ModifySourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/ModifySourceData) | 设置代表迷你图组源数据的区域。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Axes) | 返回关联的 **[SparkAxes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkAxes/obj)** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Count) | 返回迷你图组中的迷你图数。只读。 |
| [DateRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/DateRange) | 获取或设置迷你图组的日期范围。可读/写。 |
| [DisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/DisplayBlanksAs) | 获取或设置空白单元格在迷你图组中的绘制方式。可以是 **[XlDisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayBlanksAs)** 常量之一。可读/写。 |
| [DisplayHidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/DisplayHidden) | 指定是否在迷你图组中绘制隐藏单元格。可读/写。 |
| [LineWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/LineWeight) | 获取或设置迷你图组中迷你图的粗细。可读/写。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Location) | 获取或设置代表迷你图组的位置的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。可读/写。 |
| [PlotBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/PlotBy) | 返回或设置当迷你图所基于的数据处于方形区域中时，如何绘制迷你图。可读/写。 |
| [Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Points) | 返回迷你图组的关联 **[SparkPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkPoints/obj)** 对象。只读。 |
| [SeriesColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/SeriesColor) | 返回一个代表迷你图组的主要系列颜色的 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象。只读。 |
| [SourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/SourceData) | 返回或设置包含迷你图组的源数据的区域。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Type) | 获取或设置组的迷你图的类型。可读/写。 |