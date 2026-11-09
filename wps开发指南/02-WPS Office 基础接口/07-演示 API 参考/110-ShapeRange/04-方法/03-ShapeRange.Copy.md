# ShapeRange.Copy

将指定对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 说明


使用 **Paste** 方法粘贴剪贴板中的内容。

如果未完全下载范围中的任何形状，则此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个和第二个形状复制到剪贴板，然后将该副本粘贴到第二张幻灯片中。*/
function test() {
    let slides = ActivePresentation.Slides
    slides.Item(1).Shapes.Range([1, 2]).Copy()
    slides.Item(2).Shapes.Paste()
}
```


```JavaScript
/*本示例将活动窗口上选中的形状复制到剪贴板。*/
function test() {
    ActiveWindow.Selection.ShapeRange.Copy()
}
```
