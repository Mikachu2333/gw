# Window.DisplayHorizontalScrollBar

如果在指定的窗口中显示水平滚动条，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayHorizontalScrollBar**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在活动窗口中显示水平和垂直滚动条。*/
function test() {
    ActiveWindow.DisplayHorizontalScrollBar = true
    ActiveWindow.DisplayVerticalScrollBar = true
}
```


```JavaScript
/*本示例切换第一个窗口中的水平滚动条。*/
function test() {
    Windows.Item(1).DisplayHorizontalScrollBar = !Windows.Item(1).DisplayHorizontalScrollBar
}
```
