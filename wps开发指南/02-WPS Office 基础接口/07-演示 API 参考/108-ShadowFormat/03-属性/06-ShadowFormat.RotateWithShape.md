# ShadowFormat.RotateWithShape

返回或设置与指定阴影相关联的形状旋转时指定的阴影是否旋转。可读/写。



## 语法

express.**RotateWithShape**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **RotateWithShape** 属性返回的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明          |
| ------------ | ----------- |
| **msoFalse** | 阴影不随形状一起旋转。 |
| **msoTrue**  | 阴影随形状一起旋转。  |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个菱形，并为其添加阴影格式，然后将阴影设置为随形状一起旋转。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.AddShape(msoShapeDiamond, 20, 20, 80, 100).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.Type = msoShadow6
    shadowFormat.RotateWithShape = msoTrue
}
```


```JavaScript
/*本示例判断活动窗口中选定的第一张幻灯片的第一个形状阴影是否随形状一起旋转，并通知用户。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    if (shape.Shadow.RotateWithShape == msoTrue) {
        alert("指定阴影随形状一起旋转。")
    } else {
        alert("指定阴影不随形状一起旋转。")
    }
}
```
