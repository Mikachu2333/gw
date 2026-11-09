# TableOfFigures.Range

返回一个 **Range** 对象，该对象代表指定图表目录中所含的文档部分。



## 语法

express.**Range**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动文档上第一个图表目录的文档部分的文本。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    alert(tableOfFigures.Range.Text)
}
```


```JavaScript
/*本示例选中第一个文档上第二个图表目录的文档部分。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    tableOfFigures.Range.Select()
}
```
