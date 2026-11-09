# ListEntries 对象

 **[ListEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntry/obj)** 对象的集合，这些对象代表下拉型窗体域中的所有项目。

## 说明


使用 **ListEntries** 属性可返回 **ListEntries** 集合。


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
使用 **Add** 方法可向下拉型窗体域添加项目。



```JavaScript
/*本示例在活动文档中插入一个下拉型窗体域，然后将 Red、Blue 和 Green 项目添加到窗体域。*/
function test() {
    let formField = ActiveDocument.FormFields.Add(Selection.Range, wdFieldFormDropDown)
    let listEntries = formField.DropDown.ListEntries
    listEntries.Add("Red")
    listEntries.Add("Blue")
    listEntries.Add("Green")
}
```
使用 **ListEntries** (Index)（其中 Index 是列表条目名称或索引号）可返回单个 **ListEntry** 对象。索引号代表项目在下拉型窗体域中的位置（第一项的索引号是 1）。



```JavaScript
/*本示例删除活动文档上名为“DropDown1”的下拉型窗体域中名为“example_1”的项目。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item("DropDown1").DropDown.ListEntries
    listEntries.Item("example_1").Delete()
}
```


```JavaScript
/*本示例显示活动文档上名为“DropDown1”的下拉型窗体域中第一个项目的名称。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item("DropDown1").DropDown.ListEntries
    alert(listEntries.Item(1).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntries/member/Add) | 返回一个 **ListEntry** 对象，该对象代表添加到下拉型窗体域中的项。 |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntries/member/Clear) | 删除下拉窗体域中的所有项目。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntries/member/Item) | 返回集合中的单个 **ListEntry** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListEntries/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中列表条目的数量。只读。 |