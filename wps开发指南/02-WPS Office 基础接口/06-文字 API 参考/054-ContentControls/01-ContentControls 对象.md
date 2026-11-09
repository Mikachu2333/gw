# ContentControls 对象

 **[ContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/obj)** 对象的集合。内容控件是文档中绑定的、有可能添加标签的区域，它们充当特定类型的内容的容器。单个内容控件可能包含诸如日期、列表或格式化文本段落等内容。

## 说明


使用 **Add** 方法可以创建新的内容控件，并将它插入文档中。


## 示例


```JavaScript
/*本示例在活动文档中插入下拉列表内容控件，设置标题和占位符文本并在列表中添加几个项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Add(wdContentControlDropdownList)
    contentControl.Title = "My Favorite Animal"
    if (contentControl.ShowingPlaceholderText) {
        contentControl.SetPlaceholderText(null, null, "Select your favorite animal ")
    }
    // List entries
    contentControl.DropdownListEntries.Add("Cat")
    contentControl.DropdownListEntries.Add("Dog")
    contentControl.DropdownListEntries.Add("Equine")
    contentControl.DropdownListEntries.Add("Monkey")
    contentControl.DropdownListEntries.Add("Snake")
    contentControl.DropdownListEntries.Add("Other")
}
```
使用 **Item** 方法可以访问集合中的特定内容控件。



```JavaScript
/*本示例访问活动文档中的第一个内容控件，如果控件是下拉列表或组合框，则将第一项移到列表底部，将最后一项移动到列表顶部。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)

    if (contentControl.Type == wdContentControlComboBox || contentControl.Type == wdContentControlDropdownList) {
        // First item in the list.
        let listEntry1 = contentControl.DropdownListEntries.Item(1)

        // Move the first item down one.
        for (let i = 1; i < contentControl.DropdownListEntries.Count; i++) {
            listEntry1.MoveDown()
        }

        // Last item in the list.
        let listEntry2 = contentControl.DropdownListEntries.Item(contentControl.DropdownListEntries.Count - 1)

        // Move the last item up one.
        for (let j = contentControl.DropdownListEntries.Count - 1; j > 1; j--) {
            listEntry2.MoveUp()
        }
    }
}
```
使用 **ContentControl** 对象来处理个别内容控件。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Add) | 将指定类型的新内容控件添加到活动文档中，并返回表示新内容控件的 **[ContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Item) | 返回 **[ContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/obj)** 对象，该对象表示文档中的内容控件集合内的指定内容控件。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象，该对象代表 WPS 应用程序。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Count) | 返回 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合中的项目数。只读 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Creator) | 返回一个 32 位的整数，该整数表示在其中创建加载项的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **ContentControls** 对象的父对象。 |