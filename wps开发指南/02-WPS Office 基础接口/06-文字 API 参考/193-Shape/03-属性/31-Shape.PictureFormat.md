# Shape.PictureFormat

返回一个 **PictureFormat** 对象，该对象包含指定对象的图片格式属性。



## 语法

express.**PictureFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

PictureFormat

## 说明


该属性适用于代表图片或 OLE 对象的 **Shape** 对象。



## 示例


```JavaScript
/*本示例设置了活动文档中第一个形状的亮度和对比度。第一个形状必须是图片或 OLE 对象。*/
function test() {
    let pictureFormat = ActiveDocument.Shapes.Item(1).PictureFormat
    pictureFormat.Brightness = 0.3
    pictureFormat.Contrast = 0.75
}
```


```JavaScript
/*本示例将第一个文档中第二个形状颜色转换设置为灰度。第二个形状必须是图片或 OLE 对象。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(2)
    shape.PictureFormat.ColorType = msoPictureGrayscale
}
```
