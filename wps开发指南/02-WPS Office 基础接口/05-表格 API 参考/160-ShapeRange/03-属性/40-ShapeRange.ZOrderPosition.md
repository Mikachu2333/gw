# ShapeRange.ZOrderPosition

返回指定形状在 z-顺序中的位置。 **Long** 型，只读。



## 语法

express.**ZOrderPosition**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（int4 精度）

## 说明


若要设置形状在 z-顺序中的位置，请用 **[ZOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/member/ZOrder)** 方法。

形状在 z-顺序中的位置对应于在 [ **Shapes** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj) 集合中的索引号。例如，如果在 `myDocument` 中有四个形状，则 `myDocument.Shapes(1)` 表达式返回 z-顺序中最后一个形状，表达式 `myDocument.Shapes(4)` 返回 z-顺序中第一个形状。

每次向集合中添加一个新的形状时，默认情况下它会被添加到 z-次序的最前端。



## 示例


```JavaScript
/*此示例首先向第一张工作表添加一个椭圆形。如果第一张工作表另外还有至少一个形状，则按照 z-顺序将此椭圆形放置于倒数第二的位置。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    let shape = shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    let shapeRange = shapes.Range([shape.Name])
    while (shapeRange.ZOrderPosition > 2) {
        shapeRange.ZOrder(msoSendBackward)
    }
}
```


```JavaScript
/*本示例先在活动工作表中创建shpRange对象，然后显示对象在 z 顺序中的位置。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([2])
    alert(shpRange.ZOrderPosition)
}
```
