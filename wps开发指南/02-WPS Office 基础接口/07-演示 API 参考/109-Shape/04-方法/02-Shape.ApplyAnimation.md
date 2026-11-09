# Shape.ApplyAnimation

将上次提取的动画应用于 **Shape** 对象。



## 语法

express.**ApplyAnimation()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例提取活动演示文稿的第一张幻灯片中第二个形状的动画，并应用于第一个形状。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    shapes.Item(2).PickupAnimation()
    shapes.Item(1).ApplyAnimation()
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的第一张幻灯片的第三个形状名为“test”，则提取第二个形状的动画并应用于第三个形状。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    if (shapes.Item(3).Name == "test") {
        shapes.Item(2).PickupAnimation()
        shapes.Item(3).ApplyAnimation()
    }
}
```
