# Pane 对象

一个对象，它代表普通视图中的四个窗格之一，或文档窗口中任意其他视图的某个窗格。

## 说明


使用 **[Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Panes/obj)** (*index*) 返回单个 **Pane** 对象，其中 *index* 是窗格的索引号。

当使用文档窗口视图而非普通视图时，使用 **Panes** (1) 可引用单个 **Pane** 对象。

使用 **[Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Pane/member/Activate)** 方法可激活指定窗格。

使用 **[ViewType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Pane/member/ViewType)** 属性可决定活动窗格。

普通视图是唯一具有多窗格的视图。所有其他文档窗口视图都只有一个窗格，即文档窗口。


## 示例


```JavaScript
/*本示例判断如果活动窗口的活动窗格的视图类型为幻灯片视图，则激活备注窗格成为当前窗格。备注窗格是 Panes 集合中的第三个成员。*/
function test() {
    let window = Application.ActiveWindow
    if (window.ActivePane.ViewType == ppViewSlide) {
        window.Panes.Item(3).Activate()
    }
}
```


```JavaScript
/*本示例显示活动窗口的备注窗格是否处于活动状态。*/
function test() {
    alert(ActiveWindow.Panes.Item(3).Active == msoTrue)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Pane/member/Activate) | 激活指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Pane/member/Active) | 返回指定的窗格或窗口是否处于激活的状态。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Pane/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Pane/member/Parent) | 返回指定对象的父对象。 |
| [ViewType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Pane/member/ViewType) | 返回指定窗格的视图类型。只读。 |