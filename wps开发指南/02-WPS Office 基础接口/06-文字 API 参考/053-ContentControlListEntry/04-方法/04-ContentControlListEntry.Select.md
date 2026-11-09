# ContentControlListEntry.Select

选择下拉列表或组合框内容控件中的列表条目，并将内容控件的文本设置为该项的值。



## 语法

express.**Select()**

express   一个代表 **ContentControlListEntry** 对象的变量。

## 返回值

void

## 示例


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


```JavaScript
/*本示例选择第一个文档的第一个内容控件中的第三项。*/
function test() {
    let listEntry = Documents.Item(1).ContentControls.Item(1).DropdownListEntries.Item(3)
    listEntry.Select()
}
```
