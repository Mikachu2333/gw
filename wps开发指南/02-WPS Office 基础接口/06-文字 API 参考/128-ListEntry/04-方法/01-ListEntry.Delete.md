# ListEntry.Delete

删除指定的列表项目。



## 语法

express.**Delete()**

express   一个代表 **ListEntry** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除所选的第一个下拉型窗体域中名为“example_1”的项目。*/
function test() {
    let listEntries = Selection.FormFields.Item(1).DropDown.ListEntries
    listEntries.Item("example_1").Delete()
}
```


```JavaScript
/*本示例删除活动文档上名为“DropDown1”的下拉型窗体域中第三个项目。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item("DropDown1").DropDown.ListEntries
    listEntries.Item(3).Delete()
}
```
