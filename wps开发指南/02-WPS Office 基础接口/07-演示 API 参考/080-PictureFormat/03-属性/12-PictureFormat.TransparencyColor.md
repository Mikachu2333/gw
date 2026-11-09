# PictureFormat.TransparencyColor

以红-绿-蓝 (RGB) 值返回或设置指定图片的透明色。可读/写。



## 语法

express.**TransparencyColor**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


要使该属性生效，必须将 **[TransparentBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/TransparentBackground)** 属性设为 **msoTrue** 。

该属性仅适用于位图。

如果想透过图片的透明部分始终看到图片后面的对象，必须将图片的 **FillFormat** 对象的 **Visible** 属性设为 **msoFalse** 。如果图片有透明色且其 **FillFormat** 对象的 **Visible** 属性被设为 **msoTrue** ，则可以透过透明色看到图片的填充，但图片后面的对象将难以看到。



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
/*本示例显示活动窗口选定的第一个图片的透明色是否为白色。*/
function test() {
    let pictureFormat = ActiveWindow.Selection.ShapeRange.Item(1).PictureFormat
    pictureFormat.TransparentBackground = msoTrue
    alert(pictureFormat.TransparencyColor == RGB(255, 255, 255))
}
```
