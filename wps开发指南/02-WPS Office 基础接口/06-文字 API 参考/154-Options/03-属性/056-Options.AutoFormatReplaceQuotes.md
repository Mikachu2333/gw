# Options.AutoFormatReplaceQuotes

如果当 WPS 自动设置文档或区域格式时，直引号会自动更改为弯引号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatReplaceQuotes**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用 WPS 自动设置文档或区域格式时，将直引号自动更改为弯引号的功能。*/
function test() {
    Options.AutoFormatReplaceQuotes = true
}
```


```JavaScript
/*本示例显示 WPS 自动设置文档或区域格式时，是否将直引号自动更改为弯引号。*/
function test() {
    alert(Options.AutoFormatReplaceQuotes)
}
```
