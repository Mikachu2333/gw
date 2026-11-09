# LegendEntry 对象

代表图表图例中的图例项。

## 说明


 **LegendEntry** 对象是 **[LegendEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntries/obj)** 集合的成员。 **LegendEntries** 集合包含图例中的所有 **LegendEntry** 对象。

每个图例项都有两部分组成：

* 图例项的文本，它是与图例项关联的系列或趋势线的名称。
* 图例项的标记，它在视觉上将图例项与它在图表中关联的系列或趋势线链接起来。

图例项标记与其关联的系列或趋势线的格式属性包含在 **[LegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/obj)** 对象中。

不能修改图例项的文字。 **LegendEntry** 对象支持字体格式，且可被删除。图例项不支持图案格式。图例项的位置和尺寸是固定的。

没有返回与图例项对应的系列或趋势线的直接方法。

在删除图例项之后，唯一的恢复方法是：将图表的 **[HasLegend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/HasLegend)** 属性设置为 **False** ，然后重新设置为 **True** ，以便删除并重新创建包含这些图例项的图例。

可以使用 **[LegendEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/member/LegendEntries)** (_index_)（其中 _index_ 是图例项的索引号）返回单个 **LegendEntry** 对象。不能按名称返回图例项。

图例项的索引号代表图例项在图例中的位置。`LegendEntries(1)` 位于图例的顶部；`LegendEntries(LegendEntries.Count)` 位于图例的底部。


## 示例


```JavaScript
/*本示例更改活动文档中第一个图表上位于图例顶部的图例项（这通常是第一个系列的图例）的文字字体。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Legend.LegendEntries().Item(1).Font.Italic = true
    }
}
```


```JavaScript
/*本示例删除第一个文档第一个形状中图表上位于图例顶部的图例项（这通常是第一个系列的图例）。*/
function test() {
    Documents.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries().Item(1).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/Font) | 返回指定对象的字体。只读 **[ChartFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/Height) | 以磅为单位返回对象的高度。只读 **Double** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/Left) | 以磅为单位返回从对象左边缘至图表区左边缘之间的距离。只读 **Double** 类型。 |
| [LegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/LegendKey) | 返回与图例项相关联的图例项标示。只读 **[LegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendKey/obj)** 对象。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/Top) | 以磅为单位返回从对象上边缘至图表区顶端（在图表上）的距离。只读 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/member/Width) | 以磅为单位返回对象的宽度。只读 **Double** 类型。 |