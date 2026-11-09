# TableOfFigures.UpdatePageNumbers

更新图表目录中项目的页码。



## 语法

express.**UpdatePageNumbers()**

express   一个代表 **TableOfFigures** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例更新 example.docx 文档中的所有图表目录的项目的页码。*/
function test() {
    let tablesOfFigures = Documents.Item("example.docx").TablesOfFigures
    for (let i = 1; i <= tablesOfFigures.Count; i++) {
        tablesOfFigures.Item(i).UpdatePageNumbers()
    }
}
```


```JavaScript
/*本示例更新第一个文档上第一个图表目录中项目的页码。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(1)
    tableOfFigures.UpdatePageNumbers()
}
```
