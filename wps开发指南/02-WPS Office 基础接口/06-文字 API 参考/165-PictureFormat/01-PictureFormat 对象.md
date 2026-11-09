# PictureFormat 对象

包含应用于图片和 OLE 对象的属性和方法。 **LinkFormat** 对象包含仅应用于链接 OLE 对象的属性和方法。 **OLEFormat** 对象包含应用于链接和非链接 OLE 对象的属性和方法。

## 说明


使用 **PictureFormat** 属性可返回一个 **PictureFormat** 对象。


## 示例


```JavaScript
/*本示例在活动文档上设置第一个形状的亮度、对比度和颜色转换，并从形状底部裁剪 18 磅。本示例生效，第一个形状必须是图片或 OLE 对象。*/
function test() {
    let pictureFormat = ActiveDocument.Shapes.Item(1).PictureFormat
    pictureFormat.Brightness = 0.3
    pictureFormat.Contrast = 0.7
    pictureFormat.ColorType = msoPictureGrayscale
    pictureFormat.CropBottom = 18
}
```


```JavaScript
/*本示例设置第一个文档上第一个内嵌的 OLE 对象的对比度和亮度。*/
function test() {
    let pictureFormat = Documents.Item(1).InlineShapes.Item(1).PictureFormat
    pictureFormat.IncrementContrast(-0.3)
    pictureFormat.IncrementBrightness(0.3)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementBrightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/IncrementBrightness) | 按指定数值改变图片亮度。 |
| [IncrementContrast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/IncrementContrast) | 按指定值改变图片的对比度。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Brightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/Brightness) | 返回或设置指定图片或 OLE 对象的亮度。该属性的值必须是 0.0（最暗）到 1.0（最亮）之间的数。可读写。 **Single** 类型。 |
| [ColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/ColorType) | 返回或设置应用于指定图片或 OLE 对象的颜色转换类型。 **MsoPictureColorType** 类型，可读写。 |
| [Contrast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/Contrast) | 返回或设置指定图片或 OLE 对象的对比度。该属性的值必须是 0.0（最低对比度）到 1.0（最高对比度）的数。可读写。 **Single** 类型。 |
| [CropBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/CropBottom) | 返回或设置从指定图片或 OLE 对象的底部裁剪下的磅数。 **Single** 类型，可读写。 |
| [CropLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/CropLeft) | 返回或设置从指定图片或 OLE 对象的左边裁剪下的磅数。 **Single** 类型，可读写。 |
| [CropRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/CropRight) | 返回或设置从指定图片或 OLE 对象的右边裁剪下的磅数。 **Single** 类型，可读写。 |
| [CropTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/CropTop) | 返回或设置从指定图片或 OLE 对象的顶部裁剪下的磅数。 **Single** 类型，可读写。 |
| [TransparencyColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/TransparencyColor) | 返回或设置指定图片的透明色，以红、绿、蓝（RGB）值表示。 **Long** 类型，可读写。 |
| [TransparentBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PictureFormat/member/TransparentBackground) | 如果图片中使用透明色定义的部分实际上看似透明，则该属性值为 **msoTrue** 。可以使用 **TransparencyColor** 属性设置透明色。该属性仅应用于位图。 **MsoTriState** 类型，可读写。 |