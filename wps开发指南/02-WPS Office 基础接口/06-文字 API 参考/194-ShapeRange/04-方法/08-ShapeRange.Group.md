# ShapeRange.Group

组合指定区域中的图形并将组合图形作为单个 **Shape** 对象返回。



## 语法

express.**Group()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

Shape

## 说明


由于一组形状作为单个形状处理，所以创建和分解形状组将改变 **Shapes** 集合中的项目数，而且由于影响集合中的项目，还会改变部分项目的索引号。



## 示例


```JavaScript
/*本示例向活动文档中添加两个图形，并组合这两个新图形，接着设置该组的填充格式并对该组进行旋转，然后将该组置于绘图层的后面。*/
function test() {
    let shapes = ActiveDocument.Shapes
    shapes.AddShape(msoShapeCan, 50, 10, 100, 200).Name = "shpOne"
    shapes.AddShape(msoShapeCube, 150, 250, 100, 200).Name = "shpTwo"
    let shape = shapes.Range(["shpOne", "shpTwo"]).Group()
    shape.Fill.PresetTextured(msoTextureBlueTissuePaper)
    shape.Rotation = 45
    shape.ZOrder(msoSendToBack)
}
```


```JavaScript
/*本示例将第一个文档中第一个和第二个图形组合，然后设置该组合图形的位置。*/
function test() {
    let shape = Documents.Item(1).Shapes.Range([1, 2]).Group()
    shape.Left = 100
    shape.Top = 100
}
```
