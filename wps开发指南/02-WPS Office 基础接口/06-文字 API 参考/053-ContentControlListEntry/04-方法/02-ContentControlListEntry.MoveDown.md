# ContentControlListEntry.MoveDown

将下拉列表或组合框内容控件中的项下移一项，以使它位于最初在它后面的某项之后。



## 语法

express.**MoveDown()**

express   一个代表 **ContentControlListEntry** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例下移第一项，以使它成为下拉列表或组合框内容控件中项列表的最后一项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    if (contentControl.Type == wdContentControlComboBox || contentControl.Type == wdContentControlDropdownList) {
        let listEntry = contentControl.DropdownListEntries.Item(1)
        for (let i = 1; i <= contentControl.DropdownListEntries.Count; i++) {
            listEntry.MoveDown()
        }
    }
}
```


```JavaScript
/*本示例将第一个文档的第一个内容控件中的第二项下移一项。*/
function test() {
    let listEntry = Documents.Item(1).ContentControls.Item(1).DropdownListEntries.Item(2)
    listEntry.MoveDown()
}
```
