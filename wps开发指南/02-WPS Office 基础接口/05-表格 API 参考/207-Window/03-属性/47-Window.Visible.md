# Window.Visible

返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将隐藏当前窗口。*/
function test() {
    ActiveWindow.Visible = false
}
```


```JavaScript
/*本示例将显示工作簿2的窗口。*/
function test() {
    Windows.Item("工作簿2").Visible = true
}
```
