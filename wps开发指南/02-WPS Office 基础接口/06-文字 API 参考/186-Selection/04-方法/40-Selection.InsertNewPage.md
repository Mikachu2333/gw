# Selection.InsertNewPage

在插入点的位置插入一个新页面。



## 语法

express.**InsertNewPage()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例在插入点的位置插入一个新页面。*/
function test() {
    Selection.InsertNewPage()
}
```


```JavaScript
/*本示例在活动文档第二个段落的起始位置插入一个新页面。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.Collapse(wdCollapseStart)
    Selection.InsertNewPage()
}
```
