# Window.DisplayGridlines

 如果显示网格线，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayGridlines**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于工作表和宏工作表。

此属性仅影响显示的网格线。使用 **[PrintGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintGridlines)** 属性可以控制网格线的打印。



## 示例


```JavaScript
/*本示例激活工作表Sheet1，并切换第一个工作表视图的网格线显示方式。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SheetViews.Item(1).DisplayGridlines = !ActiveWindow.SheetViews.Item(1).DisplayGridlines
}
```


```JavaScript
/*本示例显示第一个窗口的活动工作表视图网格线。*/
function test() {
    Windows.Item(1).ActiveSheetView.DisplayGridlines = true
}
```
