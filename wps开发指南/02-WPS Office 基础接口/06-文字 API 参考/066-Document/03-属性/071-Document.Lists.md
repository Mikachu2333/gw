# Document.Lists

返回一个 **[Lists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Lists/obj)** 集合，该集合含有指定文档中的所有项目符号和编号列表。只读。



## 语法

express.**Lists**

express   一个代表 **Document** 对象的变量。

## 类型

Lists

## 示例


```JavaScript
/*本示例设置所选内容的格式为编号列表，然后显示活动文档中列表数。*/
function test() {
    Selection.Range.ListFormat.ApplyListTemplate(ListGalleries.Item(wdNumberGallery).ListTemplates.Item(2))
    alert(`This document has ${ActiveDocument.Lists.Count} lists.`)
}
```


```JavaScript
/*本示例设置活动文档中第三个列表的格式为默认的项目符号列表格式。如果该列表已设置为项目符号列表格式，该示例清除此格式。*/
function test() {
    if (ActiveDocument.Lists.Count >= 3) {
        ActiveDocument.Lists.Item(3).Range.ListFormat.ApplyBulletDefault()
    }
}
```


```JavaScript
/*本示例显示活动文档的每一列表的项目数。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Lists.Count; i++) {
        alert(`List ${i} has ${ActiveDocument.Lists.Item(i).CountNumberedItems()} items.`)
    }
}
```
