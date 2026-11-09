# Options.AutoFormatReplaceFractions

如果当 WPS 自动设置文档或区域格式时，会用当前字符集中的分数替换所键入的分数，则该属性值为 **True** 。例如，将“1/2”替换为“½”。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatReplaceFractions**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用 WPS 自动设置文档或区域格式时，会用当前字符集中的分数替换所键入的分数的功能。*/
function test() {
    Options.AutoFormatReplaceFractions = true
}
```


```JavaScript
/*本示例显示 WPS 自动设置文档或区域格式时，是否会用当前字符集中的分数替换所键入的分数。*/
function test() {
    alert(Options.AutoFormatReplaceFractions)
}
```
