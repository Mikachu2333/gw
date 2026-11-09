# Document.FormattingShowNumbering

如果为 **True** ，则 WPS 在 **“样式和格式”** 任务窗格中显示编号格式。 **Boolean** 类型，可读写。



## 语法

express.**FormattingShowNumbering**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用“样式和格式”任务窗格中编号格式的显示功能。*/
function test() {
    ActiveDocument.FormattingShowClear = false
    ActiveDocument.FormattingShowFilter = wdShowFilterFormattingInUse
    ActiveDocument.FormattingShowFont = true
    ActiveDocument.FormattingShowNumbering = true
    ActiveDocument.FormattingShowParagraph = true
}
```


```JavaScript
/*本示例判断如果第一个文档的“样式和格式”任务窗格中展示编号格式，则通知用户。*/
function test() {
    if (Documents.Item(1).FormattingShowNumbering) {
        alert("在任务窗格中展示编号格式")
    }
}
```
