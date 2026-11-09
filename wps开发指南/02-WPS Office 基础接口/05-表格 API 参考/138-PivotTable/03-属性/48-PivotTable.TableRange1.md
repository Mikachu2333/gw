# PivotTable.TableRange1

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包括整个数据透视表但不包括页字段的区域。只读。



## 语法

express.**TableRange1**

express   一个代表 **PivotTable** 对象的变量。

## 类型

Range

## 说明


 **[TableRange2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/TableRange2)** 属性包括页字段。



## 示例


```JavaScript
/*本示例选定整个数据透视表，但页字段除外。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    Range("F3").PivotTable.TableRange1.Select()
}
```


```JavaScript
/*本示例显示数据透视表的地址，不包括页字段*/
function test() {
    alert(ActiveSheet.PivotTables(1).TableRange1.Address())
}
```
