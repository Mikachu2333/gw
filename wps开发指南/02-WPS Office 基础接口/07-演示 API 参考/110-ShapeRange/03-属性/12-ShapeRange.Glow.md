# ShapeRange.Glow

返回指定形状范围的发光格式。只读。



## 语法

express.**Glow**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

GlowFormat

## 示例


```JavaScript
/*本示例为活动演示文稿上第一张幻灯片中第一个形状添加一个蓝色的发光效果，透明度为0.5。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range(1)
    shapeRange.Glow.Color.RGB = RGB(0, 0, 255)
    shapeRange.Glow.Transparency = 0.5
}
```


```JavaScript
/*本示例为第一篇演示文稿上第二张幻灯片中所有的形状添加一个红色的发光效果，半径长度为20。*/
function test() {
    Presentations.Item(1).Slides.Item(2).Shapes.SelectAll()
    let shapeRange = ActiveWindow.Selection.ShapeRange
    shapeRange.Glow.Color.RGB = RGB(255, 0, 0)
    shapeRange.Glow.Radius = 20
}
```
