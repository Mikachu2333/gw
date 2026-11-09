# TableOfContents.Update

更新目录中显示的项。



## 语法

express.**Update()**

express   一个代表 **TableOfContents** 对象的变量。

## 返回值

void

## 说明


可用 **UpdatePageNumbers** 方法更新目录中项目的页码。



## 示例


```JavaScript
/*本示例将活动文档上第一个目录中项目及其页码之间的字符设置为划线，然后更新该目录中显示的项。*/
function test() {
    let tableOfContent = ActiveDocument.TablesOfContents.Item(1)
    tableOfContent.TabLeader = wdTabLeaderDashes
    tableOfContent.Update()
}
```


```JavaScript
/*本示例将第一个文档上最后一个目录设置为不包含页码，然后更新该目录中显示的项。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    tablesOfContents.Item(tablesOfContents.Count).IncludePageNumbers = false
    tablesOfContents.Item(tablesOfContents.Count).Update()
}
```
