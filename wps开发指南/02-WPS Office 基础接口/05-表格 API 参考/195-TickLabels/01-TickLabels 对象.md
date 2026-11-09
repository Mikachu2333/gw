# TickLabels 对象

代表图表坐标轴上刻度线的刻度线标志。

## 说明


此对象不是集合。没有代表单个刻度线标志的对象；您必须将所有刻度线标志作为一个单位返回。

分类轴的刻度线标签文字来自图表中相应分类的名称。分类轴的默认刻度线标签文字表示该分类相对于该坐标轴最左端偏移量的数字。要更改分类轴刻度线标签间不带标签的刻度线数量，您必须更改分类轴的 **[TickLabelSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/TickLabelSpacing)** 属性。

数值轴的刻度线标志文字的计算，是基于数值轴的 **[MajorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MajorUnit)** 、 **[MinimumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinimumScale)** 和 **[MaximumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MaximumScale)** 属性。要更改数值的轴刻度线标签文本，您必须更改这些属性的值。

使用 **[TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/TickLabels)** 属性可返回 **TickLabels** 对象。


## 示例


```JavaScript
/*下例设置 Sheet1 上嵌入式图表一中数值轴上刻度线标志的数字格式。*/
function test() {
    Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).TickLabels.NumberFormat = "0.00"
}
```


```JavaScript
/*以下示例删除 Chart1 上分类轴的刻度线标志。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Depth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/Depth) | 返回一个 **Long** 值，它代表分类轴刻度线标签的级别数。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/Font) | 返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，它代表指定对象的字体。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/Format) | 返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象。只读。 |
| [MultiLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/MultiLevel) | 设置轴是否为多级。可读/写 **Boolean** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/NumberFormat) | 返回或设置一个 **String** 值，它代表对象的格式代码。 |
| [NumberFormatLinked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/NumberFormatLinked) | 如果指定数字格式指向单元格（以便当单元格的格式更改时数据标签的格式也作相应的改动），则为 **True** 。 **Boolean** 类型，可读写。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/NumberFormatLocal) | 以采用用户语言字符串的形式返回或设置一个 **Variant** 值，它代表对象的格式代码。 |
| [Offset](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/Offset) | 返回或设置一个 **Long** 值，它代表各级别标签之间的距离以及第一级标签与坐标轴之间的距离。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/member/Orientation) | 返回或设置一个 **Long** 值，它代表文本方向。 |