# PictureFormat.ColorType

返回或设置应用于指定图片或 OLE 对象的颜色转换类型。可读/写 **MsoPictureColorType** 类型。



## 语法

express.**ColorType**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

MsoPictureColorType

## 说明


 **ColorType** 属性的值可以是下列 **MsoPictureColorType** 常量之一：

| 常量 |
| --------------------------------------------------- |
| msoPictureAutomatic                                 |
| msoPictureBlackAndWhite                             |
| msoPictureGrayscale                                 |
| msoPictureMixed                                     |
| msoPictureWatermark                                 |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上的第一个形状的颜色变换方式设置为灰度级。第一个形状必须为图片或 OLE 对象。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).PictureFormat.ColorType = msoPictureGrayscale
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个图片的颜色转换类型是否为msoPictureAutomatic。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.PictureFormat.ColorType == msoPictureAutomatic)
}
```
