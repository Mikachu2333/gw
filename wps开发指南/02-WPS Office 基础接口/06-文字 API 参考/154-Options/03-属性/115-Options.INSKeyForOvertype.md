# Options.INSKeyForOvertype

如果可以用 INS 键来打开和关闭“改写”，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**INSKeyForOvertype**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用 INS 键来打开和关闭“改写”。*/
function test() {
    Options.INSKeyForOvertype = true
}
```


```JavaScript
/*本示例判断如果启用 INS 键来打开和关闭“改写”，则通知用户。*/
function test() {
    if (Options.INSKeyForOvertype) {
        alert("启用 INS 键来打开和关闭“改写”")
    }
}
```
