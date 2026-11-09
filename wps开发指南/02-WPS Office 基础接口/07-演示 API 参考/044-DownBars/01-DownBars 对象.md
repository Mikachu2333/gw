# DownBars 对象

代表图表组中的跌柱线。

## 说明


跌柱线将图表组中第一个系列的数据点与最后一个系列中相应的有较小值的数据点连接起来（从第一个系列向下生长）。只有至少包含两个系列的二维折线组才能有跌柱线。此对象不是集合。没有代表单个跌柱线的对象；或者启用图表组中所有数据点的涨跌柱线，或者将其禁用。

如果 **[HasUpDownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroup/member/HasUpDownBars)** 属性为 **False** ，则 **DownBars** 对象的大多数属性都将被禁用。

使用 **[DownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroup/member/DownBars)** 属性可返回 **DownBars** 对象。


## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的第一个图表组启用涨跌柱线。然后将涨柱线的前景色设置为蓝色，并将跌柱线的前景色设置为红色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartGroup = shape.Chart.ChartGroups(1)
        chartGroup.HasUpDownBars = true
        chartGroup.UpBars.Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
        chartGroup.DownBars.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片中第一个图表的第一个图表组启用涨跌柱线，则删除该涨跌柱线。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    if (chartGroup.HasUpDownBars) {
        chartGroup.DownBars.Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DownBars/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DownBars/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DownBars/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DownBars/member/Name) | 返回对象的名称。只读 **String** 类型。 |