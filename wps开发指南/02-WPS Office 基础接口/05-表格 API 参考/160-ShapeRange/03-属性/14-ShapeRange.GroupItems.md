# ShapeRange.GroupItems

返回一个 **GroupShapes** 对象，它代表指定形状组中的单个形状。使用 **GroupShapes** 对象的 **Item** 方法可从形状组中返回单个形状。应用于代表成组形状的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象。只读。



## 语法

express.**GroupItems**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

GroupShapes

## 示例


```JavaScript
/*此示例向第一张工作表中添加三个三角形，将它们组合，设置整个组的颜色，再创建ShapeRange对象，调用GroupItems属性，然后只更改组合中第二个三角形的颜色。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100).Name = "shpOne"
    shapes.AddShape(msoShapeIsoscelesTriangle, 150, 10, 100, 100).Name = "shpTwo"
    shapes.AddShape(msoShapeIsoscelesTriangle, 300, 10, 100, 100).Name = "shpThree"
    let group = shapes.Range(["shpOne", "shpTwo", "shpThree"]).Group()
    group.Fill.PresetTextured(msoTextureBlueTissuePaper)
    shapes.Range([1]).GroupItems.Item(2).Fill.PresetTextured(msoTextureGreenMarble)
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象进行组合，然后又创建ShapeRange对象，调用GroupItems属性，将组合中第一个形状的宽度设置为150磅*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([2, 3])
    let group = shpRange.Group()
    ActiveSheet.Shapes.Range([2]).GroupItems.Item(1).Width = 150
}
```
