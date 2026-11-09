# TableOfContents.UpdatePageNumbers

更新指定的目录中项目的页码。



## 语法

express.**UpdatePageNumbers()**

express   一个代表 **TableOfContents** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例在插入点插入分页符，然后更新活动文档中第一个目录的页码。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.InsertBreak(wdPageBreak)
    ActiveDocument.TablesOfContents.Item(1).UpdatePageNumbers()
}
```


```JavaScript
/*本示例更新第一个文档上所有目录中项目的页码。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    for (let i = 1; i <= tablesOfContents.Count; i++) {
        tablesOfContents.Item(i).UpdatePageNumbers()
    }
}
```
