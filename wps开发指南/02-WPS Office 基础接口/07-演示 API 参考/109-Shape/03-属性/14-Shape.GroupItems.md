# Shape.GroupItems

返回一个 **GroupShapes** 对象，该对象表示指定组中的单个形状。使用 **GroupShapes** 对象的 **Item** 方法可返回组中的单个形状。此为只读属性。



## 语法

express.**GroupItems**

express   一个代表 **Shape** 对象的变量。

## 类型

GroupShapes

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加三个三角形，将它们组合，再设置整个组的颜色，然后只更改第二个三角形的颜色。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100).Name = "shpOne"
    shapes.AddShape(msoShapeIsoscelesTriangle, 150, 10, 100, 100).Name = "shpTwo"
    shapes.AddShape(msoShapeIsoscelesTriangle, 300, 10, 100, 100).Name = "shpThree"
    let group = shapes.Range(["shpOne", "shpTwo", "shpThree"]).Group()
    group.Fill.PresetTextured(msoTextureBlueTissuePaper)
    group.GroupItems.Item(2).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例显示活动演示文稿中第二张幻灯片的第一个形状组中第一个形状的名称。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(2).Shapes.Item(1).GroupItems.Item(1)
    alert("形状名称: " + shape.Name)
}
```
