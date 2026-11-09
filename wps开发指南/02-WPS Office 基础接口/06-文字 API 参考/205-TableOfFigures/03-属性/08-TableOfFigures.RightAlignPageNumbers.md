# TableOfFigures.RightAlignPageNumbers

如果页码与图表目录的右边缘对齐，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**RightAlignPageNumbers**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一个图表目录的页码设置为右对齐。*/
function test() {
    if (ActiveDocument.TablesOfFigures.Count >= 1) {
        let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
        tableOfFigures.IncludePageNumbers = true
        tableOfFigures.RightAlignPageNumbers = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个图表目录的页码与右边缘是否对齐。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    alert(tableOfFigures.RightAlignPageNumbers)
}
```
