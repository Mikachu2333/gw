# ThreeDFormat.Depth

返回或设置形状的延伸深度。可读/写。



## 语法

express.**Depth**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


 **Depth** 属性值的范围是：-600 到 9600（在正值产生的延伸里，正面为原始形状；在负值产生的延伸里，背面为原始形状）。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加一个椭圆，并且将椭圆延伸的深度和延伸颜色分别指定为 50 磅和紫色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeOval, 90, 90, 90, 40)
    let threeDFormat = shape.ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.Depth = 50
    // RGB value for purple
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状的延伸深度。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.Depth)
}
```
