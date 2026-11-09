# Pane.ScrollColumn

返回或设置指定窗格或窗口最左边的列号。 **Long** 型，可读写。



## 语法

express.**ScrollColumn**

express   一个代表 **Pane** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果窗口处于拆分状态，则 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/obj)** 对象的 **ScrollColumn** 属性表示左上方的窗格。如果某些窗格处于冻结状态，则 **Window** 对象的 **ScrollColumn** 属性将不包括冻结的区域。



## 示例


```JavaScript
/*此示例显示活动窗口中活动窗格最左边的列号。*/
function test() {
    alert(ActiveWindow.ActivePane.ScrollColumn)
}
```


```JavaScript
/*此示例将活动窗口中第一个窗格最左边的列号设置为6。*/
function test() {
    ActiveWindow.Panes.Item(1).ScrollColumn = 6
}
```
