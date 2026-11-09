# Options.AutoFormatAsYouTypeReplaceFarEastDashes

如果为 **True** ，WPS 会自动更正长元音和划线，可读写。



## 语法

express.**AutoFormatAsYouTypeReplaceFarEastDashes**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在用户键入时自动更正长元音和划线。*/
function test() {
    Options.AutoFormatAsYouTypeReplaceFarEastDashes = true
}
```


```JavaScript
/*本示例判断如果 WPS 在用户键入时自动更正长元音和划线，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeReplaceFarEastDashes) {
        alert("用户键入时自动更正长元音和划线。")
    }
}
```
