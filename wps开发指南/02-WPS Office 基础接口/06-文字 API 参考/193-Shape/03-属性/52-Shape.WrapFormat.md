# Shape.WrapFormat

返回一个 **WrapFormat** 对象，该对象包含在指定的形状四周文字环绕的属性。只读。



## 语法

express.**WrapFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

WrapFormat

## 示例


```JavaScript
/*本示例在活动文档中添加一个椭圆，并指定文档文字环绕该椭圆外切矩形的左右两侧。该示例将文档文字与该矩形四边之间的边距设置为 0.1 英寸。*/
function test() {
    let wrapFormat = ActiveDocument.Shapes.AddShape(msoShapeOval, 36, 36, 90, 50).WrapFormat
    wrapFormat.Type = wdWrapSquare
    wrapFormat.Side = wdWrapBoth
    wrapFormat.DistanceTop = InchesToPoints(0.1)
    wrapFormat.DistanceBottom = InchesToPoints(0.1)
    wrapFormat.DistanceLeft = InchesToPoints(0.1)
    wrapFormat.DistanceRight = InchesToPoints(0.1)
}
```


```JavaScript
/*本示例显示第一个文档中文字是否紧密地环绕在第一个形状。*/
function test() {
    let wrapFormat = Documents.Item(1).Shapes.Item(1).WrapFormat
    alert(wrapFormat.Type == wdWrapTight)
}
```
