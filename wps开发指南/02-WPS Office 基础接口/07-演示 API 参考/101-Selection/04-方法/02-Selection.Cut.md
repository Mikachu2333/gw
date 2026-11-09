# Selection.Cut

删除指定对象并将其放到剪贴板中。



## 语法

express.**Cut()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


如果未完全下载所选内容，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例删除第一个窗口中选中的对象并将它的一个副本放到剪贴板中。*/
function test() {
    Application.Windows.Item(1).Selection.Cut()
}
```


```JavaScript
/*本示例剪切活动窗口选中的内容，然后将其粘贴到活动演示文稿第二张幻灯片第一个形状的文本框中。*/
function test() {
    ActiveWindow.Selection.Cut()
    ActivePresentation.Slides.Item(2).Shapes.Item(1).TextFrame.TextRange.Paste()
}
```
