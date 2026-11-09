# ContentControl.DropdownListEntries

返回 **ContentControlListEntries** 集合，该集合表示下拉列表内容控件或组合框内容控件中的项。只读。



## 语法

express.**DropdownListEntries**

express   一个代表 **ContentControl** 对象的变量。

## 类型

ContentControlListEntries

## 示例


```JavaScript
/*本示例在活动文档中插入新的下拉列表内容控件，设置标题和占位符文本并在列表中添加几个新项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Add(wdContentControlDropdownList)
    contentControl.Title = "My Favorite Animal"
    contentControl.SetPlaceholderText(null, null, "Select your favorite animal ")

    // List entries
    contentControl.DropdownListEntries.Add("Cat")
    contentControl.DropdownListEntries.Add("Dog")
    contentControl.DropdownListEntries.Add("Horse")
    contentControl.DropdownListEntries.Add("Monkey")
    contentControl.DropdownListEntries.Add("Snake")
    contentControl.DropdownListEntries.Add("Other")
}
```


```JavaScript
/*本示例显示所选内容中第一个（下拉列表）内容控件中所有项的展示文本和值。*/
function test() {
    let listEntries = Selection.ContentControls.Item(1).DropdownListEntries
    let str = ""
    for (let i = 1; i <= listEntries.Count; i++) {
        str += `下拉列表的列表项的显示文本：${listEntries.Item(i).Text}\t 值：${listEntries.Item(i).Value}\n`
    }
    alert(str)
}
```
