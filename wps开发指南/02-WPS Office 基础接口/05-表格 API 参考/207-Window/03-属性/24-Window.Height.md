# Window.Height

返回或设置一个 Double 值，它代表窗口的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **Window** 对象的变量。

## 类型

number（double 精度）

## 说明


使用 **[UsableHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/UsableHeight)** 属性可确定窗口的最大尺寸。如果窗口已被最大化或最小化，则不能设置此属性。使用 **[WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/WindowState)** 属性可确定窗口的状态。



## 示例


```JavaScript
/*本示例先将WindowState设为xlNormal，再设置窗口的高度为216磅。*/
function test() {
    ActiveWindow.WindowState = xlNormal
    ActiveWindow.Height = 216
}
```


```JavaScript
/*本示例先判断如果第一个窗口的WindowState属性为xlNormal，则显示第一个窗口的高度，并将其窗口高度改为648磅。*/
function test() {
    if (Windows.Item(1).WindowState == xlNormal) {
        alert(`第一个窗口的窗口的高度为${Windows.Item(1).Height}磅，弹框关闭后则设置为648`)
        Windows.Item(1).Height = 648
    }
}
```
