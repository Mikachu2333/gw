# Application.Top

返回或设置一个 **Double** 值，它代表从屏幕上边缘到 ET 主窗口上边缘的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **Application** 对象的变量。

## 类型

number（double 精度）

## 说明


如果应用程序窗口已最小化，则此属性将控制窗口图标的位置（在屏幕的任何位置）。



## 示例


```JavaScript
/*此示例将窗口最大化，再显示从屏幕边缘到主 Microsoft Execl 窗口上边缘的距离值*/
function test() {
    Application.WindowState = xlMaximized
    alert(Application.Top)
}
```


```JavaScript
/*此示例将从屏幕边缘到主 Microsoft Execl 窗口上边缘的距离设置为 100 ,并显示该数值*/
function test() {
    Application.Top = 100
    alert(Application.Top)
}
```
