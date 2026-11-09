# Application.Windows

返回一个 **Windows** 集合，它代表所有工作簿中的所有窗口。 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/obj)** 对象，只读。



## 语法

express.**Windows**

express   一个代表 **Application** 对象的变量。

## 类型

Windows

## 说明


在不使用对象识别符的情况下使用此属性等效于使用 `Application.Windows`。

此属性返回的集合中既包括可见窗口，也包括隐藏窗口。



## 示例


```JavaScript
/*此示例在 ET 中新建一个窗口,并关闭第一个打开或隐藏的窗口。*/
function test() {
    Application.ActiveWorkbook.NewWindow()
    Application.Windows.Item(1).Close()
}
```


```JavaScript
/*此示例将活动工作簿的窗口一命名为“Consolidated Balance Sheet”。此名称将被用作对 Windows 集合的索引。*/
function test() {
    Application.ActiveWorkbook.Windows.Item(1).Caption = "Consolidated Balance Sheet"
    Application.ActiveWorkbook.Windows.Item("Consolidated Balance Sheet").ActiveSheet.Calculate()
}
```
