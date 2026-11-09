# Application.Top

返回或设置活动文档的垂直位置。 **Long** 类型，可读写。



## 语法

express.**Top**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将 WPS 应用程序窗口置于距屏幕顶部 100 磅的位置。*/
function test() {
    Application.WindowState = wdWindowStateNormal
    Application.Top = 100
}
```


```JavaScript
/*本示例显示 WPS 应用程序窗口与屏幕顶部的距离。*/
function test() {
    Application.WindowState = wdWindowStateNormal
    alert(`此时应用程序窗口与屏幕顶部的距离为 ${Application.Top}`)
}
```
