# PageSetup.TextColumns

返回一个 **[TextColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/obj)** 集合，该集合代表指定 **PageSetup** 对象的文本栏集合。



## 语法

express.**TextColumns**

express   一个代表 **PageSetup** 对象的变量。

## 类型

TextColumns

## 说明


集合中应始终至少包含一个文本列。在创建新的文本列时，会向集合添加一列。



## 示例


```JavaScript
/*本示例为活动文档中的第一节创建四个等宽的文本栏。*/
function test() {
    let textcolumns = ActiveDocument.Sections.Item(1).PageSetup.TextColumns
    textcolumns.SetCount(3)
    textcolumns.Add(null, null, true)
}
```


```JavaScript
/*本示例创建一个具有两个文本栏的文档。第一个文本栏宽 1.5 英寸，第二个文本栏宽 3 英寸。*/
function test() {
    let document = Documents.Add()
    let textcolumns = document.PageSetup.TextColumns
    textcolumns.SetCount(1)
    textcolumns.Add(InchesToPoints(3), null, false)
    let textcolumn = document.PageSetup.TextColumns.Item(1)
    textcolumn.Width = InchesToPoints(1.5)
    textcolumn.SpaceAfter = InchesToPoints(0.5)
}
```
