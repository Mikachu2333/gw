# WrapFormat.DistanceLeft

返回或设置文档文字与指定图形周围的非文本区左边缘之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**DistanceLeft**

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
/*本示例在活动文档中添加一个椭圆，指定文档文字紧密环绕于该椭圆的周围，然后设置文档文字与图形的方框的上、下、左、右四边之间都有 0.1 英寸的边距。*/
function test() {
    let wrapFormat = ActiveDocument.Shapes.AddShape(msoShapeOval, 0, 0, 200, 50).WrapFormat
    wrapFormat.Type = wdWrapTight
    wrapFormat.Side = wdWrapBoth
    wrapFormat.DistanceTop = InchesToPoints(0.1)
    wrapFormat.DistanceBottom = InchesToPoints(0.1)
    wrapFormat.DistanceLeft = InchesToPoints(0.1)
    wrapFormat.DistanceRight = InchesToPoints(0.1)
}
```
