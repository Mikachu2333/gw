# Document.StyleSortMethod

返回或设置一个 **[WdStyleSort](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdStyleSort)** 常量，该常量代表要在对 **“样式”** 任务窗格中的样式进行排序时使用的排序方法。可读写。



## 语法

express.**StyleSortMethod**

express   一个代表 **Document** 对象的变量。

## 类型

WdStyleSort

## 示例


```JavaScript
/*本示例显示第一个文档上对“样式”任务窗格中的样式进行排序时使用的排序方法是否为wdStyleSortByName。*/
function test() {
    alert(Documents.Item(1).StyleSortMethod == wdStyleSortByName)
}
```


```JavaScript
/*本示例将活动文档上对“样式”任务窗格中的样式进行排序时使用的排序方法设置为wdStyleSortByFont。*/
function test() {
    ActiveDocument.StyleSortMethod = wdStyleSortByFont
}
```
