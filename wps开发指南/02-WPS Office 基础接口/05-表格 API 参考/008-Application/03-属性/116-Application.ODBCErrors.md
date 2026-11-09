# Application.ODBCErrors

返回一个 **[ODBCErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ODBCErrors)** 集合，该集合包含由最近的查询表或数据透视表操作生成的所有 ODBC 错误。只读。



## 语法

express.**ODBCErrors**

express   一个代表 **Application** 对象的变量。

## 类型

ODBCErrors

## 说明


如果同时有多个查询在运行，那么 **ODBCErrors** 集合包含从最后完成的查询开始的所有 ODBC 错误。



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
/*本示例显示ODBC错误的数量。*/
function test() {
    alert(`ODBC错误的数量：${Application.ODBCErrors.Count}`)
}
```
