# Window.DisplayZeros

如果显示零值，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayZeros**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于工作表和宏工作表。



## 示例


```JavaScript
/*本示例将 Book1.xls 中的活动窗口设置为显示零值。*/
function test() {
    Application.Workbooks.Item("BOOK1.xls").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.DisplayZeros = true
}
```


```JavaScript
/*本示例演示 DisplayZeros 属性的数据类型，并将第一个窗口的 DisplayZeros 属性的值设置为false。*/
function test() {
    alert("DisplayZeros属性的数据类型为：" + typeof Windows.Item(1).DisplayZeros)
    Windows.Item(1).DisplayZeros = false
}
```
