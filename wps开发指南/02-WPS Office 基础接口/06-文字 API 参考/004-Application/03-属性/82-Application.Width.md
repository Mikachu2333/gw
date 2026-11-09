# Application.Width

返回或设置应用程序窗口的宽度（以磅为单位）。 **Long** 类型，可读写。



## 语法

express.**Width**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 WPS 应用程序窗口的宽度和高度。*/
function test() {
    Application.WindowState = wdWindowStateNormal
    Application.Width = 500
    Application.Height = 400
}
```


```JavaScript
/*本示例显示 WPS 应用程序窗口的宽度。*/
function test() {
    alert(Application.Width + " 磅")
}
```
