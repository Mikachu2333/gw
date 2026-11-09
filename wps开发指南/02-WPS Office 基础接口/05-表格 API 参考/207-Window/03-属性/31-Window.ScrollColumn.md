# Window.ScrollColumn

返回或设置指定窗格或窗口最左边的列号。 **Long** 型，可读写。



## 语法

express.**ScrollColumn**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果窗口处于拆分状态，则 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/obj)** 对象的 **ScrollColumn** 属性表示左上方的窗格。如果某些窗格处于冻结状态，则 **Window** 对象的 **ScrollColumn** 属性将不包括冻结的区域。



## 示例


```JavaScript
/*本示例将第三列移到窗口的最左侧。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    ActiveWindow.ScrollColumn = 3
}
```


```JavaScript
/*本示例显示窗口现在最左边的列号，再将第五列移到窗口的最左边。*/
function test() {
    alert(`窗口现在最左边的列号为${Windows.Item(1).ScrollColumn}，弹框关闭后则设置为5`)
    Windows.Item(1).ScrollColumn = 5
}
```
