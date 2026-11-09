# ContentControl.Title

返回或设置 **String** 值，该值表示内容控件的标题。可读/写。



## 语法

express.**Title**

express   一个代表 **ContentControl** 对象的变量。

## 类型

string

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
/*本示例显示活动文档上第一个内容控件的标题。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(1)
    alert(control.Title)
}
```
