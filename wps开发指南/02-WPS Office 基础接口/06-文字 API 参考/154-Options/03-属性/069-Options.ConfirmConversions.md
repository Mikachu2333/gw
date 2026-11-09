# Options.ConfirmConversions

如果 WPS 在打开或者插入一个非 WPS 文档或模板的文件之前，会显示一个 **“转换文件”** 对话框，则该属性值为 **True** 。在 **“转换文件”** 对话框中，用户可以选择需要转换的文件格式。 **Boolean** 类型，可读写。



## 语法

express.**ConfirmConversions**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在打开一个非 WPS 文档或模板的文件之前，显示“转换文件”对话框。*/
function test() {
    Options.ConfirmConversions = true
}
```


```JavaScript
/*本示例显示 WPS 是否会在打开一个非 WPS 文档或模板的文件之前，显示“转换文件”对话框。*/
function test() {
    alert(Options.ConfirmConversions)
}
```
