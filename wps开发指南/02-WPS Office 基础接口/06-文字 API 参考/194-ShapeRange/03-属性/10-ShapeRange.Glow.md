# ShapeRange.Glow

返回一个 **GlowFormat** 对象，该对象代表形状区域的发光格式。只读。



## 语法

express.**Glow**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

GlowFormat

## 示例


```JavaScript
/*本示例为活动文档中第一个形状添加一个蓝色的发光效果，透明度为0.5。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range(1)
    shapeRange.Glow.Color.RGB = RGB(0, 0, 255)
    shapeRange.Glow.Transparency = 0.5
}
```


```JavaScript
/*本示例为第一个文档中所有形状添加一个红色的发光效果，半径长度为20。*/
function test() {
    Documents.Item(1).Shapes.SelectAll()
    Selection.ShapeRange.Glow.Color.RGB = RGB(255, 0, 0)
    Selection.ShapeRange.Glow.Radius = 20
}
```
