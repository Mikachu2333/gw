# Window.DisplayHorizontalScrollBar

如果显示水平滚动条，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayHorizontalScrollBar**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例打开活动窗口的水平滚动条。*/
function test() {
    ActiveWindow.DisplayHorizontalScrollBar = true
}
```


```JavaScript
/*本示例演示 DisplayHorizontalScrollBar 属性的数据类型，并将 DisplayHorizontalScrollBar 属性的值设置为false。*/
function test() {
    alert("DisplayHorizontalScrollBar属性的数据类型为：" + typeof Windows.Item(1).DisplayHorizontalScrollBar)
    Windows.Item(1).DisplayHorizontalScrollBar = false
}
```
