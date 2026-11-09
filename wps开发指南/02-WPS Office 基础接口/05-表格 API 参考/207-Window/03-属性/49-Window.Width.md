# Window.Width

返回或设置一个 **Double** 值，它代表窗口的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **Window** 对象的变量。

## 类型

number（double 精度）

## 说明


使用 **[UsableWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/UsableWidth)** 属性可确定窗口的最大尺寸。如果窗口已被最大化或最小化，则不能设置此属性。使用 **WindowState** 属性可确定窗口的状态。



## 示例


```JavaScript
/*本示例先将 WindowState 属性设为 xlnormal ，再将窗口的宽度设置为 678 磅。*/
function test() {
    ActiveWindow.WindowState = xlNormal
    ActiveWindow.Width = 678
}
```


```JavaScript
/*本示例先判断如果第一个窗口的 WindowState 属性设为 xlnormal ，则显示第一个窗口的宽度，并将其窗口宽度改为 345 磅。*/
function test() {
    if (Windows.Item(1).WindowState == xlNormal) {
        alert(`第一个窗口的窗口宽度为${Windows.Item(1).Width}磅，弹框关闭后则设置为345`)
        Windows.Item(1).Width = 345
    }
}
```
