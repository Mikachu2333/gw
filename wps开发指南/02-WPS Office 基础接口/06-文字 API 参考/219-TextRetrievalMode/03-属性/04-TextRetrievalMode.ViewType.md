# TextRetrievalMode.ViewType

返回或设置 **TextRetrievalMode** 对象的视图。 **WdViewType** 类型，可读写。



## 语法

express.**ViewType**

express   一个代表 **TextRetrievalMode** 对象的变量。

## 类型

WdViewType

## 说明


更改 **TextRetrievalMode** 对象的视图不会更改文档在屏幕上的显示。该对象确定对某区域进行检索时包括文档中的何种字符。



## 示例


```JavaScript
/*此示例将文本检索视图设置为大纲视图，然后显示活动文档的内容。请注意，仅检索大纲视图中显示的文本。*/
function test() {
    let range = ActiveDocument.Content
    range.TextRetrievalMode.ViewType = wdOutlineView
    alert(range.Text)
}
```


```JavaScript
/*本示例创建所选内容的检索选项的副本，并显示该副本选项的检索视图是否为wdPrintView。*/
function test() {
    let trMode = Selection.Range.TextRetrievalMode.Duplicate
    alert(trMode.ViewType == wdPrintView)
}
```
