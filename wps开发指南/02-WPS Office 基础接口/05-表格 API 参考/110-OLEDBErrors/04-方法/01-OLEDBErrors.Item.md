# OLEDBErrors.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **OLEDBErrors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

包含在集合中的一个 **[OLEDBError](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBError/obj)** 对象。

## 示例


```JavaScript
/*本示例显示最近的 OLEDB 查询返回的第一个错误的错误说明以及SqlState属性的值。*/
function test() {
    let error = Application.OLEDBErrors.Item(1)
    alert(`The following error occurred:${error.ErrorString} : ${error.SqlState}`)
}
```


```JavaScript
/*本示例显示第一个 OLEDB 错误的字符串。*/
function test() {
    alert(`OLEDB 错误的字符串：${Application.OLEDBErrors.Item(1).ErrorString}`)
}
```
