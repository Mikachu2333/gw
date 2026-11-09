# PageNumbers.ShowFirstPageNumber

如果在节中第一页显示页码，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowFirstPageNumber**

express   一个代表 **PageNumbers** 对象的变量。

## 类型

boolean

## 说明


将该属性设置为 **True** ，节中各页将会自动添加页码。



## 示例


```JavaScript
/*本示例显示是否在活动文档的第一节的第一页的主页眉中展示页码。*/
function test() {
    let pageNumbers = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers
    alert("This document shows numbers on the first page - " + pageNumbers.ShowFirstPageNumber)
}
```


```JavaScript
/*本示例将活动文档的第一节的第一页的页眉的页码设置为可见。*/
function test() {
    ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.ShowFirstPageNumber = true
}
```
