# PictureFormat.TransparentBackground

决定图片中定义为透明色的部分是否变为透明。可读/写。仅适用于位图。



## 语法

express.**TransparentBackground**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

MsoTriState

## 说明


使用 **[TransparencyColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/TransparencyColor)** 属性可设置透明色。

如果想透过图片的透明部分始终看到图片后面的对象，必须将图片的 **FillFormat** 对象的 **Visible** 属性设为 **msoFalse** 。如果图片有透明色且其 **FillFormat** 对象的 **Visible** 属性被设为 **msoTrue** ，则图片的填充可以透过透明色看到，但图片后面的对象将难以看到。

 **TransparentBackground** 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse** | 被定义为透明颜色的图片部分不显示为透明。 |
| **msoTrue** | 图片中颜色定义为透明色的部分变为透明。 |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个形状设置为透明色。要使本示例正常运行，第一个形状必须是位图。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let pictureFormat = slide.Shapes.Item(1).PictureFormat
    pictureFormat.TransparentBackground = msoTrue
    pictureFormat.TransparencyColor = RGB(0, 0, 255)
    slide.Shapes.Item(1).Fill.Visible = msoFalse
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个图片颜色定义为透明色的部分是否显示为透明。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.PictureFormat.TransparentBackground == msoTrue)
}
```
