# Options.AutoFormatPreserveStyles

如果当 WPS 自动设置文档或区域格式时，保留先前所用的样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatPreserveStyles**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 使其可保留原有样式，并自动设置标题、列表和其他段落的样式。*/
function test() {
    Options.AutoFormatPreserveStyles = true
    Options.AutoFormatApplyHeadings = true
    Options.AutoFormatApplyLists = true
    Options.AutoFormatApplyOtherParas = true
}
```


```JavaScript
/*本示例显示 WPS 自动设置文档或区域格式时，是否保留先前所用的样式。*/
function test() {
    alert(Options.AutoFormatPreserveStyles)
}
```
