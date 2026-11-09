# PictureFormat.CropRight

返回或设置从指定图片或 OLE 对象的右边裁剪下的磅数。 **Single** 类型，可读写。



## 语法

express.**CropRight**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


裁剪尺寸是相对于图片的原始尺寸计算的。例如，如果插入的图片原始宽度为 100 磅，将其宽度放大到 200 磅，再将 **CropRight** 属性设置为 50，那么将从图片右侧裁剪 100 磅（而不是 50 磅）。



## 示例


```JavaScript
/*本示例从活动文档的第一个形状的右边裁剪 20 磅。仅当该形状是图片或 OLE 对象时，本示例才有效。*/
function test() {
    ActiveDocument.Shapes.Item(1).PictureFormat.CropRight = 20
}
```


```JavaScript
/*本示例根据用户指定的百分比从右边裁剪所选图形，无论该图形是否经过缩放。要使本示例执行，选定的形状必须是图片或 OLE 对象。*/
function test() {
    let percent = parseFloat(InputBox("What percentage do you want\n to crop off the right of this picture?"))
    let shape1 = Selection.ShapeRange.Item(1)
    let shape2 = shape1.Duplicate()
    shape2.ScaleWidth(1, msoTrue)
    let width = shape2.Width
    shape2.Delete()
    shape1.PictureFormat.CropRight = width * percent / 100
}
```
