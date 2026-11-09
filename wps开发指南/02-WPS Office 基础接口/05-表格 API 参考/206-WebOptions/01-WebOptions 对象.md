# WebOptions 对象

包含工作簿级的属性，当以网页保存文档或打开网页时，ET 将使用这些属性。

## 说明


您可以在应用程序（全局）级或在工作簿级返回或设置属性。（请注意，根据保存工作簿时的属性值，属性值可能会因工作簿而异。工作簿级的属性设置会重写应用程序级的属性设置。应用程序级属性包含在 **DefaultWebOptions** 对象中。

使用 **WebOptions** 属性可返回 **WebOptions** 对象。


## 示例


```JavaScript
/*下例实现的功能是：检查是否允许 PNG（便携网络图形）作为图像格式，然后设置相应的 strImageFileType 变量。*/
function test() {
    let strImageFileType = null
    let webOptions = Application.Workbooks.Item(1).WebOptions
    if (webOptions.AllowPNG) {
        strImageFileType = "PNG"
    } else {
        strImageFileType = "JPG"
    }
}
```


```JavaScript
/*本示例显示 Web 浏览器中查看已保存文档时应使用的理想的最小屏幕大小是否为 msoScreenSize1024x768。*/
function test() {
    alert(ActiveWorkbook.WebOptions.ScreenSize == msoScreenSize1024x768)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [UseDefaultFolderSuffix](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/UseDefaultFolderSuffix) | 根据所选或安装的语言支持，将含指定文档的文件夹后缀设置为默认后缀。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowPNG](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/AllowPNG) | 如果以网页保存文档时，允许将 PNG（可移植网络图形）作为图像格式使用，则为 **True** 。如果不允许将 PNG 作为输出格式使用，则为 **False** 。默认值是 **False** 。 **Boolean** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DownloadComponents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/DownloadComponents) | 如果必要的“WPS Office Web 组件”在您用 Web 浏览器查看已保存的文档时已经下载，但只有在尚未安装这些组件时，该值为 **True** 。如果没有下载这些组件，则为 **False** 。默认值是 **False** 。 **Boolean** 类型，可读写。 |
| [Encoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/Encoding) | 当查看已保存的文档时，返回或设置 Web 浏览器使用的文档编码（代码页或字符集）。默认值为系统代码页。 **MsoEncoding** 类型，可读写。 |
| [FolderSuffix](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/FolderSuffix) | 返回文件夹后缀，当您将文档保存为网页、使用长文件名，以及选择将支持文件单独保存在某个文件夹中（即，如果 **UseLongFileNames** 和 **OrganizeInFolder** 属性设置为 **True** ）时，ET 使用该后缀。 **String** 型，只读。 |
| [LocationOfComponents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/LocationOfComponents) | 返回或设置中央 URL（对于 Intranet 或 Web）或路径（对于本地或网络而言），授权用户可以在查看保存的文档时，从这些位置下载“WPS Office Web 组件”。默认值是 WPS Office 的本地或网络安装路径。 **String** 型，可读写。 |
| [OrganizeInFolder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/OrganizeInFolder) | 如果为 **True** ，则在将指定的文档保存为网页时，所有的支持文件（如背景纹理和图形）将组织在一个单独的文件夹中；如果为 **False** ，则支持文件和网页将保存在同一文件夹中。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/Parent) | 返回指定对象的父对象。只读。 |
| [PixelsPerInch](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/PixelsPerInch) | 返回或设置网页中图形图像的密度（每英寸的像素数）及表格单元格的密度。密度设置范围通常为 19 到 480 之间，对于普通的屏幕大小，通常的设置一般为 72、96 和 120。默认设置是 96。 **Long** 型，可读写。 |
| [RelyOnCSS](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/RelyOnCSS) | 如果在 Web 浏览器中查看保存的文档时，字体格式使用的是级联样式表 (CSS)，则为 **True** 。ET 会创建一个级联样式表文件，然后依据 **OrganizeInFolder** 属性的值，将该文件保存到指定文件夹或与网页相同的文件夹中。如果使用了 HTML \<FONT\> 标记和级联样式表，则为 **False** 。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [RelyOnVML](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/RelyOnVML) | 如果为 **True** ，将文档保存为网页时，图形对象不能生成图像文件。如果为 **False** ，则可生成图像文件。默认值是 **False** 。 **Boolean** 类型，可读写。 |
| [ScreenSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/ScreenSize) | 返回或设置在 Web 浏览器中查看已保存文档时应使用的理想的最小屏幕大小（以像素为单位，宽度乘以高度）。可以是 **MsoScreenSize** 常量之一。默认常量是 **msoScreenSize800x600** 。 **MsoScreenSize** 类型，可读写。 |
| [TargetBrowser](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/TargetBrowser) | 返回或设置一个 **MsoTargetBrowser** 常量，它指明浏览器的版本。可读写。 |
| [UseLongFileNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/member/UseLongFileNames) | 如果该属性值为 **True** ，则将文档保存为网页时使用长文件名。如果该属性值为 **False** ，则不使用长文件名，而使用 DOS 文件名格式（8.3）。默认值是 **True** 。 **Boolean** 类型，可读写。 |