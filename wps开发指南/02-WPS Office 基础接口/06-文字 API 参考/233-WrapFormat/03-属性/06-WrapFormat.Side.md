# WrapFormat.Side

返回或设置一个值，指示文档文字是环绕在指定形状的两侧，还是只环绕左侧或右侧，还是环绕形状距离页边距最远的一侧。 **WdWrapSideType** 类型，可读写。



## 语法

express.**Side**

express   一个代表 **WrapFormat** 对象的变量。

## 类型

WdWrapSideType

## 说明


如果文字只环绕形状的一侧，则在形状的另一侧与页边距之间存在一个非文本区。



## 示例


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


```JavaScript
/*本示例显示文档文字环绕选中的一组形状的方式是否为wdWrapLeft。*/
function test() {
    alert(Selection.ShapeRange.WrapFormat.Side == wdWrapLeft)
}
```
