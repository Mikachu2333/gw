# Shape.PickUp

复制指定形状的格式。用 **Apply** 方法可将复制的格式应用于其他形状。



## 语法

express.**PickUp()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例复制活动演示文稿的第一张幻灯片上第一个形状的格式，然后将该格式应用于第二个形状。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).PickUp()
    slide.Shapes.Item(2).Apply()
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个形状的格式应用于其它形状。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    shapes.Item(1).PickUp()
    for (let i = 2; i <= shapes.Count; i++) {
        shapes.Item(i).Apply()
    }
}
```
