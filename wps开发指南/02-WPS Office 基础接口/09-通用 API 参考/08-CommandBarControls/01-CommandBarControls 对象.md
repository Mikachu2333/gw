# CommandBarControls 对象

 **[CommandBarControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/obj)** 对象的集合，这些对象代表某个命令栏上的命令栏控件。

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

使用 **Controls** 属性可返回 **CommandBarControls** 集合。


## 示例


```JavaScript
/*本示例运行于各组件，将名为“Standard”的命令栏的所有控件的标题更改为该控件的 ID 属性的当前值。*/
function test() {
    let cbControls = Application.CommandBars.Item("Standard").Controls
    for (let i = 1; i <= cbControls.Count; i++) {
        cbControls.Item(i).Caption = cbControls.Item(i).Id.toString()
    }
}
```
使用 **Add** 方法可在 **CommandBarControls** 集合中添加一个新的命令栏控件。



```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”的命令栏并为其添加一个控件，并将该命令栏设置可见。*/
function test() {
    let CommandBar = Application.CommandBars.Add("Custom")
    CommandBar.Controls.Add()
    CommandBar.Visible = true
}
```
使用 **Controls** (*index*) 可返回一个 **CommandBarControl** 、 **CommandBarButton** 、 **CommandBarComboBox** 或 **CommandBarPopup** 对象，其中 *index* 是该控件的标题或索引号。



```JavaScript
/*本示例运行于各组件，将名为“Standard”的命令栏的第一个控件复制到新建命令栏上。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbControl = Application.CommandBars.Item("Standard").Controls.Item(1)
    cbControl.Copy(commandBar, 1)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControls/member/Add) | 新建一个 **CommandBarControl** 对象并将其添加到指定命令栏上的控件集合中。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControls/member/Item) | 获取 **CommandBarControls** 集合中的一个 **[CommandBarControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/obj)** 对象。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControls/member/Count) | 获取命令栏上的控件数量。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControls/member/Parent) | 获取 **CommandBarControls** 对象的 **Parent** 对象。只读。 |