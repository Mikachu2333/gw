# ListEntries.Add

返回一个 **ListEntry** 对象，该对象代表添加到下拉型窗体域中的项。



## 语法

express.**Add(Name, Index)**

express   一个代表 **ListEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 下拉型窗体域项的名称。 |
| Index | 可选 | any | 代表项在列表中的位置的数值。 |

## 返回值

ListEntry

## 示例


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


```JavaScript
/*本示例为活动文档上第一个下拉型窗体域添加项目。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item(1).DropDown.ListEntries
    for (let i = 4; i <= 10; i++) {
        listEntries.Add("example_" + i, i)
    }
}
```
