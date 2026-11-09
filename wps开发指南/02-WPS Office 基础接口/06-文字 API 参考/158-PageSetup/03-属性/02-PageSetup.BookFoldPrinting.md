# PageSetup.BookFoldPrinting

如果为 **True** ，则 WPS 将文档打印为一系列小册子，这样可以折叠打印的页面并以书籍的形式阅读。 **Boolean** 类型，可读写。



## 语法

express.**BookFoldPrinting**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档转换为以一页四开的形式打印的小册子。*/
function test() {
    let pagesetup = ActiveDocument.PageSetup
    pagesetup.BookFoldPrinting = true
    pagesetup.BookFoldPrintingSheets = 4
}
```


```JavaScript
/*本示例切换第一个文档的小册子打印形式。*/
function test() {
    Documents.Item(1).PageSetup.BookFoldPrinting = !Documents.Item(1).PageSetup.BookFoldPrinting
}
```
