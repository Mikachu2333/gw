# WebOptions 对象

包含在将文档另存为网页或打开网页时 WPS 所使用的文档级属性。

## 说明


可以返回或设置应用程序（全局）级或文档级的属性。（请注意，根据保存文档时的属性值，不同文档的属性值可能不同）。文档级属性设置会覆盖应用程序级属性设置。应用程序级属性包含在 **DefaultWebOptions** 对象中。

使用 **WebOptions** 属性可返回 **WebOptions** 对象。


## 示例


```JavaScript
/*本示例判断是否允许将 PNG（可移植网络图形）用作图像格式，然后相应地设置 strImageFileType 变量。*/
function test() {
    let strImageFileType = ""
    let webOptions = ActiveDocument.WebOptions
    if (webOptions.AllowPNG) {
        strImageFileType = "PNG"
    } else {
        strImageFileType = "JPG"
    }
}
```


```JavaScript
/*本示例显示当第一个文档另存为网页时使用的文件夹后缀。*/
function test() {
    alert(Documents.Item(1).WebOptions.FolderSuffix)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [UseDefaultFolderSuffix](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/UseDefaultFolderSuffix) | 根据选定或安装的语言，将含指定文档的文件夹后缀设置为默认后缀。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowPNG](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/AllowPNG) | 如果为 **True** ，则在将文档另存为网页时，允许把 PNG（可移植网络图形）作为图像格式。如果此属性为 **False** ，则不允许 PNG 为输出格式。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [BrowserLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/BrowserLevel) | 返回或设置 **WdBrowserLevel** 类型的值，该值代表指定的网页要指向的 Web 浏览器级别。可读写。 |
| [Encoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/Encoding) | 返回或设置在查看保存的文档时 Web 浏览器使用的文档编码（代码页或字符集）。 **MsoEncoding** 类型，可读写。 |
| [FolderSuffix](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/FolderSuffix) | 返回在将文档保存为网页、使用长文件名并选择将支持文件保存在单独文件夹中时（即 **UseLongFileNames** 和 **OrganizeInFolder** 属性设为 **True** ）WPS文字 使用的文件夹后缀。 **String** 类型，只读。 |
| [OptimizeForBrowser](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/OptimizeForBrowser) | 如果 WPS 为由 **[BrowserLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/BrowserLevel)** 属性指定的 Web 浏览器优化指定的网页，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [OrganizeInFolder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/OrganizeInFolder) | 如果在将指定文档另存为网页时，所有的支持文件（如背景纹理和图形）组织在一个单独的文件夹中，则该属性值为 **True** ；如果支持文件和网页保存在同一文件夹中，则该属性值为 **False** 。默认值为 **True** 。可读写 **Boolean** 类型。 |
| [PixelsPerInch](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/PixelsPerInch) | 返回或设置网页中图形图像及表格单元格的密度（每英寸的像素数）。可读写 **Long** 类型。 |
| [RelyOnCSS](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/RelyOnCSS) | 如果在 Web 浏览器中查看保存的文档时使用级联样式表（CSS）设置字体格式，则该属性值为 **True** 。默认值为 **True** 。可读写 **Boolean** 类型。 |
| [RelyOnVML](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/RelyOnVML) | 如果在将文档另存为网页时没有从图形对象中生成图像文件，则该属性值为 **True** 。如果生成了图像，则该属性值为 **False** 。默认值为 **False** 。可读写 **Boolean** 类型。 |
| [ScreenSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/ScreenSize) | 返回或设置在 Web 浏览器中查看保存的文档时应使用的理想最小屏幕尺寸（宽 x 高，以像素为单位）。可读写 **MsoScreenSize** 类型。 |
| [TargetBrowser](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/TargetBrowser) | 设置或返回一个 **MsoTargetBrowser** 常量，该常量代表在 Web 浏览器中查看文档的目标浏览器。可读写。 |
| [UseLongFileNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/UseLongFileNames) | 如果将文档另存为网页时使用长文件名，则该属性值为 **True** 。如果不使用长文件名，而使用 DOS 文件名格式 (8.3)，则该属性值为 **False** 。默认值为 **True** 。可读写 **Boolean** 类型。 |