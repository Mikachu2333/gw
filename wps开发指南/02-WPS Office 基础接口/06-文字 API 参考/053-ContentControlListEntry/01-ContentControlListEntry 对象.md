# ContentControlListEntry 对象

 **ContentControlListEntry** 对象表示下拉列表或组合框内容控件中的列表项。 **ContentControlListEntry** 对象是 **ContentControl** 对象的 **[ContentControlListEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntries/obj)** 集合的成员。

## 说明


使用 **ContentControlListEntries** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntries/member/Add)** 方法可以创建新的 **ContentControlListEntry** 对象。通过使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntries/member/Item)** 方法或 **[DropdownListEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/DropdownListEntries)** (_Index_)（其中 _Index_ 是内容控件列表项的序号位置），可以访问 **ContentControlListEntries** 集合中的单个列表项。

列表条目必须有唯一的显示名。试图添加已存在的列表项会引发运行时错误。


## 示例


```JavaScript
/*本示例使用 Add 方法在新的下拉列表内容控件，添加几个列表项，然后使用 Item 方法访问列表中的第三项并更改显示文本。*/
function test() {
    let contentControl = Application.ActiveDocument.ContentControls.Add(wdContentControlDropdownList)

    // List items
    contentControl.DropdownListEntries.Add("Cat")
    contentControl.DropdownListEntries.Add("Dog")
    contentControl.DropdownListEntries.Add("Equine")
    contentControl.DropdownListEntries.Add("Monkey")
    contentControl.DropdownListEntries.Add("Snake")
    contentControl.DropdownListEntries.Add("Other")

    let listEntry = contentControl.DropdownListEntries.Item(3)
    listEntry.Text = "Horse"
}
```
使用 **[MoveUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/MoveUp)** 和 **[MoveDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/MoveDown)** 方法可以重新安排各项在下拉列表中的位置。



```JavaScript
/*本示例下移第一项，使它成为列表中的最后一项，然后上移最后一项，使它成为列表中的第一项。*/
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
使用 **[Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Select)** 方法可以编程方式选择内容控件列表项。



```JavaScript
/*本示例在活动文档中插入下拉列表内容控件，设置标题和占位符文本并在列表中添加几个项，然后选择输入的最后一项。*/
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

    let listEntry = contentControl.DropdownListEntries.Add("Other")
    listEntry.Select()
}
```
使用 **[Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Text)** 属性可以设置内容控件列表项的显示文本，使用 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Value)** 属性可以设置一个随后可能用于处理窗体的编程值。例如，可以使用内容控件下拉列表作为产品列表。 **Text** 属性可能包含产品的名称，即用户很容易识别和理解的显示名称。 **Value** 属性可能包含与数据库中产品编号对应的产品编号。然后，您可以使用 **Value** 属性中的产品编号来在数据库中查找相应产品信息。此外，如果内容控件映射到数据存储区中的 XML 数据，则 **Value** 属性的值就是发送到自定义 XML 数据的值。



```JavaScript
/*本示例基于显示文本的内容来设置列表项的值。*/
function test() {
    let contentControl = Application.ActiveDocument.ContentControls.Item(1)
    for (let i = 1; i < contentControl.DropdownListEntries.Count; i++) {
        let listEntry = contentControl.DropdownListEntries.Item(i)
        if (listEntry.Text !== "Other") {
            let text = listEntry.Text
            listEntry.Value = "My favorite animal is the " + text + "."
        }
    }
}
```
使用 **[Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Delete)** 方法可以从内容控件下拉列表或组合框中删除项目。



```JavaScript
/*本示例判断如果项的显示文本为“Other”，则删除该下拉列表项。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ContentControls.Count; i++) {
        let contentControl = ActiveDocument.ContentControls.Item(i)
        if (contentControl.Type == wdContentControlComboBox || contentControl.Type == wdContentControlDropdownList) {
            for (let j = 1; j <= contentControl.DropdownListEntries.Count; j++) {
                let listEntry = contentControl.DropdownListEntries.Item(j)
                if (listEntry.Text == "Other") {
                    listEntry.Delete()
                }
            }
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Delete) | 删除组合框或下拉列表内容控件中的指定项。 |
| [MoveDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/MoveDown) | 将下拉列表或组合框内容控件中的项下移一项，以使它位于最初在它后面的某项之后。 |
| [MoveUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/MoveUp) | 将下拉列表或组合框内容控件中的项上移一项，以使它位于最初在它前面的某项之前。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Select) | 选择下拉列表或组合框内容控件中的列表条目，并将内容控件的文本设置为该项的值。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Index) | 返回或设置 **Long** 值，该值表示内容控件列表项在列表项集合中的序号位置。可读/写。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Text) | 返回或设置 **String** 值，该值表示下拉列表或组合框内容控件中的某个列表项的显示文本。可读/写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControlListEntry/member/Value) | 返回或设置 **String** 值，该值表示某项在下拉列表或组合框内容控件中的编程值。可读/写。 |