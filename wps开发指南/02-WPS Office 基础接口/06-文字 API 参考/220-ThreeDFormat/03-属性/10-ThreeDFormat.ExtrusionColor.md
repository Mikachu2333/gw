# ThreeDFormat.ExtrusionColor

返回一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/obj)** 对象，该对象代表形状延伸区域的颜色。只读。



## 语法

express.**ExtrusionColor**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

ColorFormat

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
/*本示例设置所选形状的延伸的主题颜色和延伸颜色的明暗。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.ExtrusionColor.ObjectThemeColor = wdThemeColorAccent2
    threeDFormat.ExtrusionColor.TintAndShade = -1
}
```
