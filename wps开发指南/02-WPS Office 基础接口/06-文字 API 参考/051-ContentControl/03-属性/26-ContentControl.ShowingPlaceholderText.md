# ContentControl.ShowingPlaceholderText

返回 **Boolean** 值，该值指示是否显示内容控件的占位符文本。只读。



## 语法

express.**ShowingPlaceholderText**

express   一个代表 **ContentControl** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在活动文档中插入新的下拉列表内容控件，设置标题和占位符文本并在列表中添加几个新的项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Add(wdContentControlDropdownList)
    contentControl.Title = "My Favorite Animal"
    if (contentControl.ShowingPlaceholderText) {
        contentControl.SetPlaceholderText(null, null, "Select your favorite animal ")
    }
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
/*本示例显示所选内容中第一个内容控件是否展示占位符文本。*/
function test() {
    let control = Selection.ContentControls.Item(1)
    alert(control.ShowingPlaceholderText)
}
```
