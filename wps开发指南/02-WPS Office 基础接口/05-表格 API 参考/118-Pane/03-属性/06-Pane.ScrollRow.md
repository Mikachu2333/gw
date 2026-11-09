# Pane.ScrollRow

返回或设置指定窗格或窗口最上面显示的行号。 **Long** 型，可读写。



## 语法

express.**ScrollRow**

express   一个代表 **Pane** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果窗口处于拆分状态，则 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/obj)** 对象的 **ScrollRow** 属性表示左上方的窗格。如果某些窗格处于冻结状态，则 **Window** 对象的 **ScrollRow** 属性将不包括冻结的区域。



## 示例


```JavaScript
/*本示例将活动窗口的第三个窗格中第十行移动到窗格顶部。*/
function test() {
    Application.ActiveWindow.Panes.Item(3).ScrollRow = 10
}
```


```JavaScript
/*本示例显示活动窗口的活动窗格最上面显示的行号。*/
function test() {
    alert(Application.ActiveWindow.ActivePane.ScrollRow)
}
```
