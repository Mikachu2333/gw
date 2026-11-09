# Options.AutoFormatAsYouTypeDefineStyles

如果 WPS 自动根据手动设置的格式新建一种样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeDefineStyles**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例 WPS 自动根据手动设置的格式新建一种样式。*/
function test() {
    Options.AutoFormatAsYouTypeDefineStyles = true
}
```


```JavaScript
/*本示例显示 WPS 是否自动根据手动设置的格式新建一种样式。*/
function test() {
    alert(Options.AutoFormatAsYouTypeDefineStyles)
}
```
