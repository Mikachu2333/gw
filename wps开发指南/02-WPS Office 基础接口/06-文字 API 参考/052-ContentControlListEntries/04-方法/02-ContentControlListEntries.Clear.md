# ContentControlListEntries.Clear

从下拉列表或组合框内容控件中清除所有项。



## 语法

express.**Clear()**

express   一个代表 **ContentControlListEntries** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将清除活动文档的第一个内容控件中的所有项。本示例假定活动文档中的第一个内容控件是下拉列表或组合框。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    contentControl.DropdownListEntries.Clear()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个内容控件的类型为wdContentControlComboBox，则清除该内容控件中所有项。*/
function test() {
    let contentControl = Documents.Item(1).ContentControls.Item(1)
    if (contentControl.Type == wdContentControlComboBox) {
        contentControl.DropdownListEntries.Clear()
    }
}
```
