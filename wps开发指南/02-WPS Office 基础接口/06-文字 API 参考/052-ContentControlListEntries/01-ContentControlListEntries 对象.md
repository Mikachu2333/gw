# ContentControlListEntries 对象

 **ContentControlListEntries** 集合包含 **ContentControlListEntry** 对象，这些对象表示下拉列表或组合框内容控件中的项。

## 说明


使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Add)** 方法在下拉列表或组合框中添加项。


## 示例


```JavaScript
/*本示例使用 Add 方法在新的下拉列表内容控件中添加几个列表项。*/
function test() {
    let contentControl = Application.ActiveDocument.ContentControls.Add(wdContentControlDropdownList)
    // List items
    contentControl.DropdownListEntries.Add("Cat")
    contentControl.DropdownListEntries.Add("Dog")
    contentControl.DropdownListEntries.Add("Equine")
    contentControl.DropdownListEntries.Add("Monkey")
    contentControl.DropdownListEntries.Add("Snake")
    contentControl.DropdownListEntries.Add("Other")
}
```
使用 **ContentControl** 对象的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Item)** 方法或 **[DropdownListEntries](#TODO)** 属性访问集合中的单个列表项。



```JavaScript
/*本示例使用 Item 方法访问列表中的第三项并更改显示文本。本示例假定活动文档中的第一个 ContentControl 对象是下拉列表或组合框。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    let listEntry = contentControl.DropdownListEntries.Item(3)
    listEntry.Text = "Horse"
}
```
使用 **Clear** 方法可以删除下拉列表或组合框中的所有项。



```JavaScript
/*本示例将清除活动文档的第一个内容控件中的所有项。本示例假定活动文档中的第一个内容控件是下拉列表或组合框。*/
function test() {
    let contentControl = Application.ActiveDocument.ContentControls.Item(1)
    contentControl.DropdownListEntries.Clear()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntries/member/Add) | 将新的列表项添加到下拉列表或组合框内容控件中，并返回 **ContentControlListEntry** 对象。 |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntries/member/Clear) | 从下拉列表或组合框内容控件中清除所有项。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntries/member/Item) | 返回集合中的单个 **ContentControlListEntries** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntries/member/Count) | 返回 **ContentControlListEntries** 集合中的项目数。只读 **Long** 类型。 |