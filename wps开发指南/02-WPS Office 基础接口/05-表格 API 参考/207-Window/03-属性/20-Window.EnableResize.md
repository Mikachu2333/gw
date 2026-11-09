# Window.EnableResize

如果能够调整窗口大小，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableResize**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例先将WindowState设为xlNormal，再设置活动窗口以使其大小不能被调整。*/
function test() {
    ActiveWindow.WindowState = xlNormal
    ActiveWindow.EnableResize = false
}
```


```JavaScript
/*本示例先将WindowState设为xlNormal，并将第一个窗口的EnableResize属性的值设置为true，再显示EnableResize属性的数据类型。*/
function test() {
    ActiveWindow.WindowState = xlNormal
    Windows.Item(1).EnableResize = true
    alert("EnableResize属性的数据类型为：" + typeof Windows.Item(1).EnableResize)
}
```
