# ListEntries.Item

返回集合中的单个 **ListEntry** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ListEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

ListEntry

## 示例


```JavaScript
/*本示例在活动文档中插入一个下拉型窗体域，并将 Black 和 Green 项目添加到窗体域，然后显示第一个项目的名称。*/
function test() {
    let formField = ActiveDocument.FormFields.Add(Selection.Range, wdFieldFormDropDown)
    let listEntries = formField.DropDown.ListEntries
    listEntries.Add("Black")
    listEntries.Add("Green")
    alert(listEntries.Item(1).Name)
}
```


```JavaScript
/*本示例删除所选的第一个下拉型窗体域中名为“example_1”的项目。*/
function test() {
    let listEntries = Selection.FormFields.Item(1).DropDown.ListEntries
    listEntries.Item("example_1").Delete()
}
```
