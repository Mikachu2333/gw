# TickLabels 对象

代表图表坐标轴上刻度线的刻度线标志。

## 说明


此对象不是集合。没有代表单个刻度线标签的对象；必须将所有刻度线标签作为一个整体单位返回。

分类轴的刻度线标签文字来自图表中相应分类的名称。分类轴的默认刻度线标签文字表示该分类相对于该坐标轴最左端偏移量的数字。要更改分类轴刻度线标签间不带标签的刻度线数量，您必须更改分类轴的 **[TickLabelSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickLabelSpacing)** 属性。

数值轴刻度线标签文字的计算基于数值轴的 **[MajorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MajorUnit)** 、 **[MinimumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinimumScale)** 和 **[MaximumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MaximumScale)** 属性。要更改数值轴的刻度线标签文字，必须更改这些属性的值。

可以使用 **[TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickLabels)** 属性返回 **TickLabels** 对象。


## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的数值轴上刻度线标签的数字格式。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart == msoTrue) {
        inlineShape.Chart.Axes(xlValue).TickLabels.NumberFormat = "0.00"
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的类别轴的刻度线标签的字号和字体颜色。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.Font.Size = 10
    tickLabels.Font.Color = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Depth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/Depth) | 返回分类轴刻度标签的级别数。只读 **Long** 类型。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/Font) | 返回指定对象的字体。只读 **[ChartFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/Format) | 返回对象的线条、填充和效果格式。只读 **[Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [MultiLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/MultiLevel) | 返回或设置一个表示轴是否为多级轴的值。可读/写 **Boolean** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/NumberFormat) | 返回或设置对象的格式代码。可读/写 **String** 类型。 |
| [NumberFormatLinked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/NumberFormatLinked) | 如果数字格式链接到单元格，则为 **True** （以便单元格中的数字格式更改时，标签中的数字格式也会发生变化）。可读/写 **Boolean** 类型。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/NumberFormatLocal) | 以用户语言返回或设置对象的格式代码字符串。可读/写 **Variant** 类型。 |
| [Offset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/Offset) | 返回或设置各级别标签之间的距离以及第一级标签与坐标轴之间的距离。可读/写 **Long** 类型。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/member/Orientation) | 返回或设置文本方向。可读/写 **Long** 类型。 |