# Application.ScreenUpdating

如果启用屏幕更新，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ScreenUpdating**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


当运行某一过程时， **ScreenUpdating** 属性控制显示器的主要变化情况。如果关闭屏幕更新，屏幕依然显示工具栏，并且 WPS 仍允许此过程用状态栏提示、输入框、对话框或信息框等工具来显示和检索信息。关闭屏幕更新可提高某些过程的执行速度。如果此过程已结束，或由于某些错误而停止，请务必将 **ScreenUpdating** 属性设为 **True** 。



## 示例


```JavaScript
/*本示例将关闭屏幕更新，并添加一篇新文档。将 500 行文本添加至文档中。宏每隔 50 行选定一行并刷新屏幕。*/
function test() {
    Application.ScreenUpdating = false
    Application.Documents.Add()

    for (let x = 1; x <= 500; x++) {
        ActiveDocument.Content.InsertAfter(`This is line ${x}.`)
        ActiveDocument.Content.InsertParagraphAfter()

        if (x % 50 == 0) {
            ActiveDocument.Paragraphs.Item(x).Range.Select()
            Application.ScreenRefresh()
        }
    }
    Application.ScreenUpdating = true
}
```


```JavaScript
/*本示例判断屏幕更新是否启用，并通知用户。*/
function test() {
    if (Application.ScreenUpdating) {
        alert("屏幕更新已启用")
    } else {
        alert("屏幕更新未启用")
    }
}
```
