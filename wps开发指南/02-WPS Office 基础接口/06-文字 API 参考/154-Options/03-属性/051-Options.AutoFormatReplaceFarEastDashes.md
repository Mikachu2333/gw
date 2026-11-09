# Options.AutoFormatReplaceFarEastDashes

如果 WPS 在自动设置文档或区域的格式时，会更正长元音和划线的使用，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatReplaceFarEastDashes**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动更正长元音和划线的使用。*/
function test() {
    Options.AutoFormatReplaceFarEastDashes = true
}
```


```JavaScript
/*本示例判断如果 WPS 自动更正长元音和划线的使用，则通知用户。*/
function test() {
    if (Options.AutoFormatReplaceFarEastDashes) {
        alert("自动更正长元音和划线的使用。")
    }
}
```
