# PictureFormat.CropBottom

返回或设置从指定图片或 OLE 对象的底部裁剪下的磅数。 **Single** 类型，可读写。



## 语法

express.**CropBottom**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


裁剪尺寸是相对于图片的原始尺寸计算的。例如，如果插入的图片原始高度为 100 磅，将其高度放大到 200 磅，再将 **CropBottom** 属性设置为 50，那么将从图片底部裁剪 100 磅（而不是 50 镑）。



## 示例


```JavaScript
/*本示例从活动文档的第一个形状的底部裁剪 20 磅。仅当该形状是图片或 OLE 对象时，本示例才有效。*/
function test() {
    ActiveDocument.Shapes.Item(1).PictureFormat.CropBottom = 20
}
```


```JavaScript
/*本示例将选定形状的底部裁剪用户指定的百分比，而不考虑该形状是否调整过。仅当所选图形为图片或 OLE 对象时，本示例才有效。*/
function test() {
    let percent = parseFloat(InputBox("What percentage do you want\n to crop off the bottom of this picture?"))
    let shape1 = Selection.ShapeRange.Item(1)
    let shape2 = shape1.Duplicate()
    shape2.ScaleHeight(1, msoTrue)
    let height = shape2.Height
    shape2.Delete()
    shape1.PictureFormat.CropBottom = height * percent / 100
}
```
