# ShapeRange.PickUp

复制指定形状的格式。用 **Apply** 方法可将复制的格式应用于其他形状。



## 语法

express.**PickUp()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例复制活动演示文稿上第一张幻灯片中第一个形状的格式，然后将复制的格式应用于该幻灯片的第二个形状。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Range(1).PickUp()
    slide.Shapes.Range(2).Apply()
}
```


```JavaScript
/*本示例复制第一篇演示文稿上第二张幻灯片中第三个形状的格式，然后将复制的格式应用于该幻灯片的所有形状。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(2).Shapes
    shapes.Range(3).PickUp()
    shapes.SelectAll()
    ActiveWindow.Selection.ShapeRange.Apply()
}
```
