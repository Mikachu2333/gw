# Options.AutoFormatReplaceOrdinals

如果为 **True** ，则当 WPS 自动设置文档或区域格式时，用相同字母的上标格式替换序数后缀“st”、“nd”、“rd”和“th”。例如，将“1st”替换为“1”后接上标“st”。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatReplaceOrdinals**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用 WPS 自动设置文档或区域格式时，将序数字母自动替换为上标字母的功能。*/
function test() {
    Options.AutoFormatReplaceOrdinals = true
}
```


```JavaScript
/*本示例显示 WPS 自动设置文档或区域格式时，是否将序数字母自动替换为上标字母。*/
function test() {
    alert(Options.AutoFormatReplaceOrdinals)
}
```
