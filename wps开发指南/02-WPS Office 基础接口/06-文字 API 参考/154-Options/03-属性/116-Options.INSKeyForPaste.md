# Options.INSKeyForPaste

如果可用 INS 键来粘贴“剪贴板”的内容，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**INSKeyForPaste**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用 INS 键来粘贴“剪贴板”的内容。*/
function test() {
    Options.INSKeyForPaste = true
}
```


```JavaScript
/*本示例显示是否启用 INS 键来粘贴“剪贴板”的内容。*/
function test() {
    alert(Options.INSKeyForPaste)
}
```
