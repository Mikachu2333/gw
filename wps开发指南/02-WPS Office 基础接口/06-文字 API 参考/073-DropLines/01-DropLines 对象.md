# DropLines 对象

代表图表组中的垂直线。

## 说明


垂直线将图表中的数据点与 x 轴连接起来。只有折线图和面积图图表组可以有垂直线。此对象不是集合。没有代表单个垂直线的对象；您可以对图表组中的所有数据点应用垂直线，也可以禁用它们。

如果 **[HasDropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HasDropLines)** 属性为 **False** ，则会禁用 **DropLines** 对象的大多数属性。

可以使用 **[DropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/DropLines)** 属性返回 **DropLines** 对象。


## 示例


```JavaScript
/*本示例将活动文档第一个图表的第一个图表组的垂直线设置为可见，并将该垂直线的边框的线条样式设置为虚线。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasDropLines = true
        chartGroup.DropLines.Border.LineStyle = xlDash
    }
}
```


```JavaScript
/*本示例判断如果活动文档上第一个形状中图表的第一个图表组的垂直线的边框粗细为细线边框，则删除该垂直线。*/
function test() {
    let dropLines = ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).DropLines
    if (dropLines.Border.Weight == xlHairline) {
        dropLines.Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropLines/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropLines/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropLines/member/Name) | 返回对象的名称。只读 **String** 类型。 |