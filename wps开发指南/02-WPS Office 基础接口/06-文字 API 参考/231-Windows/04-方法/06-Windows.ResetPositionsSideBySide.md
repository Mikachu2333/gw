# Windows.ResetPositionsSideBySide

重置 **“并排比较”** 查看模式中的两个文档窗口。



## 语法

express.**ResetPositionsSideBySide()**

express   一个代表 **Windows** 对象的变量。

## 返回值

void

## 说明


对应于 **“并排比较”** 工具栏上的 **“重设窗口位置”** 按钮。使用 **ResetPositionsSideBySide** 方法可重置两个文档的显示。例如，如果用户最大化或最小化正在进行比较的两个文档窗口中的一个，则 **ResetPositionsSideBySide** 方法重置显示，从而再次并排显示两个窗口。



## 示例


```JavaScript
/*本示例将以前放置在并排窗口中的两个文档放在相邻的窗口中。*/
function test() {
    Windows.ResetPositionsSideBySide()
}
```


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
