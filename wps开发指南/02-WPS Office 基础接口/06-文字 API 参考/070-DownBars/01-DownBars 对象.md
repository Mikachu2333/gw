# DownBars 对象

代表图表组中的跌柱线。

## 说明


跌柱线将图表组中第一个系列的数据点与最后一个系列中的较小值连接起来（从第一个系列向下延伸的线）。只有至少包含两个系列的二维折线图组才能有跌柱线。此对象不是集合。没有代表单个跌柱线的对象；您可以对图表组中所有数据点应用涨跌柱线，也可以禁用它们。

如果 **[HasUpDownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HasUpDownBars)** 属性为 **False** ，则 **DownBars** 对象的大多数属性都将被禁用。

可以使用 **[DownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/DownBars)** 属性返回 **DownBars** 对象。


## 示例


```JavaScript
/*本示例为活动文档中第一个图表的第一个图表组启用涨跌柱线。然后将涨柱线的前景色设置为蓝色，并将跌柱线的前景色设置为红色。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasUpDownBars = true
        chartGroup.UpBars.Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
        chartGroup.DownBars.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例判断如果活动文档中第一个内嵌图表的第一个图表组的跌柱线的名称为“跌柱线 1”，则删除该图表组的涨跌柱线。*/
function test() {
    let downbars = Application.ActiveDocument.InlineShapes(1).Chart.ChartGroups(1).DownBars
    if (downbars.Name == "跌柱线 1") {
        downbars.Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DownBars/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DownBars/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DownBars/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DownBars/member/Name) | 返回对象的名称。只读 **String** 类型。 |