# Cell.Tables

返回一个 **[Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/obj)** 集合，该集合代表指定表格单元格中的所有嵌套表格。只读。



## 语法

express.**Tables**

express   一个代表 **Cell** 对象的变量。

## 类型

Tables

## 说明


有关返回集合的单个成员的信息，请参阅从集合中返回对象。



## 示例


```JavaScript
/*本示例在新文档中创建一张3*3的表格，在第一个单元格中添加一个嵌套的3*3表格*/
function test() {
    let document = Application.Documents.Add()
    let table = document.Tables.Add(document.Range(0, 0), 3, 3)
    table.Cell(1, 1).Range.Tables.Add(table.Cell(1, 1).Range, 3, 3)
}
```


```JavaScript
/*本示例判断如果活动文档上表格数量大于0，则显示第一张表格的第一个单元格内嵌套的表格数量。*/
function test() {
    if (Application.ActiveDocument.Tables.Count > 0) {
        let table = Application.ActiveDocument.Tables.Item(1)
        let tables = table.Cell(1, 1).Tables
        alert("单元格中嵌套的表格数： " + tables.Count)
    } else {
        alert("活动文档中没有表格")
    }
}
```
