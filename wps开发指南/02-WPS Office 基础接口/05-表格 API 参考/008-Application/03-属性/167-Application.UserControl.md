# Application.UserControl

如果应用程序可见，或者用户已创建或启动应用程序，则该值为 **True** 。如果以编程方式通过 **CreateObject** 函数或 **GetObject** 函数启动应用程序，且应用程序为隐藏状态，则该值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**UserControl**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


当对象的 **UserControl** 属性为 **False** 时，则最后一个以编程方式对该对象的引用释放以后，该对象也将释放。如果本属性为 **False** ，会话中最后一个对象释放后，ET 将退出。



## 示例


```JavaScript
/*本示例显示UserControl属性的状态。*/
function test() {
    if (Application.UserControl) {
        alert("This workbook was created by the user")
    } else {
        alert("This workbook was created programmatically")
    }
}
```


```JavaScript
/*本示例开启应用程序。*/
function test() {
    Application.UserControl = true
}
```
