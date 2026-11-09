# TableOfContents.IncludePageNumbers

如果目录中包含页码，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**IncludePageNumbers**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动文档中第一个目录设置格式，以包含右对齐的页码。*/
function test() {
    if (ActiveDocument.TablesOfContents.Count >= 1) {
        let tableOfContents = ActiveDocument.TablesOfContents.Item(1)
        tableOfContents.IncludePageNumbers = true
        tableOfContents.RightAlignPageNumbers = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上最后一个目录中是否包含页码。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).IncludePageNumbers)
}
```
