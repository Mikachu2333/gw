# Document.UserControl

如果文档是由用户创建或打开的，则该属性为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**UserControl**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


如果文档是由其他 WPS Office 应用程序用 **Open** 方法或其他语言比如VB的 **CreateObject** 或 **GetObject** 命令以编程方式创建或打开的，则该属性返回 **False** 。  

如果 WPS 对用户可见，或者您在 WPS 代码模块内部调用 **UserControl** 属性，则该属性将始终返回 **True** 。



## 示例


```JavaScript
/*本示例显示名为“example.docx”的文档的UserControl属性的状态。本示例仅在从装载 WPS 对象库的其他 Office 应用程序运行的情况下有效。*/
function test() {
    let document = Documents.Open("D:\\示例\\example.docx")
    if (document.UserControl) {
        alert("This document was created or opened by the user.")
    } else {
        alert("This document was created programmatically.")
    }
}
```


```JavaScript
/*本示例显示活动文档是否由用户创建或打开的。*/
function test() {
    alert(ActiveDocument.UserControl)
}
```
