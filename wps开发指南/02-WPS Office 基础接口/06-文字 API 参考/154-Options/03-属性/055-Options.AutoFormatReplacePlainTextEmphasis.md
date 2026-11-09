# Options.AutoFormatReplacePlainTextEmphasis

如果当 WPS 自动设置文档或区域的格式时，将手动强调的字符替换为相应的字符格式（例如，“*bold*”更改为“bold”，“*underline*”更改为“underline”），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatReplacePlainTextEmphasis**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用 WPS 自动设置文档或区域格式时，将手动强调的字符替换为相应的字符格式的功能。*/
function test() {
    Options.AutoFormatReplacePlainTextEmphasis = true
}
```


```JavaScript
/*本示例显示 WPS 自动设置文档或区域格式时，是否将手动强调的字符替换为相应的字符格式。*/
function test() {
    alert(Options.AutoFormatReplacePlainTextEmphasis)
}
```
