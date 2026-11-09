# Shape.Shadow

返回一个只读的 **ShadowFormat** 对象，该对象包含指定形状的阴影格式属性。



## 语法

express.**Shadow**

express   一个代表 **Shape** 对象的变量。

## 类型

ShadowFormat

## 示例


```JavaScript
/*本示例在当前演示文稿第一张幻灯片中添加一个有阴影的矩形。蓝色浮凸效果的阴影距该矩形的右边 3 磅，下边 2 磅。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    let shadowFormat = shapes.AddShape(msoShapeRectangle, 10, 10, 150, 90).Shadow
    shadowFormat.Type = msoShadow17
    shadowFormat.ForeColor.RGB = RGB(0, 0, 128)
    shadowFormat.OffsetX = 3
    shadowFormat.OffsetY = 2
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中的第三个形状的阴影是否可见。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Item(3).Shadow.Visible === msoTrue)
}
```
