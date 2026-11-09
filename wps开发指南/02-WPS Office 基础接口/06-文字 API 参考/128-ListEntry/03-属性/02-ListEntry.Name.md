# ListEntry.Name

返回或设置指定对象的名称。 **String** 类型，可读写。



## 语法

express.**Name**

express   一个代表 **ListEntry** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示名为“DropDown1”的下拉型窗体域中所有项目的名称。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item("DropDown1").DropDown.ListEntries
    for (let i = 1; i <= listEntries.Count; i++) {
        alert(listEntries.Item(i).Name)
    }
}
```


```JavaScript
/*本示例设置所选的第一个下拉型窗体域中最后一个项目的名称。*/
function test() {
    let listEntries = Selection.FormFields.Item(1).DropDown.ListEntries
    listEntries.Item(listEntries.Count).Name = "example"
}
```
