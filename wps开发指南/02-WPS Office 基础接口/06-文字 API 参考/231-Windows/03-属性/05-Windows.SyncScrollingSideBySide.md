# Windows.SyncScrollingSideBySide

如果为 **True** ，则启用同时滚动窗口内容。 **Boolean** 类型，可读写。



## 语法

express.**SyncScrollingSideBySide**

express   一个代表 **Windows** 对象的变量。

## 类型

boolean

## 说明


如果该值为 **False** ，则禁用同时滚动窗口。



## 示例


```JavaScript
/*本示例启用同时滚动相邻窗口的功能。*/
function test() {
    let doc1 = Documents.Add()
    let doc2 = Documents.Add()

    doc2.Activate()
    doc2.Windows.CompareSideBySideWith(doc1)
    Windows.ResetPositionsSideBySide()
    Windows.SyncScrollingSideBySide = true
}
```


```JavaScript
/*本示例禁用同时滚动窗口。*/
function test() {
    Application.Windows.SyncScrollingSideBySide = false
}
```
