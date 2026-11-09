# ContentControlListEntry.MoveUp

将下拉列表或组合框内容控件中的项上移一项，以使它位于最初在它前面的某项之前。



## 语法

express.**MoveUp()**

express   一个代表 **ContentControlListEntry** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例上移下拉列表或组合框内容控件中的最后一项，使它成为第一项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    if (contentControl.Type == wdContentControlComboBox || contentControl.Type == wdContentControlDropdownList) {
        let listEntry = contentControl.DropdownListEntries.Item(contentControl.DropdownListEntries.Count)
        for (let i = 1; i <= contentControl.DropdownListEntries.Count; i++) {
            listEntry.MoveUp()
        }
    }
}
```


```JavaScript
/*本示例将第一个文档的第一个内容控件中的第四项上移一项。*/
function test() {
    let listEntry = Documents.Item(1).ContentControls.Item(1).DropdownListEntries.Item(4)
    listEntry.MoveUp()
}
```
