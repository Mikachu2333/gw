# Window.Document

返回一个 **Document** 对象，该对象与指定窗格、窗口或选定内容相关。只读。



## 语法

express.**Document**

express   一个代表 **Window** 对象的变量。

## 类型

Document

## 示例


```JavaScript
/*本示例将 document 设置为与活动窗口相关的文档。然后焦点切换至下一个窗口，并加以拆分。再使用 Activate 方法切换回原文档。*/
function test() {
    let document = Application.ActiveWindow.Document
    if (Windows.Count >= 2) {
        Application.ActiveWindow.Next.Activate()
        Application.ActiveWindow.Split = true
        document.Activate()
    }
}
```


```JavaScript
/*本示例将 document 设置为与活动窗口相关的文档。然后关闭并不保存该文档。*/
function test() {
    let document = Application.ActiveWindow.Document
    document.Close(wdDoNotSaveChanges)
}
```
