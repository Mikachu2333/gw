# OLEDBErrors 对象

 **[OLEDBError](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBError/obj)** 对象的集合。

## 说明


每一个 **OLEDBError** 对象都代表最近的 OLE DB 查询返回的一个错误。如果指定的 OLE DB 查询运行时没有出现错误，则 **OLEDBErrors** 集合为空。集合中错误的索引次序与 OLE DB 提供程序生成它们时的次序相同。您不能给该集合添加成员。

使用 **[OLEDBErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/OLEDBErrors)** 属性可返回 **OLEDBErrors** 集合。


## 示例


```JavaScript
/*本示例显示集合中每一个 OLEDB 错误的错误说明以及SqlState属性的值。*/
function test() {
    let errors = Application.OLEDBErrors
    for (let i = 1; i <= errors.Count; i++) {
        alert(`The following error occurred:${errors.Item(i).ErrorString} : ${errors.Item(i).SqlState}`)
    }
}
```
使用 **OLEDBErrors** (_index_)（其中 _index_ 是 OLE DB 错误的索引号）可返回一个 **OLEDBError** 对象。



```JavaScript
/*本示例显示最近的 OLE DB 查询返回的第一个错误的错误说明以及SqlState属性的值。*/
function test() {
    let error = Application.OLEDBErrors.Item(1)
    alert(`The following error occurred:${error.ErrorString} : ${error.SqlState}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBErrors/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBErrors/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |