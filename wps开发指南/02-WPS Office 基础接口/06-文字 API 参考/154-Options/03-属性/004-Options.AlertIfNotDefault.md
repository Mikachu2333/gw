# Options.AlertIfNotDefault

如果 WPS 不是用于查看和编辑文档的默认程序，则该属性值为 **True** 。 **Boolean** 类型， 可读写。



## 语法

express.**AlertIfNotDefault**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为不是用于查看和编辑文档的默认程序。*/
function test() {
    Options.AlertIfNotDefault = true
}
```


```JavaScript
/*本示例判断 WPS 是否用于查看和编辑文档的默认程序，并通知用户。*/
function test() {
    if (!Application.Options.AlertIfNotDefault) {
        alert("WPS 是用于查看和编辑文档的默认程序")
    } else {
        alert("WPS 不是用于查看和编辑文档的默认程序")
    }
}
```
