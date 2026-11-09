# Selection.Copy

将指定对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


使用 **Paste** 方法粘贴剪贴板中的内容。

如果未完全下载所选内容，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例在第一个窗口中拷贝选定幻灯片到剪贴板然后将其粘贴到第二窗口的视图中。如果剪贴板的内容不能粘贴到第二个窗口的视图中（例如，如果试图将一个形状粘贴到幻灯片浏览视图中），则本示例失败。*/
function test() {
    Application.Windows.Item(1).Selection.Copy()
    Application.Windows.Item(2).View.Paste()
}
```


```JavaScript
/*本示例将活动窗口选择的文本粘贴到第一篇演示文稿第一张幻灯片的第一个文本框中。*/
function test() {
    ActiveWindow.Selection.Copy()
    Presentations.Item(1).Slides.Item(1).Shapes.Item(1).TextFrame.TextRange.Paste()
}
```
