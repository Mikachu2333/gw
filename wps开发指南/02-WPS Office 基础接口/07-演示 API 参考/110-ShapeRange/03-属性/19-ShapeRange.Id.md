# ShapeRange.Id

返回一个 **Long** 类型值，该值标识形状或形状范围。只读。



## 语法

express.**Id**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片上添加一个新形状，然后根据 Id 属性的值填充该形状。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShape5pointStar, 100, 100, 100, 100).Select()
    let shapeRange = ActiveWindow.Selection.ShapeRange
    switch (shapeRange.Id) {
        case shapeRange.Id > 0 && shapeRange.Id <= 500:
            shapeRange.Fill.ForeColor.RGB = RGB(255, 0, 0)
            break
        case shapeRange.Id > 500 && shapeRange.Id <= 1000:
            shapeRange.Fill.ForeColor.RGB = RGB(255, 255, 0)
            break
        case shapeRange.Id > 1000 && shapeRange.Id <= 1500:
            shapeRange.Fill.ForeColor.RGB = RGB(255, 0, 255)
            break
        case shapeRange.Id > 1500 && shapeRange.Id <= 2000:
            shapeRange.Fill.ForeColor.RGB = RGB(0, 255, 0)
            break
        case shapeRange.Id > 2000 && shapeRange.Id <= 2500:
            shapeRange.Fill.ForeColor.RGB = RGB(0, 255, 255)
            break
        default:
            shapeRange.Fill.ForeColor.RGB = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例在第一篇演示文稿上第一张幻灯片中添加一个新形状并显示其 Id 属性值。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    let shape = shapes.AddShape(msoShape16pointStar, 150, 150, 200, 100)
    alert(shapes.Range(shape.Name).Id)
}
```
