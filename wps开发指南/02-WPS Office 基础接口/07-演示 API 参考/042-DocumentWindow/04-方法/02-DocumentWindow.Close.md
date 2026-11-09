# DocumentWindow.Close

关闭指定的文档窗口。



## 语法

express.**Close()**

express   一个代表 **DocumentWindow** 对象的变量。

## 返回值

void

## 说明


使用此方法时，WPP 将关闭打开的演示文稿，而不会提示用户保存他们的工作。为了防止工作丢失，请在使用 **Close** 方法之前使用 **Save** 方法或 **SaveAs** 方法。



## 示例


```JavaScript
/*以下示例关闭除当前窗口外的所有窗口*/
function test() {
    let windows = Application.Windows
    for (let i = windows.Count; i >= 2; i--) {
        windows.Item(i).Close()
    }
}
```


```JavaScript
/*本示例在不保存更改的情况下关闭第一个窗口*/
function test() {
    let window = Application.Windows.Item(1)
    window.Presentation.Saved = true
    window.Close()
}
```
