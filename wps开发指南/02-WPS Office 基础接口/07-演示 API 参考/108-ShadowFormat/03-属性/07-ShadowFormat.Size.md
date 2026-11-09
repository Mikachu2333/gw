# ShadowFormat.Size

返回或设置指定阴影的大小作为形状大小的百分比，该值介于 0 到 200 之间。可读/写。



## 语法

express.**Size**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


将 **Size** 属性设置为 0 可删除阴影。将 **Size** 属性设置为 100 可创建大小与其关联的形状相同的阴影。将 **Size** 属性设置为 200 可创建大小两倍于其形状的阴影。



## 示例


```JavaScript
/*本示例删除活动窗口中选定的第一个形状的阴影。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.Shadow.Size = 0
}
```


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个心形，并为其添加阴影格式，然后将阴影大小设置为与该心形大小相同。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.AddShape(msoShapeHeart, 20, 20, 80, 100).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.Type = msoShadow6
    shadowFormat.Size = 100
}
```
