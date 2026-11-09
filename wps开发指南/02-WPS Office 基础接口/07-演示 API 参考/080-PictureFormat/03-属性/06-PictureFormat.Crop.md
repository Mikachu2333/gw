# PictureFormat.Crop

返回 **Crop** 对象，代表从指定图片或 OLE 对象裁剪的尺寸信息。只读。



## 语法

express.**Crop**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

Crop

## 说明


裁剪尺寸是相对于图片的原始尺寸计算的。



## 示例


```JavaScript
/*本示例显示活动窗口选定的第一个图片裁剪的高度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.PictureFormat.Crop.PictureHeight)
}
```


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片的第二个图片要裁剪的宽度。*/
function test() {
    let pictureFormat = ActivePresentation.Slides.Item(1).Shapes.Item(2).PictureFormat
    pictureFormat.Crop.PictureWidth = 80
}
```
