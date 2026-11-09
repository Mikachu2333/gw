# DataTable 对象

代表一张图表模拟运算表。

## 说明


使用 **[DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/DataTable)** 属性可返回 **DataTable** 对象。


## 示例


```JavaScript
/*本示例向第一张嵌入图表中添加带外边框的模拟运算表。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.HasDataTable = true
        inlineShape.Chart.DataTable.HasBorderOutline = true
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的模拟运算表的前景色。*/
function test() {
    let datatable = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable
    datatable.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/Border) | 返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/Font) | 返回指定对象的字体。只读 **[ChartFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/obj)** 对象。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [HasBorderHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/HasBorderHorizontal) | 如果图表模拟运算表具有水平单元格边框，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasBorderOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/HasBorderOutline) | 如果图表模拟运算表具有外部边框，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasBorderVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/HasBorderVertical) | 如果图表模拟运算表具有垂直单元格边框，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [ShowLegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/member/ShowLegendKey) | 如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。 |