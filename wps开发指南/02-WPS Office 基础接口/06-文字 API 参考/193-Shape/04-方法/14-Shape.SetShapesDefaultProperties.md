# Shape.SetShapesDefaultProperties

将文档中默认形状的格式应用于指定的形状。



## 语法

express.**SetShapesDefaultProperties()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 说明


新形状将继承默认形状的许多属性。



## 示例


```JavaScript
/*本示例将一个矩形添至活动文档中，设置矩形的填充格式，将矩形的格式应用于默认形状，然后将另一个（较小的）矩形添至文档。后一个矩形与前一个矩形有相同的填充格式。*/
function test() {
    let shapes = ActiveDocument.Shapes
    let shape1 = shapes.AddShape(msoShapeRectangle, 5, 5, 80, 60)
    let fillFormat = shape1.Fill
    fillFormat.ForeColor.RGB = RGB(0, 0, 255)
    fillFormat.BackColor.RGB = RGB(0, 204, 255)
    fillFormat.Patterned(msoPatternHorizontalBrick)
    //Sets formatting for default shapes
    shape1.SetShapesDefaultProperties()
    //New shape has default formatting
    shapes.AddShape(msoShapeRectangle, 90, 90, 40, 30)
}
```


```JavaScript
/*本示例将第一个文档的第二个形状的格式设置为默认格式，然后添加一个平行四边形，使其填充格式与第一个形状一样。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    shapes.Item(2).SetShapesDefaultProperties()
    shapes.AddShape(msoShapeParallelogram, 200, 200, 100, 150)
}
```
