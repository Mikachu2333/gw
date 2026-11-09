# PivotTable.TableRange2

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包括整个数据透视表（含页字段）的区域。只读。



## 语法

express.**TableRange2**

express   一个代表 **PivotTable** 对象的变量。

## 类型

Range

## 说明


 **[TableRange1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/TableRange1)** 属性不包括页字段。



## 示例


```JavaScript
/*本示例选定整个数据透视表，包括页字段。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    Range("F3").PivotTable.TableRange2.Select()
}
```


```JavaScript
/*本示例显示数据透视表的地址，包括页字段。*/
function test() {
    alert(ActiveSheet.PivotTables(1).TableRange2.Address())
}
```
