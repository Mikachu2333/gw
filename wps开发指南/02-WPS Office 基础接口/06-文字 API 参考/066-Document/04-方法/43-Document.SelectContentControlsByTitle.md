# Document.SelectContentControlsByTitle

返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中具有 *Title* 参数中指定标题的所有内容控件。只读。



## 语法

express.**SelectContentControlsByTitle(Title)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Title | 必选 | string | 要返回的内容控件的标题。 |

## 返回值

ContentControls

## 示例


```JavaScript
/*本示例显示活动文档中标题为“example”的第二个内容控件展示日期的格式。*/
function test() {
    let contentControl = ActiveDocument.SelectContentControlsByTitle("example").Item(2)
    alert(contentControl.DateDisplayFormat)
}
```


```JavaScript
/*本示例显示第一个文档上标题为“example”的第一个（下拉列表）内容控件中所有项的展示文本和值。*/
function test() {
    let listEntries = Documents.Item(1).SelectContentControlsByTitle("example").Item(1).DropdownListEntries
    let str = ""
    for (let i = 1; i <= listEntries.Count; i++) {
        str += `下拉列表的列表项的显示文本：${listEntries.Item(i).Text}\t 值：${listEntries.Item(i).Value}\n`
    }
    alert(str)
}
```
