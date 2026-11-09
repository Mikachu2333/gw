# Options.AutoFormatAsYouTypeReplaceQuotes

如果键入时自动将所键入的直引号替换为弯引号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeReplaceQuotes**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用将所键入的直引号自动替换为弯引号的功能。*/
function test() {
    Options.AutoFormatAsYouTypeReplaceQuotes = true
}
```


```JavaScript
/*本示例显示“选项”对话框中“编辑”选项卡上“直引号替换为弯引号”选项的状态。*/
function test() {
    alert(Options.AutoFormatAsYouTypeReplaceQuotes)
}
```
