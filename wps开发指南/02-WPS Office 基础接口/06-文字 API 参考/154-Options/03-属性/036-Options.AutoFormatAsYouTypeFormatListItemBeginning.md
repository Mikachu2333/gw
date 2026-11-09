# Options.AutoFormatAsYouTypeFormatListItemBeginning

如果 WPS 将列表项开始处的字符格式重复应用于下一个列表项，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeFormatListItemBeginning**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 将列表项开始处的字符格式重复应用于下一个列表项。*/
function test() {
    Options.AutoFormatAsYouTypeFormatListItemBeginning = true
}
```


```JavaScript
/*本示例显示 WPS 是否将列表项开始处的字符格式重复应用于下一个列表项。*/
function test() {
    alert(Options.AutoFormatAsYouTypeFormatListItemBeginning)
}
```
