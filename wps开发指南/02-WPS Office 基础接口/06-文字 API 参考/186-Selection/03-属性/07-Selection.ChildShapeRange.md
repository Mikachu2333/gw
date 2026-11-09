# Selection.ChildShapeRange

返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/obj)** 集合，该集合代表选定区域中包含的子图形。



## 语法

express.**ChildShapeRange**

express   一个代表 **Selection** 对象的变量。

## 类型

ShapeRange

## 示例


```JavaScript
/*本示例创建一个带绘图画布的新文档，在绘图画布上添加图形，然后，在检查选中图形包含子图形后，用图案填充子图形。*/
function test() {
    // Create a new document with a drawing canvas and shapes
    let newDocument = Documents.Add()
    let shape = newDocument.Shapes.AddCanvas(100, 100, 200, 200)
    shape.CanvasItems.AddShape(msoShapeRectangle, 0, 0, 100, 100)
    shape.CanvasItems.AddShape(msoShapeOval, 0, 50, 100, 100)
    shape.CanvasItems.AddShape(msoShapeDiamond, 0, 100, 100, 100)

    // Select all shapes in the canvas
    shape.CanvasItems.SelectAll()

    // Fill canvas child shapes with a pattern
    if (Selection.HasChildShapeRange) {
        Selection.ChildShapeRange.Fill.Patterned(msoPatternDivot)
    } else {
        alert("This is not a range of child shapes.")
    }
}
```


```JavaScript
/*本示例将选定区域的第一个子图形的前景填充色设置为红色。*/
function test() {
    let shapeRange = Selection.ChildShapeRange
    shapeRange.Item(1).Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
