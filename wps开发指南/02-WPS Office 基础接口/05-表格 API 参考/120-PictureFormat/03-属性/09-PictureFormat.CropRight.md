# PictureFormat.CropRight

返回或设置从指定图片或 OLE 对象的右边所裁剪下的磅数。 **Single** 型，可读写。



## 语法

express.**CropRight**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


裁剪的计算是同图像的原始尺寸相关的。例如，如果插入一幅原始宽度为 100 磅的图像，将其放大为 200 磅宽，然后设置 **CropRight** 属性为 50, 那么 100 磅（不是 50 磅）将从图像的右边被切除。



## 示例


```JavaScript
/*此示例在第一张工作表中第三个形状的右侧裁剪了 20 磅。要使此示例执行，第三个形状必须是图片或 OLE 对象。*/
function test() {
    let worksheet = Worksheets.Item(1)
    worksheet.Shapes.Item(3).PictureFormat.CropRight = 20
}
```


```JavaScript
/*使用此示例可指定从选定的形状右侧裁去的百分比，不管是否已调整了该形状的大小。为使此示例正常运行，选定的形状必须是图片或 OLE 对象。*/
function test() {
    let percentToCrop = InputBox("What percentage do you want to crop off the right of this picture?")
    ActiveSheet.Shapes.SelectAll()
    let shapeToCrop = Selection.ShapeRange.Item(1)
    let duplicate = shapeToCrop.Duplicate()
    duplicate.ScaleWidth(1, true)
    let origWidth = duplicate.Width
    duplicate.Delete()
    let cropPoints = origWidth * percentToCrop / 100
    shapeToCrop.PictureFormat.CropRight = cropPoints
}
```
