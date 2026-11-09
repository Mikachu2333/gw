# Options.AutoFormatApplyOtherParas

如果当 WPS 自动设置文档或区域格式时，自动为非标题项或列表项的段落设置样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatApplyOtherParas**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在 WPS 自动设置文档或区域格式时，将自动为非标题项或列表项的段落设置样式。*/
function test() {
    Options.AutoFormatApplyOtherParas = true
}
```


```JavaScript
/*本示例显示 WPS 自动设置文档或区域格式时，是否自动为非标题项或列表项的段落设置样式。*/
function test() {
    alert(Options.AutoFormatApplyOtherParas)
}
```
