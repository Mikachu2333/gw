# Shape.GroupItems

返回一个 **GroupShapes** 对象，该对象代表指定图形组中的单个图形。只读。



## 语法

express.**GroupItems**

express   一个代表 **Shape** 对象的变量。

## 类型

GroupShapes

## 说明


该属性应用于代表组合图形的 **Shape** 对象。使用 **GroupShapes** 对象的 **Item** 方法可从图形组中返回单个图形。



## 示例


```JavaScript
/*本示例向活动文档中添加三个三角形，并组合这些三角形，为整个图形组设置颜色，然后又独立地更改第二个三角形的颜色。*/
function test() {
    let shapes = ActiveDocument.Shapes

    shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100).Name = "shpOne"
    shapes.AddShape(msoShapeIsoscelesTriangle, 150, 10, 100, 100).Name = "shpTwo"
    shapes.AddShape(msoShapeIsoscelesTriangle, 300, 10, 100, 100).Name = "shpThree"

    let gruopShapes = shapes.Range(["shpOne", "shpTwo", "shpThree"]).Group()

    gruopShapes.Fill.PresetTextured(msoTextureBlueTissuePaper)
    gruopShapes.GroupItems.Item(2).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例向第一个文档中添加两个矩形，并组合这些矩形，然后更改第一个矩形的高度*/
function test() {
    Documents.Item(1).Shapes.AddShape(msoShapeRectangle, 10, 100, 100, 100, 100).Name = "One"
    Documents.Item(1).Shapes.AddShape(msoShapeRectangle, 150, 100, 100, 100, 100).Name = "Two"
    let gruopShapes = Documents.Item(1).Shapes.Range(["One", "Two"]).Group()
    gruopShapes.GroupItems.Item(1).Height = 200
}
```
