# FormField.Cut

将指定窗体域从文档中移到剪贴板上。



## 语法

express.**Cut()**

express   一个代表 **FormField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档的第一个窗体域，并将该窗体域粘贴到插入点。*/
function test() {
    let formFields = ActiveDocument.FormFields
    if (formFields.Count >= 1) {
        formFields.Item(1).Cut()
        Selection.Collapse(wdCollapseEnd)
        Selection.Paste()
    }
}
```


```JavaScript
/*本示例将所选内容中第一个窗体域移到剪贴板上。*/
function test() {
    Selection.FormFields.Item(1).Cut()
}
```
