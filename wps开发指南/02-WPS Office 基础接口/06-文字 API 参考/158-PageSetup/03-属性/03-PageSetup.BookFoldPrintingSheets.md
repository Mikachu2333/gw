# PageSetup.BookFoldPrintingSheets

返回或设置一个 **Long** 类型的值，该值代表每一本小册子的页数。 **Boolean** 类型，可读写。



## 语法

express.**BookFoldPrintingSheets**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动文档转换为以 16 页形式打印的小册子。*/
function test() {
    let pagesetup = ActiveDocument.PageSetup
    pagesetup.BookFoldPrinting = true
    pagesetup.BookFoldPrintingSheets = 16
}
```


```JavaScript
/*本示例显示第一个文档的小册子的打印形式页数。*/
function test() {
    alert(Documents.Item(1).PageSetup.BookFoldPrintingSheets)
}
```
