# ODBCErrors 对象

 **ODBCError** 对象的集合。

## 说明


每一个 **ODBCError** 对象都代表一个由最近的 ODBC 查询返回的错误。如果指定的 ODBC 查询运行时没有出现错误，则 **ODBCErrors** 集合为空。集合中错误的索引次序与 ODBC 数据源生成它们时的次序相同。您不能给该集合添加成员。

使用 **Application** 对象的 **[ODBCErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ODBCErrors)** 属性可返回 **ODBCErrors** 集合。


## 示例


```JavaScript
/*本示例刷新查询表一，并显示产生的所有 ODBC 错误。*/
function test() {
    let table = Worksheets.Item(1).QueryTables(1)
    table.Refresh()
    let errs = Application.ODBCErrors
    if (errs.Count > 0) {
        let range = table.Destination.Cells.Item(1)
        range.Value2 = "The following errors occurred:"
        for (let i = 1; i <= errs.Count; i++) {
            range.Offset(i, 0).Value2 = errs.Item(i).ErrorString
            range.Offset(i, 1).Value2 = errs.Item(i).SqlState
        }
    } else {
        alert("Query complete: all records returned.")
    }

}
```


```JavaScript
/*本示例显示第一个 ODBC 错误的 SQL 状态错误。*/
function test() {
    let error = Application.ODBCErrors.Item(1)
    alert(error.SqlState)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCErrors/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCErrors/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCErrors/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCErrors/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCErrors/member/Parent) | 返回指定对象的父对象。只读。 |