# Options.AutoFormatAsYouTypeInsertOvers

如果为 **True** ，则当用户输入“记”或“案”时，WPS 将自动插入“以上”。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeInsertOvers**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在用户输入“记”或“案”时自动插入“以上”。*/
function test() {
    Options.AutoFormatAsYouTypeInsertOvers = true
}
```


```JavaScript
/*本示例判断如果 WPS 在用户输入“记”或“案”时自动插入“以上”，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeInsertOvers) {
        alert("用户输入“记”或“案”时自动插入“以上”。")
    }
}
```
