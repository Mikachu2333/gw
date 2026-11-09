# Window.Caption

返回或设置一个 **Variant** 值，它代表文档窗口标题栏中显示的名称。



## 语法

express.**Caption**

express   一个代表 **Window** 对象的变量。

## 类型

any

## 说明


如果设置了该名称，就可以使用该名称作为 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/obj)** 集合的索引（如示例中的所述）。



## 示例


```JavaScript
/*此示例将活动工作簿中第一个窗口名称设置为“Consolidated Balance Sheet”。然后该名称将用作 Windows 集合中该窗口的索引。*/
function test() {
    let windows = Application.ActiveWorkbook.Windows
    windows.Item(1).Caption = "Consolidated Balance Sheet"
    windows.Item("Consolidated Balance Sheet").ActiveSheet.Calculate()
}
```


```JavaScript
/*此示例显示活动窗口的标题。*/
function test() {
    let window = Application.ActiveWindow
    alert(window.Caption)
}
```
