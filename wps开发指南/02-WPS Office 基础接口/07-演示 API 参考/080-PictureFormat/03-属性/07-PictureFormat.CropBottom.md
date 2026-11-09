# PictureFormat.CropBottom

返回或设置从指定图片或 OLE 对象的底部裁剪下的磅值。可读/写。



## 语法

express.**CropBottom**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


裁剪以相对于图片的原始尺寸计算。例如，如果插入的图片原始高度为 100 磅，将其高度调整为 200 磅，再将 **CropBottom** 属性设置为 50，则会从图片底部裁剪 100 磅（而不是 50 镑）。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个形状的底部裁剪 20 磅。要使本示例执行，第一个形状必须是图片或 OLE 对象。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).PictureFormat.CropBottom = 20
}
```


```JavaScript
/*本示例将选定形状的底部裁剪用户指定的百分比，而不考虑该形状是否调整过。要使本示例执行，选定的形状必须是图片或 OLE 对象。*/
function test() {
    let percent = InputBox("What percentage do you \nwant to crop off the bottom of this picture?")
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)

    let shapeRange = shape.Duplicate()
    shapeRange.ScaleHeight(1, msoTrue)

    let height = shapeRange.Height
    shapeRange.Delete()

    shape.PictureFormat.CropBottom = height * percent / 100
}
```
