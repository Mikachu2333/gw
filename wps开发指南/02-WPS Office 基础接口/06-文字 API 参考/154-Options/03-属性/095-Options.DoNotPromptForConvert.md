# Options.DoNotPromptForConvert

设置或返回一个 **Boolean** 值，它代表在为处于兼容模式下的文档调用“转换”命令时是否出现一个警告对话框。可读写。



## 语法

express.**DoNotPromptForConvert**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在为处于兼容模式下的文档调用“转换”命令时出现一个警告对话框。*/
function test() {
    Options.DoNotPromptForConvert = false
}
```


```JavaScript
/*本示例判断如果 WPS 在为处于兼容模式下的文档调用“转换”命令时出现一个警告对话框，则通知用户。*/
function test() {
    if (!Options.DoNotPromptForConvert) {
        alert("WPS 在为处于兼容模式下的文档调用“转换”命令时出现一个警告对话框。")
    }
}
```
