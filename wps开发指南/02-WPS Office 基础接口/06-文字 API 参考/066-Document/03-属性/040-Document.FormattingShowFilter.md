# Document.FormattingShowFilter

设置或返回一个 **WdShowFilter** 常量，代表 **“样式和格式”** 任务窗格中显示的样式和格式。可读写。



## 语法

express.**FormattingShowFilter**

express   一个代表 **Document** 对象的变量。

## 类型

WdShowFilter

## 示例


```JavaScript
/*本示例对格式进行筛选，在“样式和格式”任务窗格中仅显示活动文档中使用的格式。*/
function test() {
    ActiveDocument.FormattingShowClear = false
    ActiveDocument.FormattingShowFilter = wdShowFilterFormattingInUse
    ActiveDocument.FormattingShowFont = true
    ActiveDocument.FormattingShowNumbering = true
    ActiveDocument.FormattingShowParagraph = true
}
```


```JavaScript
/*本示例显示第一个文档的“样式和格式”任务窗格中展示的样式和格式是否为wdShowFilterStylesAvailable。*/
function test() {
    alert(Documents.Item(1).FormattingShowFilter == wdShowFilterStylesAvailable)
}
```
