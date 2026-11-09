# Window.ActivePane

返回 **[Pane](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pane/obj)** 对象，该对象代表指定窗口的活动窗格。只读。



## 语法

express.**ActivePane**

express   一个代表 **Window** 对象的变量。

## 类型

Pane

## 示例


```JavaScript
/*本示例拆分活动窗口，然后激活活动窗格的下一个窗格。*/
function test() {
    let window = ActiveDocument.ActiveWindow
    window.Split = true
    window.ActivePane.Next.Activate()
    alert("Pane " + window.ActivePane.Index + " is active")
}
```


```JavaScript
/*本示例激活第一个窗口，并显示活动窗格中的制表符。*/
function test() {
    Application.Windows.Item(1).Activate()
    Application.Windows.Item(1).ActivePane.View.ShowTabs = true
}
```
