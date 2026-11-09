# Shape.Copy

将指定对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 说明


使用 **Paste** 方法粘贴剪贴板中的内容。

如果未完全下载形状，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例将当前演示文稿中第一张幻灯片的第一个形状复制到剪贴板，然后将该副本粘贴到第二张幻灯片。*/
function test() {
    let active = Application.ActivePresentation
    active.Slides.Item(1).Shapes.Item(1).Copy()
    active.Slides.Item(2).Shapes.Paste()
}
```


```JavaScript
/*本示例将当前演示文稿的第一张幻灯片的第二个形状复制到剪贴板。*/
function test() {
    Application.ActivePresentation.Slides.Item(1).Shapes.Item(2).Copy()
}
```
