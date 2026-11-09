# Application.ScreenRefresh

使用视频内存缓冲区的当前信息更新显示器的显示。



## 语法

express.**ScreenRefresh()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 说明


可以在使用 **ScreenUpdating** 属性禁用屏幕更新后使用该方法。 **ScreenRefresh** 只对某一指令打开屏幕更新，然后立即关闭。直到再次使用 **ScreenUpdating** 属性打开屏幕更新后，后续指令才更新屏幕。



## 示例


```JavaScript
/*本示例关闭屏幕更新，打开文档“example1.docx”，插入文本，刷新屏幕，然后关闭该文档（保存所做的更改）。*/
function test() {
    Application.ScreenUpdating = false
    Application.Documents.Open("D:\\示例\\example1.docx")

    let range = Application.ActiveDocument.Range(0, 0)

    range.InsertBefore("new")
    Application.ScreenRefresh()
    Application.ActiveDocument.Close(wdSaveChanges)
    Application.ScreenUpdating = true
}
```


```JavaScript
/*本示例判断如果 WPS 应用程序窗口处于正常状态，则使用视频内存缓冲区的当前信息更新显示器的显示。*/
function test() {
    if (Application.WindowState == wdWindowStateNormal) {
        Application.ScreenRefresh()
    }
}
```
