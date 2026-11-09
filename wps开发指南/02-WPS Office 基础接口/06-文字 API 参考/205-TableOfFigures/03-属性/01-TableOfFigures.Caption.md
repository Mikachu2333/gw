# TableOfFigures.Caption

返回或设置标识图表目录中的项目的标签。 **String** 类型，可读写。



## 语法

express.**Caption**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

string

## 说明


该属性对应于 TOC 域的 \\c 开关。



## 示例


```JavaScript
/*本示例插入一个表格题注，然后将第一个图表目录的题注改为“表格”。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.Range.InsertCaption("Table")
    if (ActiveDocument.TablesOfFigures.Count >= 1) {
        ActiveDocument.TablesOfFigures.Item(1).Caption = "Table"
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个图表目录的题注。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    alert(tableOfFigures.Caption)
}
```
