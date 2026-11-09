# Options.AutoFormatAsYouTypeApplyFirstIndents

如果为 **True** ，则 WPS 在键入时自动用首行缩进替代段落开始处输入的空格。可读写。



## 语法

express.**AutoFormatAsYouTypeApplyFirstIndents**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动将键入时在段落开始处输入的空格替换为首行缩进。*/
function test() {
    Options.AutoFormatAsYouTypeApplyFirstIndents = true
}
```


```JavaScript
/*本示例判断如果 WPS 自动将键入时在段落开始处输入的空格替换为首行缩进，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeApplyFirstIndents) {
        alert("自动将键入时在段落开始处输入的空格替换为首行缩进")
    }
}
```
