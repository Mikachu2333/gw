# Window.Left

返回或设置一个 **Long** 类型的值，该值代表指定窗口的水平位置，以磅为单位。可读写。



## 语法

express.**Left**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动窗口的水平位置设置为 100 磅。*/
function test() {
    let window = ActiveDocument.ActiveWindow
    window.WindowState = wdWindowStateNormal
    window.Left = 100
    window.Top = 0
}
```


```JavaScript
/*本示例显示活动窗口的水平位置。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Left)
}
```
