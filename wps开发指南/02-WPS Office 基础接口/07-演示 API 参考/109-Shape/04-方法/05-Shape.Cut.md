# Shape.Cut

删除指定对象并将其放到剪贴板中。



## 语法

express.**Cut()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 说明


如果未完全下载形状，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例删除当前演示文稿中第一张幻灯片的第一个形状并将它的一个副本复制到剪贴板，然后将该副本粘贴到第二张幻灯片。*/
function test() {
    Application.ActivePresentation.Slides.Item(1).Shapes.Item(1).Cut()
    Application.ActivePresentation.Slides.Item(2).Shapes.Paste()
}
```


```JavaScript
/*本示例判断如果当前演示文稿中第一张幻灯片的第三个形状为六角星，则剪切到剪贴板。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    if (shapes.Item(3).AutoShapeType == msoShape6pointStar) {
        shapes.Item(3).Cut()
    }
}
```
