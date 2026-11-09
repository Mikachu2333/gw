# DocumentFields.DefaultSorting

设置 **DocumentFields** 集合的排序方式，可以通过枚举值 **[WdDocumentFieldSortBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDocumentFieldSortBy)** 指定。可读/写



## 语法

express.**DefaultSorting**

express   一个代表 **DocumentFields** 对象的变量。

## 类型

WdDocumentFieldSortBy

## 示例


```JavaScript
/*本示例显示活动文档上公文域的排序方式是否为wdDocumentFieldSortByName。*/
function test() {
    alert(ActiveDocument.DocumentFields.DefaultSorting == wdDocumentFieldSortByName)
}
```


```JavaScript
/*本示例将第一个文档上公文域的排序方式设置为wdDocumentFieldSortByLocation。*/
function test() {
    Documents.Item(1).DocumentFields.DefaultSorting = wdDocumentFieldSortByLocation
}
```
