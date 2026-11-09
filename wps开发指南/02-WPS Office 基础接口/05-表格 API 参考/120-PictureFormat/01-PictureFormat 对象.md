# PictureFormat 对象

包含应用于图片和 OLE 对象的属性和方法。

## 说明


 **LinkFormat** 对象只包含应用于链接 OLE 对象的属性和方法。 **OLEFormat** 对象包含应用于 OLE 对象的属性和方法，无论这些对象是不是链接对象。


## 示例


```JavaScript
/*下例设置了第一张工作表中第一个形状的亮度、对比度和颜色的变换，而且在该形状的底部裁剪了 18 磅。要使此示例执行，则第一个形状必须是图片或 OLE 对象。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let pictureFormat = worksheet.Shapes.Item(1).PictureFormat
    pictureFormat.Brightness = 0.3
    pictureFormat.Contrast = 0.7
    pictureFormat.ColorType = msoPictureGrayscale
    pictureFormat.CropBottom = 18
}
```


```JavaScript
/*此示例在活动工作表的第二个形状图片的右侧裁剪 10 磅。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.PictureFormat.CropRight = 10
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementBrightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/IncrementBrightness) | 按指定数值改变图片亮度。可以使用 **Brightness** 属性设置图片的绝对亮度。 |
| [IncrementContrast](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/IncrementContrast) | 按指定值改变图片的对比度。可以使用 **Contrast** 属性设置图片的绝对对比度。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Brightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/Brightness) | 返回或设置指定图片或 OLE 对象的亮度。该属性的值必须是 0.0（最暗）到 1.0（最亮）之间的数。 **Single** 型，可读写。 |
| [ColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/ColorType) | 返回或设置应用于指定图片或 OLE 对象的颜色转换类型。 **MsoPictureColorType** 类型，可读写。 |
| [Contrast](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/Contrast) | 返回或设置指定图片或 OLE 对象的对比度。该属性的值必须是 0.0（最低对比度）到 1.0（最高对比度）的数。 **Single** 型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Crop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/Crop) | 返回一个 **Crop** 对象，该对象代表指定的 **PictureFormat** 对象的裁剪设置。 |
| [CropBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/CropBottom) | 返回或设置从指定图片或 OLE 对象的底部所裁剪下的磅数。 **Single** 型，可读写。 |
| [CropLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/CropLeft) | 返回或设置从指定图片或 OLE 对象的左边所裁剪下的磅数。 **Single** 型，可读写。 |
| [CropRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/CropRight) | 返回或设置从指定图片或 OLE 对象的右边所裁剪下的磅数。 **Single** 型，可读写。 |
| [CropTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/CropTop) | 返回或设置从指定图片或 OLE 对象的顶部所裁剪下的磅数。 **Single** 型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [TransparencyColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/TransparencyColor) | 返回或设置指定图片的透明色，以红-绿-蓝 (RGB) 值表示。必须将 **TransparentBackground** 属性设置为 **True** ，该属性才有效。仅应用于位图。 **Long** 类型，可读写。 |
| [TransparentBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/member/TransparentBackground) | 仅应用于位图。MsoTriState 类型，可读写。使用 **TransparencyColor** 属性可设置透明颜色。 |