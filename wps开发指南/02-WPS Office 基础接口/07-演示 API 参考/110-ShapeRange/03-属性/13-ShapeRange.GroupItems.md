# ShapeRange.GroupItems

返回一个 **[GroupShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/GroupShapes/obj)** 对象，该对象代表指定形状组中的单个形状。使用 **GroupShapes** 对象的 **Item** 方法可返回形状组中的单个形状。适用于代表组合形状的 **Shape** 或 **ShapeRange** 对象。只读。



## 语法

express.**GroupItems**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

GroupShapes

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加三个三角形，将它们组合，再设置整个组的填充格式，然后只更改第二个三角形的填充格式*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes

    shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100).Name = "shpOne"
    shapes.AddShape(msoShapeIsoscelesTriangle, 150, 10, 100, 100).Name = "shpTwo"
    shapes.AddShape(msoShapeIsoscelesTriangle, 300, 10, 100, 100).Name = "shpThree"

    shapes.Range(["shpOne", "shpTwo", "shpThree"]).Group().Select()
    let shapeRange = ActiveWindow.Selection.ShapeRange
    shapeRange.Fill.PresetTextured(msoTextureBlueTissuePaper)
    shapeRange.GroupItems.Item(2).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中指定组合形状的形状数量。*/
function test() {
    let shapeRange = Presentations.Item(1).Slides.Item(2).Shapes.Range(1)
    alert(shapeRange.GroupItems.Count)
}
```
