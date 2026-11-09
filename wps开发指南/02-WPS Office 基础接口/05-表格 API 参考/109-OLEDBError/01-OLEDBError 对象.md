# OLEDBError 对象

代表由上一次 OLE DB 查询所返回的 OLE DB 错误。

## 说明


 **OLEDBError** 对象是 **[OLEDBErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBErrors/obj)** 集合的成员。如果指定的 OLE DB 查询运行时没有出现错误，则 **OLEDBErrors** 集合为空。集合中错误的索引次序与 OLE DB 提供程序生成它们时的次序相同。

使用 **[OLEDBErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ODBCErrors)** ( _index_ )（其中 _index_ 是 OLE DB 错误的索引号）可返回一个 **OLEDBError** 对象。


## 示例


```JavaScript
/*本示例显示最近的 OLEDB 查询返回的第一个错误的错误说明以及SqlState属性的值。*/
function test() {
    let error = Application.OLEDBErrors.Item(1)
    alert(`The following error occurred:${error.ErrorString} : ${error.SqlState}`)
}
```


```JavaScript
/*本示例将第一个 OLEDB 错误的字符串赋值给 A7 单元格。*/
function test() {
    Range("A7").Value2 = Application.OLEDBErrors.Item(1).ErrorString
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ErrorString](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBError/member/ErrorString) | 返回一个 **String** 值，它代表 OLEDB 错误字符串。 |
| [Number](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBError/member/Number) | 返回用于指定错误号的数值。该错误号对应于某个唯一的陷阱，而该陷阱又对应于最近一次 OLE DB 查询所产生的错误条件。 **Long** 类型，只读。 |
| [SqlState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBError/member/SqlState) | 返回 SQL 状态错误。 **String** 型，只读。 |
| [Stage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBError/member/Stage) | 返回一个数字值，此值指定最近一次 OLE DB 查询所产生的错误的阶段。 **Long** 类型，只读。 |