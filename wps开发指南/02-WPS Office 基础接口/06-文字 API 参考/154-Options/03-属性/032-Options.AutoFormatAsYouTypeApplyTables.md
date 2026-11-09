# Options.AutoFormatAsYouTypeApplyTables

如果为 **True** ，则当您键入一个加号、一串连字符、另一个加号等，然后按下 Enter 后， WPS 将自动创建一张表格。加号变为列边框，连字符变为列宽度。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeApplyTables**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在键入时自动创建表格。*/
function test() {
    Options.AutoFormatAsYouTypeApplyTables = true
}
```


```JavaScript
/*本示例显示 WPS 在键入时是否自动创建表格。*/
function test() {
    alert(Options.AutoFormatAsYouTypeApplyTables)
}
```
