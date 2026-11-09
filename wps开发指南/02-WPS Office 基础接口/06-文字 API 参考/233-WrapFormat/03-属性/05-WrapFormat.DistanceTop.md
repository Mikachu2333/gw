# WrapFormat.DistanceTop

返回或设置文档文字与指定图形周围的非文本区顶边之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**DistanceTop**

express   一个代表 **WrapFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


非文本区的大小和图形，取决于所指定图形的大小和形状，以及 **WrapFormat** 对象的 **Type** 和 **Side** 属性。



## 示例


```JavaScript
/*本示例设置文档文字与选中的一组形状各边的间距为20磅。*/
function test() {
    let wrapFormat = Selection.ShapeRange.WrapFormat
    wrapFormat.DistanceLeft = 20
    wrapFormat.DistanceRight = 20
    wrapFormat.DistanceTop = 20
    wrapFormat.DistanceBottom = 20
}
```


```JavaScript
/*本示例在活动文档中添加一个椭圆，并指定文档文字环绕该椭圆外接矩形的左右两侧，然后将文档文字与该外接矩形四边之间的边距设置为 0.1 英寸。*/
function test() {
    let wrapFormat = ActiveDocument.Shapes.AddShape(msoShapeOval, 0, 0, 200, 50).WrapFormat
    wrapFormat.Type = wdWrapSquare
    wrapFormat.Side = wdWrapBoth
    wrapFormat.DistanceTop = InchesToPoints(0.1)
    wrapFormat.DistanceBottom = InchesToPoints(0.1)
    wrapFormat.DistanceLeft = InchesToPoints(0.1)
    wrapFormat.DistanceRight = InchesToPoints(0.1)
}
```
