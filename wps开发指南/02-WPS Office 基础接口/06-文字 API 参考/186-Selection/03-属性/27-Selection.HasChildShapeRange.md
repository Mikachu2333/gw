# Selection.HasChildShapeRange

如果选定内容包含子图形，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**HasChildShapeRange**

express   一个代表 **Selection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例创建一个带绘图画布的新文档，在绘图画布上添加图形，然后，在检查选中图形包含子图形后，用图案填充子图形。*/
function test() {
    // Create a new document with a drawing canvas and shapes
    let newDocument = Documents.Add()
    let shape = newDocument.Shapes.AddCanvas(100, 100, 200, 20)
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
/*本示例显示活动文档的第一个形状是否包含子图形。*/
function test() {
    ActiveDocument.Shapes.Item(1).Select()
    alert(Selection.HasChildShapeRange)
}
```
