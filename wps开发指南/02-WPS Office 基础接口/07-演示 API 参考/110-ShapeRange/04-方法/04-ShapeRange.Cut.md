# ShapeRange.Cut

删除指定对象并将其放到剪贴板中。



## 语法

express.**Cut()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 说明


如果未完全下载范围中的任何形状，则此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例删除第一个窗口中选中的对象并将它的一个副本放到剪贴板中。*/
function test() {
    Application.Windows.Item(1).Selection.ShapeRange.Cut()
}
```


```JavaScript
/*本示例从活动演示文稿的第一张幻灯片中删除第一个和第二个形状，并将它们的副本放到剪贴板，然后将该副本粘贴到第二张幻灯片。*/
function test() {
    let slides = ActivePresentation.Slides
    slides.Item(1).Shapes.Range([1, 2]).Cut()
    slides.Item(2).Shapes.Paste()
}
```
