# Application.UserControl

如果文档或应用程序是由用户创建或打开的，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**UserControl**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


如果应用程序是由另一 WPS Office 应用程序使用 **Open** 方法、 **CreateObject** 或 **GetObject** 方法以编程方式创建或打开的，则 **UserControl** 属性返回 **False** 。  

如果 WPS 对用户可见，或者从代码模块中调用 **Application** 对象的 **UserControl** 属性，则该属性将始终返回 **True** 。



## 示例


```JavaScript
/*此示例显示应用程序的 UserControl 属性的状态。*/
function test() {
    let document = Documents.Open("D:\\示例\\example.docx")
    if (Application.UserControl) {
        alert("This document was created or opened by the user.")
    } else {
        alert("This document was created programmatically.")
    }
}
```


```JavaScript
/*本示例显示 WPS 应用程序是否由用户创建或打开的。*/
function test() {
    alert(Application.UserControl)
}
```
