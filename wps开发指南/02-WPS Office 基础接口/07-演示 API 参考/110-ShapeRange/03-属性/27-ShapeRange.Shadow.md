# ShapeRange.Shadow

返回一个只读的 **ShadowFormat** 对象，该对象包含指定形状的阴影格式属性。



## 语法

express.**Shadow**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ShadowFormat

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个有阴影的矩形。红色浮凸效果的阴影距该矩形的右边 3 磅，下边 2 磅。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 10, 10, 150, 90).Select()
    let shadowFormat = ActiveWindow.Selection.ShapeRange.Shadow
    shadowFormat.Type = msoShadow17
    shadowFormat.ForeColor.RGB = RGB(255, 0, 0)
    shadowFormat.OffsetX = 3
    shadowFormat.OffsetY = 2
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中第一个和第二个形状的阴影设置为半透明的绿色。*/
function test() {
    let shapeRange = Presentations.Item(1).Slides.Item(2).Shapes.Range([1, 2])
    shapeRange.Shadow.ForeColor.RGB = RGB(0, 255, 0)
    shapeRange.Shadow.Transparency = 0.5
}
```
