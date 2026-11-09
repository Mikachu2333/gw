# ShapeRange.Group

将指定区域中的形状形成一组。以单个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象返回分组后的形状。



## 语法

express.**Group()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

Shape

## 说明


由于一组形状作为单个形状处理，所以创建和分解形状组将更改 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合中的项目数，并更改集合中受影响的项目之后的项目索引号。



## 示例


```JavaScript
/*本示例将两个形状添加到活动演示文稿的第一张幻灯片中，组合两个新形状，为该组设置填充，旋转该组并将其置于绘图层后。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes

    shapes.AddShape(msoShapeCan, 50, 10, 100, 200).Name = "shpOne"
    shapes.AddShape(msoShapeCube, 150, 250, 100, 200).Name = "shpTwo"

    let shape = shapes.Range(["shpOne", "shpTwo"]).Group()
    shape.Fill.PresetTextured(msoTextureBlueTissuePaper)
    shape.Rotation = 45
    shape.ZOrder(msoSendToBack)
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中第一个和第二个形状组合。*/
function test() {
    let shapeRange = Presentations.Item(1).Slides.Item(2).Shapes.Range([1, 2])
    shapeRange.Group()
}
```
