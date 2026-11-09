# PictureFormat 对象

包含应用于图片和 OLE 对象的属性和方法。

## 说明


 **LinkFormat** 对象包含仅应用于链接 OLE 对象的属性和方法。 **OLEFormat** 对象包含应用于链接和非链接 OLE 对象的属性和方法。

使用 **PictureFormat** 属性返回一个 **PictureFormat** 对象。


## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中第一个形状的亮度、对比度和颜色的变换，而且在该形状的底部裁剪 18 磅。要使此示例执行，则第一个形状必须是图片或 OLE 对象。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let pictureFormat = slide.Shapes.Item(1).PictureFormat
    pictureFormat.Brightness = 0.3
    pictureFormat.Contrast = 0.7
    pictureFormat.ColorType = msoPictureGrayscale
    pictureFormat.CropBottom = 18
}
```


```JavaScript
/*本示例设置活动窗口选定的所有图片的对比度和亮度。*/
function test() {
    let pictureFormat = ActiveWindow.Selection.ShapeRange.PictureFormat
    pictureFormat.IncrementContrast(-0.3)
    pictureFormat.IncrementBrightness(0.3)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementBrightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/IncrementBrightness) | 按指定数值更改图片的亮度。 |
| [IncrementContrast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/IncrementContrast) | 按指定数值更改图片的对比度。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/Application) | 返回表示指定对象的创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象。 |
| [Brightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/Brightness) | 返回或设置指定图片或 OLE 对象的亮度。可读/写 **Single** 类型。 |
| [ColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/ColorType) | 返回或设置应用于指定图片或 OLE 对象的颜色转换类型。可读/写 **MsoPictureColorType** 类型。 |
| [Contrast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/Contrast) | 返回或设置指定图片或 OLE 对象的对比度。该属性的值必须是 0.0（最低对比度）到 1.0（最高对比度）的数。可读/写 **Single** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/Creator) | 返回 **Long** 类型值，该值代表创建指定对象的应用程序创建者代码，该代码由四个字符构成。例如，如果对象是在WPP 中创建的，则此属性返回一个十六进制数 50575054。只读。 |
| [Crop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/Crop) | 返回 **Crop** 对象，代表从指定图片或 OLE 对象裁剪的尺寸信息。只读。 |
| [CropBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/CropBottom) | 返回或设置从指定图片或 OLE 对象的底部裁剪下的磅值。可读/写。 |
| [CropLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/CropLeft) | 返回或设置从指定图片或 OLE 对象的左侧裁剪下的磅值。可读/写。 |
| [CropRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/CropRight) | 返回或设置从指定图片或 OLE 对象的右侧裁剪下的磅值。可读/写。 |
| [CropTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/CropTop) | 返回或设置从指定图片或 OLE 对象的顶部裁剪下的磅值。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/Parent) | 返回指定对象的父对象。 |
| [TransparencyColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/TransparencyColor) | 以红-绿-蓝 (RGB) 值返回或设置指定图片的透明色。可读/写。 |
| [TransparentBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/member/TransparentBackground) | 决定图片中定义为透明色的部分是否变为透明。可读/写。仅适用于位图。 |