# ListEntries.Clear

删除下拉窗体域中的所有项目。



## 语法

express.**Clear()**

express   一个代表 **ListEntries** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除名为“example.docx”的文档中名为“DropDown1”的下拉型窗体域的所有列表项。*/
function test() {
    Documents.Item("example.docx").FormFields.Item("DropDown1").DropDown.ListEntries.Clear()
}
```


```JavaScript
/*本示例清除所选的第一个下拉型窗体域中所有项目。*/
function test() {
    Selection.FormFields.Item(1).DropDown.ListEntries.Clear()
}
```
