# TableOfContents.RightAlignPageNumbers

如果页码与目录的右边距对齐，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**RightAlignPageNumbers**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一个目录的页码设置为右对齐。*/
function test() {
    if (ActiveDocument.TablesOfContents.Count >= 1) {
        let tableOfContents = ActiveDocument.TablesOfContents.Item(1)
        tableOfContents.IncludePageNumbers = true
        tableOfContents.RightAlignPageNumbers = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上最后一个目录的页码是否与右边距对齐。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).RightAlignPageNumbers)
}
```
