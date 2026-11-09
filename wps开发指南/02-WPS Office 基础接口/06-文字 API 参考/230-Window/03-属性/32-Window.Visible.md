# Window.Visible

如果指定对象可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


如果 **Visible** 属性为 **False** ，则某些方法和属性可能无法使用。



## 示例


```JavaScript
/*本示例设置活动窗口不可见。*/
function test() {
    ActiveWindow.Visible = false
}
```


```JavaScript
/*本示例展示第一个窗口是否可见。*/
function test() {
    alert(Windows.Item(1).Visible)
}
```
