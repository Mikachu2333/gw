# Options.AutoFormatApplyFirstIndents

如果为 **True** ，则 WPS 在自动设置文档或区域的格式时，用首行缩进替换在段落开始处输入的空格。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatApplyFirstIndents**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 用首行缩进替换在段落开始处输入的空格。*/
function test() {
    Options.AutoFormatApplyFirstIndents = true
}
```


```JavaScript
/*本示例判断如果 WPS 将段落开头输入的空格替换为首行缩进，则通知用户。*/
function test() {
    if (Options.AutoFormatApplyFirstIndents) {
        alert("将段落开头输入的空格替换为首行缩进")
    }
}
```
