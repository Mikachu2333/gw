# DataTable 对象

代表一张图表模拟运算表。

## 说明


使用 **DataTable** 属性可返回 **DataTable** 对象。


## 示例


```JavaScript
/*此示例向嵌入式图表中添加带有外边框的模拟运算表。*/
function test() {
    let chart = Application.Worksheets.Item(1).ChartObjects(1).Chart
    chart.HasDataTable = true
    chart.DataTable.HasBorderOutline = true
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中图表的模拟运算表中的边框和字体设置为蓝色。*/
function test() {
    let datatable = Application.Charts.Item("Chart1").ChartObjects(1).Chart.DataTable
    datatable.Border.ColorIndex = 5
    datatable.Font.ColorIndex = 5
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/Font) | 返回一个 **Font** 对象，它代表指定对象的字体。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [HasBorderHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/HasBorderHorizontal) | 如果图表模拟运算表具有水平单元格边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HasBorderOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/HasBorderOutline) | 如果图表模拟运算表具有外部边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HasBorderVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/HasBorderVertical) | 如果图表模拟运算表具有垂直单元格边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/Parent) | 返回指定对象的父对象。只读。 |
| [ShowLegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/member/ShowLegendKey) | 如果数据标签图例项标示可见，则为 **True** 。 **Boolean** 类型，可读写。 |