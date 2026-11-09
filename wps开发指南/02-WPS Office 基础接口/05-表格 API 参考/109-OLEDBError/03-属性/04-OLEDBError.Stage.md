# OLEDBError.Stage

返回一个数字值，此值指定最近一次 OLE DB 查询所产生的错误的阶段。 **Long** 类型，只读。



## 语法

express.**Stage**

express   一个代表 **OLEDBError** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示由最近一次 OLEDB 查询所返回的错误号、阶段以及其他错误信息。*/
function test() {
    let error = Application.OLEDBErrors.Item(1)
    alert(`The following error occurred: ${error.Number},${error.Stage},${error.ErrorString}:${error.SqlState}`)
}
```


```JavaScript
/*本示例显示第一个 OLEDB 错误产生的阶段。*/
function test() {
    alert(Application.OLEDBErrors.Item(1).Stage)
}
```
