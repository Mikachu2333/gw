# Shape.SetShapesDefaultProperties

将指定形状的格式应用于默认形状。使用该方法后所创建的形状将默认应用此格式。



## 语法

express.**SetShapesDefaultProperties()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将一个矩形添至活动演示文稿的第一张幻灯片中，设置矩形的填充格式，将矩形的格式应用于默认形状，然后将另一个（较小的）矩形添至文档。后一个矩形与前一个矩形有相同的填充格式。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
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
/*本示例将活动演示文稿的第一张幻灯片的第二个形状的格式设置为默认格式，然后添加一个平行四边形，其填充格式与默认格式一样。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
    shapes.Item(2).SetShapesDefaultProperties()
    shapes.AddShape(msoShapeParallelogram, 200, 200, 100, 150)
}
```
