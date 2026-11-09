# Shape.Fill

返回一个 **FillFormat** 对象，该对象包含指定图形的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **Shape** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例首先向第一个文档添加一个矩形，然后为其设置前景色、背景色和矩形填充的渐变类型。*/
function test() {
    let document = Documents.Item(1)
    let fillFormat = document.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(170, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例首先向活动文档添加一个三角形，然后设置其填充的纹理为画布纹理。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100)
    shape.Fill.PresetTextured(msoTextureCanvas)
}
```
