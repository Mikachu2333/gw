# Application.OLEDBErrors

返回一个 **[OLEDBErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBErrors/obj)** 集合，该集合表示最近一次 OLE DB 查询返回的错误信息。只读。



## 语法

express.**OLEDBErrors**

express   一个代表 **Application** 对象的变量。

## 类型

OLEDBErrors

## 示例


```JavaScript
/*本示例显示最近的 OLEDB 查询返回的第一个错误的错误说明以及SqlState属性的值。*/
function test() {
    let error = Application.OLEDBErrors.Item(1)
    alert(`The following error occurred:${error.ErrorString} : ${error.SqlState}`)
}
```


```JavaScript
/*本示例显示 OLEDB 错误的数量。*/
function test() {
    alert(Application.OLEDBErrors.Count)
}
```
