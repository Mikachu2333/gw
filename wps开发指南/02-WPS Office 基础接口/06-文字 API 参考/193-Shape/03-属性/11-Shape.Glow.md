# Shape.Glow

返回一个 **GlowFormat** 对象，该对象代表形状的发光格式。只读。



## 语法

express.**Glow**

express   一个代表 **Shape** 对象的变量。

## 类型

GlowFormat

## 示例


```JavaScript
/*本示例先向活动文档添加一个矩形，然后设置其发光颜色为红色。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 10, 100, 100, 100)
    shape.Glow.Color.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例先向第一个文档添加一个三角形，然后设置其发光的边框圆角半径。*/
function test() {
    let shape = Documents.Item(1).Shapes.AddShape(msoShapeRightTriangle, 300, 150, 50, 50)
    shape.Glow.Radius = 100
}
```
