# ShapeRange.SetShapesDefaultProperties

将文档中默认形状的格式应用于指定的形状范围。



## 语法

express.**SetShapesDefaultProperties()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 说明


新形状将继承默认形状的许多属性。



## 示例


```JavaScript
/*本示例向活动文档中添加一个新矩形，然后设置该矩形的填充样式，并将该矩形的格式设置为形状的默认格式。*/
function test() {
    let shapes = ActiveDocument.Shapes
    let shape = shapes.AddShape(msoShapeRectangle, 5, 5, 80, 60)
    let shapeRange = shapes.Range(shape.Name)
    let fillFormat = shapeRange.Fill
    fillFormat.ForeColor.RGB = RGB(0, 0, 255)
    fillFormat.BackColor.RGB = RGB(0, 204, 255)
    fillFormat.Patterned(msoPatternHorizontalBrick)
    shapeRange.SetShapesDefaultProperties()
}
```


```JavaScript
/*本示例将选中形状的格式设置为形状的默认格式。*/
function test() {
    Selection.ShapeRange.SetShapesDefaultProperties()
}
```
