# Document.FormattingShowFont

如果为 **True** ，则 WPS 显示 **“样式和格式”** 任务窗格中的字体格式。 **Boolean** 类型，可读写。



## 语法

express.**FormattingShowFont**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用“样式和格式”任务窗格中字体样式的显示功能。*/
function test() {
    ActiveDocument.FormattingShowClear = false
    ActiveDocument.FormattingShowFilter = wdShowFilterFormattingInUse
    ActiveDocument.FormattingShowFont = true
    ActiveDocument.FormattingShowNumbering = true
    ActiveDocument.FormattingShowParagraph = true
}
```


```JavaScript
/*本示例判断第一个文档在“样式和格式”任务窗格中是否显示字体样式，并通知用户。*/
function test() {
    if (Documents.Item(1).FormattingShowFont) {
        alert("在“样式和格式”任务窗格中显示字体样式")
    } else {
        alert("在“样式和格式”任务窗格中不显示字体样式")
    }
}
```
