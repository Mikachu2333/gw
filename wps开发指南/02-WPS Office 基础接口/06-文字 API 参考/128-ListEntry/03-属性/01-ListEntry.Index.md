# ListEntry.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **ListEntry** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示所选的第一个下拉型窗体域中名为“example_1”的项目的索引。*/
function test() {
    let listEntries = Selection.FormFields.Item(1).DropDown.ListEntries
    alert(listEntries.Item("example_1").Index)
}
```


```JavaScript
/*本示例显示活动文档上名为“DropDown1”的下拉型窗体域中最后一个项目的索引。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item("DropDown1").DropDown.ListEntries
    alert(listEntries.Item(listEntries.Count).Index)
}
```
