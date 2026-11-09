# HiLoLines 对象

代表图表组中的高低点连线。

## 说明


高低点连线连接图表组内每一分类中的最高数据点和最低数据点。只有二维折线图组可以有高低点连线。此对象不是集合。没有代表单个高低点连线的对象；或者启用图表组中所有数据点的高低点连线，或者将其全部禁用。

如果 **[HasHiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroup/member/HasHiLoLines)** 属性为 **False** ，则会禁用 **HiLoLines** 对象的大多数属性。

可以使用 **[HiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroup/member/HiLoLines)** 属性返回 **HiLoLines** 对象。


## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线设置为可见，并对其边框的线条样式进行设置。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartgroup = shape.Chart.ChartGroups(1)
        chartgroup.HasHiLoLines = true
        chartgroup.HiLoLines.Border.LineStyle = xlDashDot
    }
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线的名称为“高低点连线 1”，则删除该高低点连线。*/
function test() {
    let hiLoLines = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).HiLoLines
    if (hiLoLines.Name == "高低点连线 1") {
        hiLoLines.Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HiLoLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HiLoLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HiLoLines/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HiLoLines/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HiLoLines/member/Name) | 返回对象的名称。只读 **String** 类型。 |