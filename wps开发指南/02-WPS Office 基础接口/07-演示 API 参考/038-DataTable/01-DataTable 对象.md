# DataTable 对象

代表一张图表模拟运算表。

## 说明


使用 **[DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/DataTable)** 属性可返回 **DataTable** 对象。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片的第一张图表添加带外边框的模拟运算表。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.HasDataTable = true
        shape.Chart.DataTable.HasBorderOutline = true
    }
}
```


```JavaScript
/*本示例向第一个演示文稿的第一张幻灯片的第一张图表添加模拟运算表，并设置模拟运算表的前景色。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.HasDataTable = true
        shape.Chart.DataTable.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/Font) | 返回指定对象的字体。只读 **[ChartFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFont/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [HasBorderHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/HasBorderHorizontal) | 如果图表模拟运算表具有水平单元格边框，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasBorderOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/HasBorderOutline) | 如果图表模拟运算表具有外部边框，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasBorderVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/HasBorderVertical) | 如果图表模拟运算表具有垂直单元格边框，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [ShowLegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/member/ShowLegendKey) | 如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。 |