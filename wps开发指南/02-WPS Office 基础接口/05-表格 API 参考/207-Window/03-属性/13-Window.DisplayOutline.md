# Window.DisplayOutline

如果显示分级显示符号，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayOutline**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于工作表和宏工作表。



## 示例


```JavaScript
/*本示例显示Book1.xls活动窗口中的分级显示符号。*/
function test() {
    Application.Workbooks.Item("BOOK1.xls").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.DisplayOutline = true
}
```


```JavaScript
/*本示例演示 DisplayOutline 属性的数据类型，并将 DisplayOutline 属性的值设置为false。*/
function test() {
    alert("DisplayOutline属性的数据类型为：" + typeof Windows.Item(1).DisplayOutline)
    Windows.Item(1).DisplayOutline = false
}
```
