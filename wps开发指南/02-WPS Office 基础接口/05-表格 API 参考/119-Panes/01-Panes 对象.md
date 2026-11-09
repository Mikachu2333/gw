# Panes 对象

指定的窗口中所有 **[Pane](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/obj)** 对象的集合。

## 说明


 **Pane** 对象只对于工作表和 ET 4.0 宏表存在。

使用 **Panes** 属性返回 **Panes** 集合。

使用 **[Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/obj)** (*index* )（其中 *index* 是窗格索引号）可返回一个 **Pane** 对象。


## 示例


```JavaScript
/*本示例为如果当前活动窗口包含若干窗格，则冻结这些窗格。*/
function test() {
    if (Application.ActiveWindow.Panes.Count > 1) {
        Application.ActiveWindow.FreezePanes = true
    }
}
```


```JavaScript
/*本示例激活第一个窗口为活动窗口，并将该窗口的第一个窗格向下滚动一页。*/
function test() {
    Application.Windows.Item(1).Activate()
    Application.ActiveWindow.Panes.Item(1).LargeScroll(1)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/member/Parent) | 返回指定对象的父对象。只读。 |