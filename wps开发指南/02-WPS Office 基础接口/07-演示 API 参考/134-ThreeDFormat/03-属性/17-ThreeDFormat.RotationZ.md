# ThreeDFormat.RotationZ

返回或设置指定 **ThreeDFormat** 对象的效果照相机的旋转角度（以度为单位）。可读/写。



## 语法

express.**RotationZ**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个椭圆，并将其效果照相机的旋转角度设置为 -30 度。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let threeDFormat = shapes.AddShape(msoShapeOval, 30, 60, 50, 25).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.RotationZ = -30
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片的第一个形状效果照相机的旋转角度。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.RotationZ)
}
```
