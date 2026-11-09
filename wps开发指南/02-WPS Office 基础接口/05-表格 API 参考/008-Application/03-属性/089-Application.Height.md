# Application.Height

返回一个 **Double** 值，它代表主应用程序窗口的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **Application** 对象的变量。

## 类型

number（double 精度）

## 说明


如果窗口处于最小化，则此属性为只读，并引用图标的高度。如果窗口处于最大化，则无法设置此属性。使用 **[WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/WindowState)** 属性可确定窗口的状态。



## 示例


```JavaScript
/*此示例将窗口取消最大化后，高度设置为600，并显示窗口的高度*/
function test() {
    Application.WindowState = xlNormal
    Application.Height = 600
    alert(Application.Height)
}
```


```JavaScript
/*此示例显示窗口高度的数据类型*/
function test() {
    alert(typeof Application.Height)
}
```
