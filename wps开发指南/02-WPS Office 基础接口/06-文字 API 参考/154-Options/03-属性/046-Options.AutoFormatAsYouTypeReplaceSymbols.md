# Options.AutoFormatAsYouTypeReplaceSymbols

如果键入的两个连续的连字符（--）将替换为短划线（–）或长划线（—），则该属性值为 **True** 。 **Boolean** 类型，可读写。如果键入连字符时带有前导和尾部空格，则 WPS 将连字符替换为短划线。如果没有尾部空格，则连字符替换为长划线。



## 语法

express.**AutoFormatAsYouTypeReplaceSymbols**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用在键入时将连字符替换为符号的功能。*/
function test() {
    Options.AutoFormatAsYouTypeReplaceSymbols = true
}
```


```JavaScript
/*本示例显示是否启用将键入的连字符替换为符号的功能。*/
function test() {
    alert(Options.AutoFormatAsYouTypeReplaceSymbols)
}
```
