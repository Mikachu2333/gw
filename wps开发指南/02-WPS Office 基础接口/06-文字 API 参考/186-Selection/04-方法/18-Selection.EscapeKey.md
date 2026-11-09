# Selection.EscapeKey

取消某种模式，如取消扩展或列选定模式（与按 ESC 相同）。



## 语法

express.**EscapeKey()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果所选内容位于批注窗格，则取消选中批注窗格。*/
function test() {
    if (Selection.Information(wdInCommentPane)) {
        Selection.EscapeKey()
    }
}
```


```JavaScript
/*本示例将活动窗口切换为全屏显示，并通知用户是否取消全屏显示，若用户选择是，则取消全屏显示。*/
function test() {
    ActiveWindow.View.FullScreen = true
    let response = MsgBox("是否取消全屏显示？", jsYesNo)
    if (response == jsResultYes) {
        Selection.EscapeKey()
    }
}
```
