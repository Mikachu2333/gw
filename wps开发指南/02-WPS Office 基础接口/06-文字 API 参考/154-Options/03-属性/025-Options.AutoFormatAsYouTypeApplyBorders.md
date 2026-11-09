# Options.AutoFormatAsYouTypeApplyBorders

如果按下 Enter 后，三个或更多的连字符（-）、等号（=）或下划线（\_）将自动替换成指定的边框线，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatAsYouTypeApplyBorders**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


以一条 0.75 磅的直线替换连字符（-），以一条 0.75 磅的双线替换等号符号（=），以一条 1.5 磅的直线替换下划线（\_）。



## 示例


```JavaScript
/*本示例在按下 Enter 后，将三个或更多的连字符（-）、等号（=）或下划线（_）将自动替换成指定的边框线。*/
function test() {
    Options.AutoFormatAsYouTypeApplyBorders = true
}
```


```JavaScript
/*本示例显示按下 Enter 后，是否将三个或更多的连字符（-）、等号（=）或下划线（_）将自动替换成指定的边框线。*/
function test() {
    alert(Options.AutoFormatAsYouTypeApplyBorders)
}
```
