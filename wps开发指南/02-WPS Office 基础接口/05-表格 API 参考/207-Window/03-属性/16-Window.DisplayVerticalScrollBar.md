# Window.DisplayVerticalScrollBar

如果显示垂直滚动条，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayVerticalScrollBar**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动窗口的垂直滚动条。*/
function test() {
    ActiveWindow.DisplayVerticalScrollBar = true
}
```


```JavaScript
/*本示例演示 DisplayVerticalScrollBar 属性的数据类型，并将第一个窗口的 DisplayVerticalScrollBar 属性的值设置为false。*/
function test() {
    alert("DisplayVerticalScrollBar属性的数据类型为：" + typeof Windows.Item(1).DisplayVerticalScrollBar)
    Windows.Item(1).DisplayVerticalScrollBar = false
}
```
