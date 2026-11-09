# DropLines 对象

代表图表组中的垂直线。

## 说明


垂直线将图表中的数据点与 x 轴连接起来。只有折线图和面积图组可以有垂直线。此对象不是集合。没有代表单个垂直线的对象；或者打开图表组中所有数据点的垂直线，或者将其全部关闭。

如果 **HasDropLines** 属性为 **False** ， **DropLines** 对象的绝大部分属性将被禁用。

使用 **DropLines** 属性可返回 **DropLines** 对象。


## 示例


```JavaScript
/*本示例打开嵌入的第一个图表的第一个图表组的垂直线，并将垂直线的颜色设置为红色。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Activate()
    ActiveChart.ChartGroups(1).HasDropLines = true
    ActiveChart.ChartGroups(1).DropLines.Border.ColorIndex = 3
}
```


```JavaScript
/*本示例选中图表工作表 Chart1 中图表的第一个图表组的垂直线，并将该垂直线的阴影设置为不可见。*/
function test() {
    let droplines = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).DropLines
    droplines.Select()
    Selection.Format.Shadow.Visible = false
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/member/Parent) | 返回指定对象的父对象。只读。 |