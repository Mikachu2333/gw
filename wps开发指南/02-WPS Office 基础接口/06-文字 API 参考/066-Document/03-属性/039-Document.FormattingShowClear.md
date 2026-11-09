# Document.FormattingShowClear

如果为 **True** ，则 WPS 在 **“样式和格式”** 任务窗格中显示“清除格式”。 **Boolean** 类型，可读写。



## 语法

express.**FormattingShowClear**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例禁用样式任务窗格中“清除格式”按钮的显示。*/
function test() {
    ActiveDocument.FormattingShowClear = false
    ActiveDocument.FormattingShowFilter = wdShowFilterFormattingInUse
    ActiveDocument.FormattingShowFont = true
    ActiveDocument.FormattingShowNumbering = true
    ActiveDocument.FormattingShowParagraph = true
}
```


```JavaScript
/*本示例判断第一个文档在“样式和格式”任务窗格中是否显示“清除格式”，并通知用户。*/
function test() {
    if (Documents.Item(1).FormattingShowClear) {
        alert("在“样式和格式”任务窗格中显示“清除格式”")
    } else {
        alert("在“样式和格式”任务窗格中不显示“清除格式”")
    }
}
```
