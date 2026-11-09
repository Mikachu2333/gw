# Options.AutoFormatAsYouTypeApplyHeadings

如果在键入标题时，自动为标题设置样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeApplyHeadings**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在键入标题时自动为标题设置样式。*/
function test() {
    Options.AutoFormatAsYouTypeApplyHeadings = true
}
```


```JavaScript
/*本示例显示 WPS 在键入标题时是否自动为标题设置样式。*/
function test() {
    alert(Options.AutoFormatAsYouTypeApplyHeadings)
}
```
