# ThreeDFormat.ExtrusionColor

返回一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/obj)** 对象，该对象表示形状延伸区域的颜色。只读。



## 语法

express.**ExtrusionColor**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例向第一张工作表中添加椭圆，然后指定椭圆的深度为 50 磅，并指定深度部分的颜色为紫色。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let shape = worksheet.Shapes.AddShape(msoShapeOval, 90, 90, 90, 40)
    let threeDFormat = shape.ThreeD
    threeDFormat.Visible = true
    threeDFormat.Depth = 50
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
    //RGB value for purple
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状的延伸的颜色是否为红色。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.ExtrusionColor.RGB == RGB(255, 0, 0))
}
```
