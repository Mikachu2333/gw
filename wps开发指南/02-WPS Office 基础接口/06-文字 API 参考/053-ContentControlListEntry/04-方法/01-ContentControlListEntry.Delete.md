# ContentControlListEntry.Delete

删除组合框或下拉列表内容控件中的指定项。



## 语法

express.**Delete()**

express   一个代表 **ContentControlListEntry** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果项的显示文本为“张三”，则删除该下拉列表项。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ContentControls.Count; i++) {
        let contentControl = ActiveDocument.ContentControls.Item(i)
        if (contentControl.Type == wdContentControlComboBox || contentControl.Type == wdContentControlDropdownList) {
            for (let j = 1; j <= contentControl.DropdownListEntries.Count; j++) {
                let listEntry = contentControl.DropdownListEntries.Item(j)
                if (listEntry.Text == "张三") {
                    listEntry.Delete()
                }
            }
        }
    }
}
```


```JavaScript
/*本示例删除活动文档的第一个内容控件中的第二项。*/
function test() {
    let listEntry = ActiveDocument.ContentControls.Item(1).DropdownListEntries.Item(2)
    listEntry.Delete()
}
```
