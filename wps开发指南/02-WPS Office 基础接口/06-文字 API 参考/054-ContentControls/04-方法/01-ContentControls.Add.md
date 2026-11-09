# ContentControls.Add

将指定类型的新内容控件添加到活动文档中，并返回表示新内容控件的 **[ContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/obj)** 对象。



## 语法

express.**Add(Type, Range)**

express   一个代表 **ContentControls** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | WdContentControlType | 指定要插入活动文档中的内容控件的类型。如果省略它，WPS 将插入 RTF 内容控件。 |
| Range | 可选 | any | 指定内容控件在活动文档中的放置位置。如果省略它， WPS 会将内容控件放在插入点所在位置，或者替换当前所选内容。 |

## 返回值

ContentControl

## 说明


只能在 RTF 内容控件、生成块库内容控件和组内容控件中嵌套内容控件。如果插入点或当前所选项在不同类型的内容控件的内部，则此方法将引发错误。在这种情况下，可以移动插入点，也可以使用 *Range* 参数来指定文档内的位置。



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


```JavaScript
/*本示例在第一个文档中插入组合框内容控件，并在列表中添加几个项。*/
function test() {
    let contentControl = Documents.Item(1).ContentControls.Add(wdContentControlComboBox, Selection.Range)
    contentControl.DropdownListEntries.Add("张三")
    contentControl.DropdownListEntries.Add("李四")
}
```
