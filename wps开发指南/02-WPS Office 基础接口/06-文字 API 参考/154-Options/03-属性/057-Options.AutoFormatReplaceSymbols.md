# Options.AutoFormatReplaceSymbols

如果当 WPS 自动设置文档或区域的格式时，将两个连续的连字符（--）替换为短划线（–）或长划线（—），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatReplaceSymbols**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用 WPS 自动设置文档或区域格式时，将两个连续的连字符（--）替换为短划线（–）或长划线（—）的功能。*/
function test() {
    Options.AutoFormatReplaceSymbols = true
}
```


```JavaScript
/*本示例显示 WPS 自动设置文档或区域格式时，是否将两个连续的连字符（--）替换为短划线（–）或长划线（—）。*/
function test() {
    alert(Options.AutoFormatReplaceSymbols)
}
```
