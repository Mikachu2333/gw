# SlideRange.Copy

将指定对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **SlideRange** 对象的变量。

## 返回值

void

## 说明


使用 **Paste** 方法粘贴剪贴板中的内容。

如果未完全下载范围中的任何幻灯片，则此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例在活动演示文稿第一个窗口中拷贝选定的幻灯片到剪贴板。*/
function test() {
    ActivePresentation.Windows.Item(1).Selection.SlideRange.Copy()
}
```


```JavaScript
/*本示例将第一篇演示文稿中第一张和第二张幻灯片复制到剪贴板，然后将该副本粘贴到第一篇演示文稿。*/
function test() {
    let slides = Presentations.Item(1).Slides
    slides.Range([1, 2]).Copy()
    slides.Paste()
}
```
