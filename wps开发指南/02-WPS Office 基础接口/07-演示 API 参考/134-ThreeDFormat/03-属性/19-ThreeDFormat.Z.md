# ThreeDFormat.Z

返回或设置指定 **ThreeDFormat** 对象与地平面的距离（以磅为单位）。可读/写。



## 语法

express.**Z**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例向第一篇演示文稿的第一张幻灯片添加一个平行四边形，并将该平行四边形的三维格式与地面的距离设置为 10 磅。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeParallelogram, 150, 150, 100, 50)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.Z = 10
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个形状的三维格式与地面的距离。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    alert(threeDFormat.Z)
}
```
