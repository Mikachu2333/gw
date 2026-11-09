# Gridlines 对象

代表图表坐标轴的主要和次要网格线。

## 说明


网格线延伸图表坐标轴上的刻度线，以便更容易地分辨与数据标记相关联的数值。此对象不是集合。同时也没有代表单个网格线的对象；或者启用坐标轴上所有的网格线，或者将其全部禁用。

使用 **MajorGridlines** 属性可返回 **GridLines** 对象，该对象代表坐标轴的主要网格线。使用 **MinorGridlines** 属性可返回 **GridLines** 对象，该对象代表次要网格线。可以同时返回主要网格线和次要网格线。


## 示例


```JavaScript
/*本示例为活动文档中第一个图表的类别轴启用主网格线，然后将网格线的格式设置为虚线。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlCategory)
        axis.HasMajorGridlines = true
        axis.MajorGridlines.Border.LineStyle = xlDash
    }
}
```


```JavaScript
/*本示例删除第一个文档上第一个形状中图表的类别轴中的次要网格线。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    axis.MinorGridlines.Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Gridlines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Gridlines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Gridlines/member/Border) | 返回对象的边框。只读 **ChartBorder** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Gridlines/member/Format) | 返回行、填充和效果的对象的格式。只读的 **ChartFormat** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Gridlines/member/Name) | 返回的对象的名称。只读 **String** 。 |