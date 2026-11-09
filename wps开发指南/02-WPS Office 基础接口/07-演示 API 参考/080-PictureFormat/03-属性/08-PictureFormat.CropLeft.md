# PictureFormat.CropLeft

返回或设置从指定图片或 OLE 对象的左侧裁剪下的磅值。可读/写。



## 语法

express.**CropLeft**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


裁剪以相对于图片的原始尺寸计算。例如，如果插入的图片原始宽度为 100 磅，将其宽度调整为 200 磅，再将 **CropLeft** 属性设置为 50，则会从图片左侧裁剪 100 磅（而不是 50 磅）。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个形状的左侧裁剪 20 磅。要使本示例执行，第一个形状必须是图片或 OLE 对象。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).PictureFormat.CropLeft = 20
}
```


```JavaScript
/*本示例实现的功能是：根据用户指定的百分比从左边裁剪所选图形，无论该图形是否经过缩放。要使本示例执行，选定的形状必须是图片或 OLE 对象。*/
function test() {
    let percent = InputBox("What percentage do you \nwant to crop off the left of this picture?")
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)

    let shapeRange = shape.Duplicate()
    shapeRange.ScaleWidth(1, msoTrue)

    let width = shapeRange.Width
    shapeRange.Delete()

    shape.PictureFormat.CropLeft = width * percent / 100
}
```
