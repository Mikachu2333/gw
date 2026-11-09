# SlideRange.Cut

删除指定对象并将其放到剪贴板中。



## 语法

express.**Cut()**

express   一个代表 **SlideRange** 对象的变量。

## 返回值

void

## 说明


如果未完全下载范围中的任何幻灯片，则此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例删除活动演示文稿第一个窗口中选定的幻灯片并将它的一个副本放到剪贴板中。*/
function test() {
    ActivePresentation.Windows.Item(1).Selection.SlideRange.Cut()
}
```


```JavaScript
/*本示例剪切第一篇演示文稿中第一张和第二张幻灯片，然后将其粘贴到活动演示文稿。*/
function test() {
    let slides = Presentations.Item(1).Slides
    slides.Range([1, 2]).Cut()
    ActivePresentation.Slides.Paste()
}
```
