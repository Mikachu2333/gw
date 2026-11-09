# ThreeDFormat.Depth

返回或设置图形的延伸深度。 **Single** 类型，可读写。



## 语法

express.**Depth**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


 **Depth** 属性可以是 -600 到 9600 之间的值（对于正值产生的延伸，其正面是原始图形；对于负值产生的延伸，其背面是原始图形）。



## 示例


```JavaScript
/*本示例向活动文档添加一个椭圆，然后指定该椭圆延伸 50 磅，并将延伸区域设为紫色。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.AddShape(msoShapeOval, 90, 90, 90, 40).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.Depth = 50
    // RGB value for purple
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
}
```


```JavaScript
/*本示例显示所选形状的延伸深度。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    alert(threeDFormat.Depth + " 磅")
}
```
