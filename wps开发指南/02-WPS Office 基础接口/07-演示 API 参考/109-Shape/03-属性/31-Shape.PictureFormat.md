# Shape.PictureFormat

返回一个 **PictureFormat** 对象，该对象包含指定形状的图片格式属性。只读。



## 语法

express.**PictureFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

PictureFormat

## 说明


此属性适用于代表图片或 OLE 对象的 **Shape** 或 **ShapeRange** 对象。



## 示例


```JavaScript
/*本示例设置了活动演示文稿中第一张幻灯片的第一个形状的亮度和对比度。第一个形状必须是图片或 OLE 对象。*/
function test() {
    let pictureFormat = Application.ActivePresentation.Slides.Item(1).Shapes.Item(1).PictureFormat
    pictureFormat.Brightness = 0.3
    pictureFormat.Contrast = 0.75
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中第一张图片的 CropRight 值。*/
function test() {
    let pictureFormat = Application.ActivePresentation.Slides.Item(1).Shapes.Item(1).PictureFormat
    alert(pictureFormat.CropRight)
}
```
