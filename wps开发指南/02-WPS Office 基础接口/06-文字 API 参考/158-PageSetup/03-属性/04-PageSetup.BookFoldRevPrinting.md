# PageSetup.BookFoldRevPrinting

如果为 **True** ，则 WPS 反转用于双向或亚洲语言文档的书籍折页打印的打印顺序。 **Boolean** 类型，可读写。



## 语法

express.**BookFoldRevPrinting**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将从左向右的书籍打印切换为从右向左，并用于以一页 16 开打印的双向或亚洲语言文档。*/
function test() {
    let pagesetup = ActiveDocument.PageSetup
    pagesetup.BookFoldRevPrinting = true
    pagesetup.BookFoldPrintingSheets = 16
}
```


```JavaScript
/*本示例显示第一个文档页面设置的BookFoldRevPrinting属性值。*/
function test() {
    alert(Documents.Item(1).PageSetup.BookFoldRevPrinting)
}
```
