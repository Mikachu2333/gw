# PivotLayout 对象

代表数据透视图报表中字段的位置。

## 说明


使用 **PivotLayout** 属性可返回一个 **PivotLayout** 对象。


## 示例


```JavaScript
/*本示例创建在图表工作表 Chart1 上数据透视图报表中所使用的数据透视表字段名称的列表。*/
function test() {
    let newSheet = Worksheets.Add()
    let intRow = 1
    for (let i = 1; i <= Charts.Item("Chart1").PivotLayout.PivotFields().Count; i++) {
        newSheet.Cells.Item(intRow, 1).Value2 = Charts.Item("Chart1").PivotLayout.PivotFields(i).Caption
        intRow++
    }
}
```


```JavaScript
/*此示例显示工作表 Sheet1 上第一张数据透视图对应的数据透视表的第三个字段的名称。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").ChartObjects(1).Chart.PivotLayout.PivotTable
    alert(pvtTable.PivotFields(3).Name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLayout/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLayout/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLayout/member/Parent) | 返回指定对象的父对象。只读。 |
| [PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLayout/member/PivotTable) | 返回一个 **PivotTable** 对象，它代表与数据透视图相关联的数据透视表。 |