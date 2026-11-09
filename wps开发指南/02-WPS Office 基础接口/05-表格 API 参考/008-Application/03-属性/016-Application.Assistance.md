# Application.Assistance

为 ET 返回代表 WPS Office 帮助查看器的 **[IAssistance](#TODO)** 对象。只读。



## 语法

express.**Assistance**

express   一个代表 **Application** 对象的变量。

## 类型

IAssistance

## 说明


 **IAssistance** 对象使开发人员可以在 Office 帮助查看器中显示自定义帮助以及随 Office 一起安装的帮助。



## 示例


```JavaScript
/*本示例打开帮助查看器。*/
function test() {
    Application.Assistance.ShowHelp()
}
```


```JavaScript
/*本示例基于关键字从帮助查看器执行搜索。*/
function test() {
    Application.Assistance.SearchHelp("创建工作表")
}
```
