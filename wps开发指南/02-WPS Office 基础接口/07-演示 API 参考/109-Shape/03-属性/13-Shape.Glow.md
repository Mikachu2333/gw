# Shape.Glow

返回指定形状的发光格式。只读 **GlowFormat** 类型。



## 语法

express.**Glow**

express   一个代表 **Shape** 对象的变量。

## 类型

GlowFormat

## 示例


```JavaScript
/*本示例先向活动演示文稿的第一张幻灯片中添加一个矩形，然后设置其发光颜色为红色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 10, 100, 100, 200)
    shape.Glow.Color.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例先向活动演示文稿的第一张幻灯片添加一个三角形，然后设置其发光的边框圆角半径。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRightTriangle, 300, 150, 50, 50)
    shape.Glow.Radius = 100
}
```
