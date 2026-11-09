# ListEntry 对象

代表下拉型窗体域内的一个项目。 **ListEntry** 对象是 **ListEntries** 集合的一个成员。 **[ListEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntries/obj)** 包括下拉型窗体域中的所有项目。

## 说明


使用 **ListEntries** (_Index_) 可返回一个 **ListEntry** 对象，其中 _Index_ 是列表项名称或索引号。索引号代表项目在下拉型窗体域中的位置（第一项的索引号是 1）。


## 示例


```JavaScript
/*本示例删除活动文档上名为“DropDown1”的下拉型窗体域中名为“example_1”的项目。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item("DropDown1").DropDown.ListEntries
    listEntries.Item("example_1").Delete()
}
```


```JavaScript
/*本示例显示名为“DropDown1”的下拉型窗体域中第一个项目的名称。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item("DropDown1").DropDown.ListEntries
    alert(listEntries.Item(1).Name)
}
```


```JavaScript
/*本示例在活动文档中插入一个下拉型窗体域，并将 Red、Blue 和 Green 项目添加到窗体域，然后显示第一个项目的名称。*/
function test() {
    let formField = ActiveDocument.FormFields.Add(Selection.Range, wdFieldFormDropDown)
    let listEntries = formField.DropDown.ListEntries
    listEntries.Add("Red")
    listEntries.Add("Blue")
    listEntries.Add("Green")
    alert(listEntries.Item(1).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntry/member/Delete) | 删除指定的列表项目。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntry/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntry/member/Name) | 返回或设置指定对象的名称。 **String** 类型，可读写。 |