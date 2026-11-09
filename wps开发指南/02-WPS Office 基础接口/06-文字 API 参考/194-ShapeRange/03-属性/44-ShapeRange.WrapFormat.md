# ShapeRange.WrapFormat

返回一个 **WrapFormat** 对象，该对象包含在指定的形状范围四周文字环绕的属性。只读。



## 语法

express.**WrapFormat**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

WrapFormat

## 示例


```JavaScript
/*本示例在活动文档中添加一个椭圆，然后指定文档文字环绕该椭圆外切矩形的左右两侧，并将文档文字与该矩形四边之间的边距设置为 0.1 英寸。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeOval, 36, 36, 90, 50)
    let wrapFormat = ActiveDocument.Shapes.Range(shape.Name).WrapFormat
    wrapFormat.Type = wdWrapSquare
    wrapFormat.Side = wdWrapBoth
    wrapFormat.DistanceTop = InchesToPoints(0.1)
    wrapFormat.DistanceBottom = InchesToPoints(0.1)
    wrapFormat.DistanceLeft = InchesToPoints(0.1)
    wrapFormat.DistanceRight = InchesToPoints(0.1)
}
```


```JavaScript
/*本示例显示选中形状是否嵌入到文字中。*/
function test() {
    alert(Selection.ShapeRange.WrapFormat.Type == wdWrapInline)
}
```
