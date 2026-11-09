# UpBars 对象

代表图表组中的涨柱线。

## 说明


涨柱线将图表组中第一个系列的数据点与最后一个系列中相应的有较大值的数据点连接起来（从第一个系列向上生长）。只有至少包含两个系列的二维折线图组才能有涨柱线。此对象不是集合。没有代表单个涨柱线的对象；或者启用图表组中所有数据点的涨柱线，或者将其全部禁用。

如果 **[HasUpDownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroup/member/HasUpDownBars)** 属性为 **False** ，则 **UpBars** 对象的大多数属性都将被禁用。

使用 **[UpBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroup/member/UpBars)** 属性可返回 **UpBars** 对象。


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
/*本示例判断如果活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的涨柱线的名称为“涨柱线 1”，则将该涨柱线的线条的粗细设置为 3 磅。*/
function test() {
    let upBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).UpBars
    if (upBars.Name == "涨柱线 1") {
        upBars.Format.Line.Weight = 3
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/UpBars/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/UpBars/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/UpBars/member/Fill) | 返回包含图表元素填充格式属性的父图表元素的 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/obj)** 对象。只读。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/UpBars/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/UpBars/member/Name) | 返回对象的名称。只读 **String** 类型。 |