# Window.ActivePane

返回一个 **[Pane](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/obj)** 对象，该对象表示窗口中的活动窗格。只读。



## 语法

express.**ActivePane**

express   一个代表 **Window** 对象的变量。

## 类型

Pane

## 说明


此属性仅用于工作表和宏表。

该属性返回一个 **Pane** 对象。必须使用 **[Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/member/Index)** 属性才能获取活动窗格的索引。



## 示例


```JavaScript
/*本示例激活工作簿1中当前窗口的下一个窗格。如果当前窗格处于被冻结状态则不能激活下一个窗格。运行本示例之前，必须确认工作簿1的活动工作表有两个或四个窗格。*/
function test() {
    Workbooks.Item("工作簿1").Activate()
    if (!ActiveWindow.FreezePanes) {
        let paneIndex = ActiveWindow.ActivePane.Index
        if (paneIndex === ActiveWindow.Panes.Count) {
            ActiveWindow.Panes(1).Activate()
        } else {
            ActiveWindow.Panes(paneIndex + 1).Activate()
        }
    }
}
```


```JavaScript
/*本示例显示当前活动窗格的索引。*/
function test() {
    alert(ActiveWindow.ActivePane.Index)
}
```
