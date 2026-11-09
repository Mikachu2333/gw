# ShapeRange.SetShapesDefaultProperties

将指定形状的格式应用于默认形状。使用该方法后所创建的形状将默认应用此格式。



## 语法

express.**SetShapesDefaultProperties()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加矩形，格式化矩形的填充，将该矩形的格式应用于默认形状，再向该幻灯片中添加一个较小的矩形。第二个矩形的填充与第一个矩形相同。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let shape = shapes.AddShape(msoShapeRectangle, 5, 5, 80, 60)
    let fillFormat = shapes.Range(shape.Name).Fill
    fillFormat.ForeColor.RGB = RGB(0, 0, 255)
    fillFormat.BackColor.RGB = RGB(0, 204, 255)
    fillFormat.Patterned(msoPatternHorizontalBrick)
    // Sets formatting for default shapes
    shapes.Range(shape.Name).SetShapesDefaultProperties()
    // New shape has default formatting
    shapes.AddShape(msoShapeRectangle, 90, 90, 40, 30)
}
```


```JavaScript
/*本示例将第一篇演示文稿第二张幻灯片上第三个形状的格式设置为默认格式，然后添加一个平行四边形，其填充格式与默认格式一样。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(2).Shapes
    shapes.Range(3).SetShapesDefaultProperties()
    shapes.AddShape(msoShapeParallelogram, 200, 200, 100, 150)
}
```
