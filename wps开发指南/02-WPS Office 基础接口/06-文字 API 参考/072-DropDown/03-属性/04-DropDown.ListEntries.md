# DropDown.ListEntries

返回一个 **ListEntries** 集合，该集合代表 **DropDown** 对象中所有项。



## 语法

express.**ListEntries**

express   一个代表 **DropDown** 对象的变量。

## 类型

ListEntries

## 示例


```JavaScript
/*本示例显示名为“DropDown1”的下拉型窗体域中当前选中项的名称。*/
function test() {
    let dropDown = ActiveDocument.FormFields.Item("DropDown1").DropDown
    let name = dropDown.ListEntries.Item(dropDown.Value).Name
    alert(name)
}
```


```JavaScript
/*本示例在活动下拉型窗体域中检索项的总数（应该先保护文档的窗体）,如果有两个或更多的项，将第二项设置为活动项。*/
function test() {
    let formField = Selection.FormFields.Item(1)
    if (formField.Type == wdFieldFormDropDown) {
        let num = formField.DropDown.ListEntries.Count
        if (num >= 2) {
            formField.DropDown.Value = 2
        }
    }
}
```
