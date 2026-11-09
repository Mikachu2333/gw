# Options.AutoFormatAsYouTypeReplacePlainTextEmphasis

如果键入时，手动强调的字符将自动替换为相应字符格式，则该属性值为 **True** 。例如，将“*bold*”改为“ **bold** ”、将“*underline*”改为“underline”。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeReplacePlainTextEmphasis**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用将手动强调的字符替换为相应字符格式的功能。*/
function test() {
    Options.AutoFormatAsYouTypeReplacePlainTextEmphasis = true
}
```


```JavaScript
/*本示例显示是否启用将手动强调的字符替换为相应字符格式的功能。*/
function test() {
    alert(Options.AutoFormatAsYouTypeReplacePlainTextEmphasis)
}
```
