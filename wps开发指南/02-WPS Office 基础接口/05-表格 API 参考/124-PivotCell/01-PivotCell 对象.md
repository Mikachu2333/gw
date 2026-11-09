# PivotCell 对象

代表数据透视表中的一个单元格。

## 说明


使用 **Range** 集合的 **PivotCell** 属性可返回一个 **PivotCell** 对象。

返回 **PivotCell** 对象后，可以使用 **ColumnItems** 或 **RowItems** 属性来确定 **PivotItems** 集合，对应于代表所选编号的列轴或行轴上的项目。

返回了 **PivotCell** 对象后，可以使用 **PivotCellType** 属性来确定某个特定区域是什么单元格类型。


## 示例


```JavaScript
/*本示例确定数据透视表中的单元格 J6 是否是一个数据项，并通知用户。本示例假定数据透视表位于活动工作表上。如果单元格 J6 不在数据透视表中，则本示例处理运行错误。*/
function test() {
    try {
        // Determine if cell J6 is a data item in the PivotTable.
        if (Application.Range("J6").PivotCell.PivotCellType == xlPivotCellValue) {
            alert("The cell at J6 is a data item.")
        } else {
            alert("The cell at J6 is not a data item.")
        }
    }
    catch (exception) {
        alert("The chosen cell is not in a PivotTable.")
    }
}
```


```JavaScript
/*此示例确定单元格 L13 的数据项所在的列字段。然后判断列字段标题是否与“name”相匹配，并通知用户。此示例假定数据透视表位于活动工作表上，并且工作表的 L 列包含数据透视表的列字段。*/
function test() {
    // Determine if there is a match between the item and column field.
    if (Application.Range("L13").PivotCell.ColumnItems.Item(1).Parent.Name == "name") {
        alert("Item in L13 is a member of the 'name' column field.")
    } else {
        alert("Item in L13 is not a member of the 'name' column field.")
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [ColumnItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/ColumnItems) | 返回一个 **PivotItemList** 集合，该集合对应于表示选定区域的列轴上的项目。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [CustomSubtotalFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/CustomSubtotalFunction) | 返回 **PivotCell** 对象的自定义分类汇总函数字段的设置。 **XlConsolidationFunction** 类型，只读。 |
| [DataField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/DataField) | 返回一个 **PivotField** 对象，该对象与所选数据字段相对应。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/Parent) | 返回指定对象的父对象。只读。 |
| [PivotCellType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/PivotCellType) | 返回一个 **XlPivotCellType** 常量，该常量标识单元格所对应的数据透视表实体。只读。 |
| [PivotColumnLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/PivotColumnLine) | 在列上返回特定 **PivotCell** 对象的 **PivotLine** 。只读 **PivotLine** 类型。 |
| [PivotField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/PivotField) | 返回一个 **PivotField** 对象，它代表指定区域左上角所在的数据透视表字段。 |
| [PivotItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/PivotItem) | 返回一个 **PivotItem** 对象，它代表指定区域左上角所在的数据透视表项。 |
| [PivotRowLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/PivotRowLine) | 在行上返回特定 **PivotCell** 对象的 PivotLine。只读 **PivotLine** 类型。 |
| [PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/PivotTable) | 返回一个 **PivotTable** 对象，它代表与 PivotCell 相关联的数据透视表。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/Range) | 返回一个 **Range** 对象，它代表指定的 PivotCell 所应用的区域。 |
| [RowItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/member/RowItems) | 返回一个 **PivotItemList** 集合，该集合对应于分类轴上表示选定单元格的项目。 |