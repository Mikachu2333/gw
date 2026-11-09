# Application.DisplayScrollBars

如果为 **True** ，则 WPS 在至少一个文档窗口中显示滚动条；如果为 **False** ，则在任何窗口中均不显示滚动条。 **Boolean** 类型，可读写。



## 语法

express.**DisplayScrollBars**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


将 **DisplayScrollBars** 属性设置为 **True** ，可在所有窗口中显示垂直滚动条和水平滚动条。将该属性设置为 **False** 将关闭所有窗口内的滚动条。

使用 **DisplayHorizontalScrollBar** 和 **DisplayVerticalScrollBar** 属性在指定的窗口中显示单独的滚动条。



## 示例


```JavaScript
/*本示例在所有窗口中显示垂直滚动条和水平滚动条。*/
function test() {
    Application.DisplayScrollBars = true
}
```


```JavaScript
/*本示例显示是否在任何窗口中展示滚动条。*/
function test() {
    alert(Application.DisplayScrollBars)
}
```
