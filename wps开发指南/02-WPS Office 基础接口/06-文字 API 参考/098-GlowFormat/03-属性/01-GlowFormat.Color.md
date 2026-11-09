# GlowFormat.Color

获取一个 **ColorFormat** 对象，该对象代表发光效果的颜色。只读。



## 语法

express.**Color**

express   一个代表 **GlowFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例将活动文档上第一个形状的发光颜色设置为红色。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.Glow.Color.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例在活动文档中新建一个椭圆，然后设置发光效果为半透明、发光辐射长度为10磅，颜色为绿色。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeOval, 90, 90, 90, 40)
    shape.Glow.Transparency = 0.5
    shape.Glow.Radius = 10
    shape.Glow.Color.RGB = RGB(0, 255, 0)
}
```
