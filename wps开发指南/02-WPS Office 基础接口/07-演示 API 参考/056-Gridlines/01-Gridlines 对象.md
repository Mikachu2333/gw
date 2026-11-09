# Gridlines 对象

代表图表坐标轴的主要和次要网格线。

## 说明


网格线延伸图表坐标轴上的刻度线，以便更容易地分辨与数据标记相关联的数值。此对象不是集合。同时也没有代表单个网格线的对象；或者启用坐标轴上所有的网格线，或者将其全部禁用。

使用 **[MajorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MajorGridlines)** 属性可返回 **GridLines** 对象，该对象代表坐标轴的主要网格线。使用 **[MinorGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/MinorGridlines)** 属性可返回 **GridLines** 对象，该对象代表次要网格线。可以同时返回主要网格线和次要网格线。


## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的类别轴启用主要网格线，然后将该网格线的样式设置为虚线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlCategory)
        axis.HasMajorGridlines = true
        axis.MajorGridlines.Border.LineStyle = xlDash
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的类别轴的次要网格线的虚线样式是否为msoLineSolid。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.MinorGridlines.Format.Line.DashStyle == msoLineSolid)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Gridlines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Gridlines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Gridlines/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Gridlines/member/Format) | 返回对象的线条，填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 对象。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Gridlines/member/Name) | 返回的对象的名称。只读 **String** 。 |