# Protection 对象

代表工作表可使用的各种保护选项类型。

## 说明


使用 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象的 **[Protection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protection)** 属性可返回一个 **Protection** 对象。

返回一个 **Protection** 对象后，就可用该对象的下列属性来设置或返回保护选项。

* [ **AllowDeletingColumns** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowDeletingColumns)
* [ **AllowDeletingRows** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowDeletingRows)
* [ **AllowFiltering** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowFiltering)
* [ **AllowFormattingCells** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowFormattingCells)
* [ **AllowFormattingColumns** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowFormattingColumns)
* [ **AllowFormattingRows** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowFormattingRows)
* [ **AllowInsertingColumns** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowInsertingColumns)
* [ **AllowInsertingHyperlinks** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowInsertingHyperlinks)
* [ **AllowInsertingRows** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowInsertingRows)
* [ **AllowSorting** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowSorting)
* [ **AllowUsingPivotTables** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowUsingPivotTables)


## 示例


```JavaScript
/*下例通过在最上面的行中放三个成员并保留该工作表说明了如何使用 Protection 对象的 AllowInsertingColumns 属性。然后，此示例检查允许插入列的保护设置是否为 false ，并在必要时将其设置为 true。最后，通知用户插入一个列。*/
function test() {
    Range("A1").Formula = "1"
    Range("B1").Formula = "3"
    Range("C1").Formula = "4"
    ActiveSheet.Protect()
    // Check the protection setting of the worksheet and act accordingly.
    if (Application.ActiveSheet.Protection.AllowInsertingColumns == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, true)
        alert("Insert a column between 1 and 3")
    } else {
        alert("Insert a column between 1 and 3")
    }
}
```


```JavaScript
/*本示例显示是否允许在受保护的第二张工作表上插入列。*/
function test() {
    alert(Worksheets.Item(2).Protection.AllowInsertingColumns)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowDeletingColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowDeletingColumns) | 如果允许删除受保护工作表上的列，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowDeletingRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowDeletingRows) | 如果允许删除受保护工作表上的行，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowEditRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowEditRanges) | 返回 **AllowEditRanges** 对象。 |
| [AllowFiltering](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowFiltering) | 如果允许用户使用工作表受保护之前设置的“自动筛选”，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowFormattingCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowFormattingCells) | 如果允许对受保护的工作表上的单元格进行格式设置，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowFormattingColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowFormattingColumns) | 如果允许对受保护的工作表上的列进行格式设置，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowFormattingRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowFormattingRows) | 如果允许对受保护的工作表上的行进行格式设置，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowInsertingColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowInsertingColumns) | 如果允许在受保护的工作表上插入列，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowInsertingHyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowInsertingHyperlinks) | 如果允许在受保护的工作表上插入超链接，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowInsertingRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowInsertingRows) | 如果允许用户在受保护的工作表上插入行，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowSorting](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowSorting) | 如果允许在受保护的工作表上使用排序选项，则返回 **True** 。 **Boolean** 类型，只读。 |
| [AllowUsingPivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowUsingPivotTables) | 如果允许用户在受保护的工作表上处理数据透视表，则返回 **True** 。 **Boolean** 类型，只读。 |