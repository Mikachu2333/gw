# ShapeRange.PickupAnimation

从 **ShapeRange** 对象中拾取所有动画。



## 语法

express.**PickupAnimation()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例提取活动演示文稿第一张幻灯片中第一个形状的动画，并将动画应用于该幻灯片的第三个形状。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    shapes.Range(1).PickupAnimation()
    shapes.Item(3).ApplyAnimation()
}
```


```JavaScript
/*本示例拾取活动窗口上选中形状的动画。*/
function test() {
    ActiveWindow.Selection.ShapeRange.PickupAnimation()
}
```
