# ShapeRange.PictureFormat

返回一个 **PictureFormat** 对象，该对象包含指定形状的图片格式属性。只读。



## 语法

express.**PictureFormat**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

PictureFormat

## 说明


适用于代表图片或 OLE 对象的 **Shape** 或 **ShapeRange** 对象。



## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中包含第一个和第二个形状的形状范围的图片亮度和图片对比度。包含的形状必须是图片或 OLE 对象。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.PictureFormat.Brightness = 0.3
    shapeRange.PictureFormat.Contrast = 0.75
}
```


```JavaScript
/*本示例设置活动窗口中选中形状范围的图片颜色转换类型。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ShapeRange
    shapeRange.PictureFormat.ColorType = msoPictureGrayscale
}
```
