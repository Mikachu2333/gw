# TableOfContents.HidePageNumbersInWeb

返回或设置向网站发布时是否隐藏目录或图表目录中的页码。 **Boolean** 类型，可读写。



## 语法

express.**HidePageNumbersInWeb**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置将活动文档向网站发布时隐藏第一个目录的页码。*/
function test() {
    ActiveDocument.TablesOfContents.Item(1).HidePageNumbersInWeb = true
}
```


```JavaScript
/*本示例显示将第一个文档向网站发布时是否隐藏最后一个目录的页码。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).HidePageNumbersInWeb)
}
```
