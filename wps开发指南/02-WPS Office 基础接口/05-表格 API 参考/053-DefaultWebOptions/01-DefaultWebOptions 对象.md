# DefaultWebOptions 对象

包含应用程序级的全局属性，当将文档另存为网页或打开网页时，ET 将使用这些属性。您可以在应用程序（全局）级或在工作簿级返回或设置属性。

## 说明


工作簿级的属性设置会重写应用程序级的属性设置。工作簿级的属性设置包含在 **WebOptions** 对象中。

由于保存工作簿时的属性值可能不同，所以不同工作簿的属性值也可能不同。

使用 **DefaultWebOptions** 属性可返回 **DefaultWebOptions** 对象。


## 示例


```JavaScript
/*下例将查看是否允许将 PNG（可移植网络图形）作为图像格式使用，同时设置相应的 strImageFileType 变量。*/
function test() {
    let defaultWebOptions = Application.DefaultWebOptions
    if (defaultWebOptions.AllowPNG) {
        strImageFileType = "PNG"
    } else {
        strImageFileType = "JPG"
    }
}
```


```JavaScript
/*本示例显示（Web全局选项）浏览器中查看已保存文档时应使用的理想的最小屏幕大小是否为 msoScreenSize1152x900。*/
function test() {
    alert(Application.DefaultWebOptions.ScreenSize == msoScreenSize1152x900)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowPNG](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/AllowPNG) | 如果以网页保存文档时，允许将 PNG（可移植网络图形）作为图像格式使用，则为 **True** 。如果不允许将 PNG 作为输出格式使用，则为 **False** 。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [AlwaysSaveInDefaultEncoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/AlwaysSaveInDefaultEncoding) | 如果在保存网页或纯文本文档时将使用默认编码，而该默认编码与文件打开时的初始编码是互相独立的，则该属性值为 **True** 。如果使用文件的初始编码，则该属性值为 **False** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [CheckIfOfficeIsHTMLEditor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/CheckIfOfficeIsHTMLEditor) | 如果在启动 ET 时，ET 检查某个 WPS 应用程序是否为默认 HTML 编辑器，则该值为 **True** 。如果 ET 并不进行此检查，则该值为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DownloadComponents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/DownloadComponents) | 如果必要的“WPS Office Web 组件”在您用 Web 浏览器查看已保存的文档时已经下载，但只有在尚未安装这些组件时，该值为 **True** 。如果没有下载这些组件，则为 **False** 。默认值是 **False** 。 **Boolean** 类型，可读写。 |
| [Encoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/Encoding) | 当查看已保存的文档时，返回或设置 Web 浏览器使用的文档编码（代码页或字符集）。默认值为系统代码页。 **MsoEncoding** 类型，可读写。 |
| [Fonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/Fonts) | 返回 **WebPageFonts** 集合，该集合代表用户在 ET 中打开网页，而该网页中没有指定任何字体信息，或者当前默认字体无法显示网页中的字符集时，ET 将使用的字体集。只读。 |
| [LoadPictures](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/LoadPictures) | 在 ET 中打开某个文档时，如果加载图像，则该值为 **True** ，通常这些图像和文档并不是在 ET 中创建的。如果未加载图像，则该值为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [LocationOfComponents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/LocationOfComponents) | 返回或设置中央 URL（对于 Intranet 或 Web）或路径（对于本地或网络而言），授权用户可以在查看保存的文档时，从这些位置下载“WPS Office Web 组件”。默认值是 WPS Office 的本地或网络安装路径。 **String** 型，可读写。 |
| [OrganizeInFolder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/OrganizeInFolder) | 如果为 **True** ，则在将指定的文档保存为网页时，所有的支持文件（如背景纹理和图形）将组织在一个单独的文件夹中；如果为 **False** ，则支持文件和网页将保存在同一文件夹中。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/Parent) | 返回指定对象的父对象。只读。 |
| [PixelsPerInch](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/PixelsPerInch) | 返回或设置网页中图形图像的密度（每英寸的像素数）及表格单元格的密度。密度设置范围通常为 19 到 480 之间，对于普通的屏幕大小，通常的设置一般为 72、96 和 120。默认设置是 96。 **Long** 型，可读写。 |
| [RelyOnCSS](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/RelyOnCSS) | 如果在 Web 浏览器中查看保存的文档时，字体格式使用的是级联样式表 (CSS)，则为 **True** 。ET 会创建一个级联样式表文件，然后依据 **OrganizeInFolder** 属性的值，将该文件保存到指定文件夹或与网页相同的文件夹中。如果使用了 HTML \<FONT\> 标记和级联样式表，则为 **False** 。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [RelyOnVML](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/RelyOnVML) | 如果为 **True** ，将文档保存为网页时，图形对象不能生成图像文件。如果为 **False** ，则可生成图像文件。默认值是 **False** 。 **Boolean** 类型，可读写。 |
| [SaveHiddenData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/SaveHiddenData) | 当以网页保存文档时，如果也保存指定区域之外的数据，则该值为 **True** 。此数据对于维护公式是很有必要的。如果指定区域之外的数据并不与网页一起保存，则该值为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [SaveNewWebPagesAsWebArchives](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/SaveNewWebPagesAsWebArchives) | 如果新的网页能够保存为 Web 档案，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ScreenSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/ScreenSize) | 返回或设置在 Web 浏览器中查看已保存文档时应使用的理想的最小屏幕大小（以像素为单位，宽度乘以高度）。可以是 **MsoScreenSize** 常量之一。默认常量是 **msoScreenSize800x600** 。 **MsoScreenSize** 类型，可读写。 |
| [TargetBrowser](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/TargetBrowser) | 返回或设置一个 **MsoTargetBrowser** 常量，它指明浏览器的版本。可读写。 |
| [UpdateLinksOnSave](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/UpdateLinksOnSave) | 如果该属性值为 **True** ，则将文档保存为网页之前，自动更新超链接和所有指向支持文件的路径，以确保文档保存时包含最新的链接。如果该属性值为 **False** ，则不更新链接。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [UseLongFileNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/member/UseLongFileNames) | 如果该属性值为 **True** ，则将文档保存为网页时使用长文件名。如果该属性值为 **False** ，则不使用长文件名，而使用 DOS 文件名格式（8.3）。默认值是 **True** 。 **Boolean** 类型，可读写。 |