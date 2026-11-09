# ContentControlListEntry.Text

返回或设置 **String** 值，该值表示下拉列表或组合框内容控件中的某个列表项的显示文本。可读/写。



## 语法

express.**Text**

express   一个代表 **ContentControlListEntry** 对象的变量。

## 类型

string

## 说明


列表条目必须有唯一的显示名称。如果试图将 **Text** 属性更改为条目列表中已存在的字符串，将引发运行时错误。



## 示例


```JavaScript
/*本示例将每个列表项的显示文本中的第一个字符（如果是小写）变为大写。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ContentControls.Count; i++) {
        let contentControl = ActiveDocument.ContentControls.Item(i)
        if (contentControl.Type == wdContentControlComboBox || contentControl.Type == wdContentControlDropdownList) {
            for (let j = 1; j <= contentControl.DropdownListEntries.Count; j++) {
                let listEntry = contentControl.DropdownListEntries.Item(j)
                let strFirst = listEntry.Text.substr(0, 1)
                if (strFirst == strFirst.toLowerCase()) {
                    listEntry.Text = strFirst.toUpperCase() + listEntry.Text.slice(1)
                }
            }
        }
    }
}
```


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
