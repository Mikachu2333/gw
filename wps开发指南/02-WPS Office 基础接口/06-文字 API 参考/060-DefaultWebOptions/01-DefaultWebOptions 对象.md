# DefaultWebOptions 对象

包含 WPS 在您打开网页或将文档另存为网页时使用的应用程序级全局属性。

## 说明


您可以在应用程序（全局）级返回或设置属性，也可以在文档级返回或设置。（注意，属性值会因文档而异，具体情况由保存文档时的属性值决定）。文档级属性设置替代应用程序级属性设置。文档级属性设置包含在 **[WebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/obj)** 对象中。

使用 **DefaultWebOptions** 方法返回 **DefaultWebOptions** 对象。


## 示例


```JavaScript
/*本示例显示 WPS 是否使用“单个文件网页”格式保存新的网页。*/
function test() {
    alert(Application.DefaultWebOptions().SaveNewWebPagesAsWebArchives)
}
```


```JavaScript
/*本示例设置在查看保存的文档时 Web 浏览器使用的文档默认编码为阿拉伯语。*/
function test() {
    Application.DefaultWebOptions().Encoding = msoEncodingArabic
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlwaysSaveInDefaultEncoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/AlwaysSaveInDefaultEncoding) | 如果在保存网页或纯文本文档时使用默认编码，而不管打开该文件时的原始编码如何，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CheckIfOfficeIsHTMLEditor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/CheckIfOfficeIsHTMLEditor) | 如果在启动 WPS 时，WPS 检查某个 Office 应用程序是否为默认 HTML 编辑器，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CheckIfWordIsDefaultHTMLEditor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/CheckIfWordIsDefaultHTMLEditor) | 如果在启动 WPS 时，WPS 检查自己是否为默认 HTML 编辑器，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Encoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/Encoding) | 返回或设置在查看保存的文档时 Web 浏览器使用的文档编码（代码页或字符集）。 **MsoEncoding** 类型，可读写。 |
| [FolderSuffix](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/FolderSuffix) | 返回一个 **String** 类型的值，该值代表 WPS 在将文档另存为网页、使用长文件名或将支持文件保存在单独的文件夹中时使用的文件夹后缀。只读。 |
| [Fonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/Fonts) | 返回一个 **WebPageFonts** 集合，该集合代表在 WPS 中打开网页时 WPS 所使用的字体集。 |
| [PixelsPerInch](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/PixelsPerInch) | 返回或设置网页中图形图像及表格单元格的密度（每英寸的像素数）。可读/写 **Long** 类型。 |
| [SaveNewWebPagesAsWebArchives](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/SaveNewWebPagesAsWebArchives) | 如果为 **True** ，则 WPS 使用“单个文件网页”（以前称为“Web 存档”）格式保存新的网页。可读/写 **Boolean** 类型。 |
| [UpdateLinksOnSave](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/UpdateLinksOnSave) | 如果在将文档另存为网页时，所有支持文件的超链接和路径都会自动更新，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |