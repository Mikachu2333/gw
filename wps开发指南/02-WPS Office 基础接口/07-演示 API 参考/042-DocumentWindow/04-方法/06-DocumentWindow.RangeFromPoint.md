# DocumentWindow.RangeFromPoint

返回位于某一点（由屏幕上的位置坐标对指定）的 **Shape** 对象。如果在指定的坐标对上没有形状，则此方法将返回 **null** 。



## 语法

express.**RangeFromPoint(X, Y)**

express   一个代表 **DocumentWindow** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| x | 必选 | number（int 精度） | 从屏幕左边缘到该点的水平距离（以像素为单位）。 |
| y | 必选 | number（int 精度） | 从屏幕顶部到该点的垂直距离（以像素为单位）。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例使用坐标 (288, 100) 向活动演示文稿第一张幻灯片中添加一个新的矩形。然后，再将坐标由单位磅转换为像素，并使用 RangeFromPoint 方法返回一个对该新对象的引用，最后更改此矩形的填充色。*/
function test() {
    Application.ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 288, 100, 100, 72).Select()
    let pointX = Application.ActiveWindow.PointsToScreenPixelsX(288) + 1
    let pointY = Application.ActiveWindow.PointsToScreenPixelsY(100) + 1
    let shape = Application.ActiveWindow.RangeFromPoint(pointX, pointY)
    shape.Fill.ForeColor.RGB = RGB(80, 160, 130)
}
```


```JavaScript
/*本示例显示第一篇演示文稿的第一个窗口在以磅为单位的坐标 (350, 130) 位置的对象是否为自选图形。*/
function test() {
    let window = Presentations.Item(1).Windows.Item(1)
    let pointX = window.PointsToScreenPixelsX(350)
    let pointY = window.PointsToScreenPixelsY(130)
    let shape = window.RangeFromPoint(pointX, pointY)
    alert(shape.Type == msoAutoShape)
}
```
