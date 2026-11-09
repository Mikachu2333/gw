# Application.Visible

返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例隐藏 ET 应用程序窗口*/
function test() {
    Application.Visible = false
}
```


```JavaScript
/*此示例显示设置 ET 应用程序窗口的Visible属性的类型*/
function test() {
    alert(typeof Application.Visible)
}
```
