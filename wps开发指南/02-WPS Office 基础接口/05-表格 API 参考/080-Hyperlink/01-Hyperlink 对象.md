# Hyperlink 对象

代表一个超链接。

## 说明


 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/obj)** 对象是 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** 集合的成员。

使用 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/obj)** 属性可返回某个形状的超链接（一个形状只能有一个超链接）。


## 示例


```JavaScript
/*本示例加载附于第一个形状（第一张工作表中）的超链接*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).Hyperlink.Follow(true)
}
```
区域或工作表可以有多个超链接。使用 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** (*index*) 可返回单个 **Hyperlink** 对象，其中 *index* 是超链接编号。



```JavaScript
/*本示例打开活动工作表中 A1:B2 区域中的第二个超链接*/
function test() {
    Application.Worksheets.Item(1).Range("A1:B2").Hyperlinks.Item(2).Follow()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Delete) | 删除对象。 |
| [Follow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Follow) | 如果已经下载指定文档，则显示缓冲区中的该文档。否则，本方法对指定超链接进行处理以下载目标文档，然后将该文档在适当的应用程序中显示出来。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Address) | 返回或设置一个 **String** 型，它代表目标文档的地址。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [EmailSubject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/EmailSubject) | 返回或设置指定超链接的电子邮件主题行的文本字符串。主题行是添加到超链接地址上的。 **String** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Parent) | 返回指定对象的父对象。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表附加的指定超链接的区域。 |
| [ScreenTip](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/ScreenTip) | 返回或设置指定超链接的屏幕提示文字。 **String** 类型，可读写。 |
| [Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Shape) | 返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，它代表附加到指定超链接的形状。 |
| [SubAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/SubAddress) | 返回或设置文档中与指定超链接相关联的位置。 **String** 类型，可读写。 |
| [TextToDisplay](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/TextToDisplay) | 返回或设置要为指定超链接显示的文本。默认值为超链接的地址。 **String** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/member/Type) | 返回一个包含 **MsoHyperlinkType** 常量的 **Long** 值，它代表 HTML 框架的位置。 |