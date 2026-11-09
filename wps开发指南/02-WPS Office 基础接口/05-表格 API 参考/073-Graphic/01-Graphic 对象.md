# Graphic 对象

包括应用于页眉和页脚的图片对象的属性。

## 说明


 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/obj)** 对象有若干个属性返回 **Graphic** 对象。

使用 **[CenterFooterPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/CenterFooterPicture)** 、 **[CenterHeaderPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/CenterHeaderPicture)** 、 **[LeftFooterPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/LeftFooterPicture)** 、 **[LeftHeaderPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/LeftHeaderPicture)** 、 **[RightFooterPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/RightFooterPicture)** 或 **[RightHeaderPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/RightHeaderPicture)** 属性可返回一个 **Graphic** 对象。

要求“&G”为 **LeftFooter** 字符串的一部分，以便在左页脚显示图像。


## 示例


```JavaScript
/*本示例将 C:\Pictures\Sample.jpg 添加到页脚的左边。本示例假定名为“Sample.jpg”的文件位于 C:\Pictures\ 。*/
function test() {
    let graphic = ActiveSheet.PageSetup.LeftFooterPicture
    graphic.FileName = "C:\\Pictures\\Sample.jpg"
    graphic.Height = 275.25
    graphic.Width = 463.5
    graphic.Brightness = 0.36
    graphic.ColorType = msoPictureGrayscale
    graphic.Contrast = 0.39
    graphic.CropBottom = -14.4
    graphic.CropLeft = -28.8
    graphic.CropRight = -14.4
    graphic.CropTop = 21.6

    //Enable the image to show up in the left footer.
    ActiveSheet.PageSetup.LeftFooter = "&G"
}
```


```JavaScript
/*本示例显示第一张工作表中右页脚图片的颜色转换类型是否为灰度转换。*/
function test() {
    let graphic = Worksheets.Item(1).PageSetup.RightFooterPicture
    alert(graphic.msoPictureGrayscale == msoPictureGrayscale)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Brightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/Brightness) | 返回或设置指定图片或 OLE 对象的亮度。该属性的值必须是 0.0（最暗）到 1.0（最亮）之间的数。 **Single** 型，可读写。 |
| [ColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/ColorType) | 返回或设置应用于指定图片或 OLE 对象的颜色转换类型。 **[MsoPictureColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPictureColorType)** 类型，可读写。 |
| [Contrast](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/Contrast) | 返回或设置指定图片或 OLE 对象的对比度。该属性的值必须是 0.0（最低对比度）到 1.0（最高对比度）的数。 **Single** 型，可读写。 |
| [CropBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/CropBottom) | 返回或设置从指定图片或 OLE 对象的底部所裁剪下的磅数。 **Single** 型，可读写。 |
| [CropLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/CropLeft) | 返回或设置从指定图片或 OLE 对象的左边所裁剪下的磅数。 **Single** 型，可读写。 |
| [CropRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/CropRight) | 返回或设置从指定图片或 OLE 对象的右边所裁剪下的磅数。 **Single** 型，可读写。 |
| [CropTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/CropTop) | 返回或设置从指定图片或 OLE 对象的顶部所裁剪下的磅数。 **Single** 型，可读写。 |
| [Filename](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/Filename) | 返回或设置保存指定源对象位置的 URL（Intranet 或网站上）或路径（本地或网络）。 **String** 型，可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/Height) | 返回或设置一个 **Single** 值，它代表对象的高度（以磅为单位）。 |
| [LockAspectRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/LockAspectRatio) | 如果指定的形状在调整大小时其原始比例保持不变，则此属性为 **msoTrue** 。如果调整大小时可以分别更改形状的高度和宽度，则此属性为 **msoFalse** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Graphic/member/Width) | 返回或设置一个 **Single** 值，它代表对象的宽度（以磅为单位）。 |