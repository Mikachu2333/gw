# TableOfFigures.IncludePageNumbers

如果图表目录中包含页码，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**IncludePageNumbers**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动文档中第一个图表目录设置格式，以包含右对齐的页码。*/
function test() {
    if (ActiveDocument.TablesOfFigures.Count >= 1) {
        let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
        tableOfFigures.IncludePageNumbers = true
        tableOfFigures.RightAlignPageNumbers = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个图表目录是否包含页码。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    alert(tableOfFigures.IncludePageNumbers)
}
```
