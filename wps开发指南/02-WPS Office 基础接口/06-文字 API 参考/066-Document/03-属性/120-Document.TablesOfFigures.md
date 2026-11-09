# Document.TablesOfFigures

返回一个 **[TablesOfFigures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfFigures/obj)** 集合，该集合代表指定文档中的图表目录。只读。



## 语法

express.**TablesOfFigures**

express   一个代表 **Document** 对象的变量。

## 类型

TablesOfFigures

## 示例


```JavaScript
/*本示例在活动文档的插入点位置添加图表目录。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    ActiveDocument.TablesOfFigures.Add(Selection.Range, "图")
}
```


```JavaScript
/*本示例更新“example.docx”文档中第一个图表目录的内容。*/
function test() {
    Documents.Item("example.docx").TablesOfFigures.Item(1).Update()
}
```
