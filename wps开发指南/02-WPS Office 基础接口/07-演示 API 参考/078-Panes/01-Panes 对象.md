# Panes 对象

 **[Pane](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Pane/obj)** 对象的集合，这些对象代表普通视图内文档窗口中的幻灯片、大纲和备注窗格，或代表文档窗口中其他任意视图内的单个窗格。

## 说明


在普通视图中， **Panes** 集合包含四个成员。所有其他文档窗口视图则仅有一个窗格，因而 **Panes** 集合也就只有一个成员。

使用 **Panes** 属性可返回 **Panes** 集合。


## 示例


```JavaScript
/*本示例将测试活动窗口中窗格的数目。如果值为 1，则说明是除普通视图之外的其他视图，接着将激活普通视图，然后使用纵向窗格分隔线将文档窗口进行划分，使大纲窗格占 15% 位置，幻灯片窗格占 85% 位置。*/
function test() {
    let window = Application.ActiveWindow
    if (window.Panes.Count == 1) {
        window.ViewType = ppViewNormal
        window.SplitHorizontal = 15
    }
}
```


```JavaScript
/*本示例显示第一个窗口的第一个窗格的视图类型是否为ppViewNotesPage。*/
function test() {
    alert(Windows.Item(1).Panes.Item(1).ViewType == ppViewNotesPage)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Panes/member/Item) | 从指定 Panes 集合中返回单个 Pane 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Panes/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Panes/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Panes/member/Parent) | 返回指定对象的父对象。 |