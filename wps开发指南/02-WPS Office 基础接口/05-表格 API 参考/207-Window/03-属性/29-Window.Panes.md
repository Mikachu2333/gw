# Window.Panes

返回一个 **[Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/obj)** 集合，该集合表示指定窗口中的所有窗格。只读。



## 语法

express.**Panes**

express   一个代表 **Window** 对象的变量。

## 类型

Panes

## 说明


只有当窗口的 **Split** 属性设置为 **True** 时，该属性才有效。



## 示例


```JavaScript
/*本示例弹窗显示 Book1.xls 中当前窗口中的窗格数目。*/
function test() {
    Workbooks.Item("BOOK1.XLS").Worksheets.Item("Sheet1").Activate()
    MsgBox(`There are ${ActiveWindow.Panes.Count} panes in the active window`)
}
```


```JavaScript
/*本示例激活“Book1.xls”中活动窗口左上角的窗格*/
function test() {
    Workbooks.Item("BOOK1.XLS").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.Panes.Item(1).Activate()
}
```
