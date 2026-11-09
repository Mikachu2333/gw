# Application.Visible

如果指定对象可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏 WPS。*/
function test() {
    Application.Visible = false
}
```


```JavaScript
/*本示例判断 WPS 应用程序是否可见，并通知用户。*/
function test() {
    if (Application.Visible) {
        alert("WPS 应用程序可见")
    } else {
        alert("WPS 应用程序不可见")
    }
}
```
