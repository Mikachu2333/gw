# Window.GridlineColor

以 RGB 值返回或设置网格线颜色。 **Long** 类型，可读写。



## 语法

express.**GridlineColor**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将 Book1.xls 活动窗口的网格线颜色设为红色。*/
function test() {
    Application.Workbooks.Item("BOOK1.xls").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.GridlineColor = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例演示 GridlineColor 属性的数据类型，并将第一个窗口的的网格线颜色设为蓝色。*/
function test() {
    alert("GridlineColor属性的数据类型为：" + typeof Windows.Item(1).GridlineColor)
    Windows.Item(1).GridlineColor =  RGB(0, 0, 255)
}
```
