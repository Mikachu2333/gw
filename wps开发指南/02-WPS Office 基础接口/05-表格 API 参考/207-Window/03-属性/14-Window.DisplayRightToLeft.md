# Window.DisplayRightToLeft

如果指定的窗口或工作表是从右到左显示（而非从左到右），则为 **True** 。如果对象从左到右显示，则为 **False** 。 **Boolean** 类型，只读。



## 语法

express.**DisplayRightToLeft**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动窗口从右到左显示。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    ActiveWindow.DisplayRightToLeft = true
}
```


```JavaScript
/*本示例演示 DisplayRightToLeft 属性的数据类型，并将第一个窗口的 DisplayRightToLeft 属性的值设置为false。*/
function test() {
    alert("DisplayRightToLeft属性的数据类型为：" + typeof Windows.Item(1).DisplayRightToLeft)
    Windows.Item(1).DisplayRightToLeft = false
}
```
