# Hyperlink 对象

代表与非占位符形状或文本相关联的超链接。

## 说明


可以使用超链接跳转到一个 Internet 或 Intranet 网站、另一个文件或当前演示文稿中的一张幻灯片上。 **Hyperlink** 对象是 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlinks/obj)** 集合的成员。 **Hyperlinks** 集合包含幻灯片或母版中的所有超链接。

使用 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Hyperlink)** 属性返回形状的超链接。可以为形状分配两个不同的超链接：一个是用户在幻灯片放映期间单击形状时跟随的超链接，另一个是在幻灯片放映期间用户将鼠标指针移到形状上时跟随的超链接。要使超链接在幻灯片放映期间处于活动状态，必须将 **Action** 属性设置为 **ppActionHyperlink** 。


## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中第三个形状的鼠标单击操作设置为打开一个超链接。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(3).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionHyperlink
    actionSetting.Hyperlink.Address = "https://www.wps.cn/"
}
```
一张幻灯片可以包含多个超链接。每个非占位符形状都可以有一个超链接；形状中的文本可以有自己的超链接；每个单独的字符都可以有自己的超链接。使用 **Hyperlinks** （*index*）（其中 *index* 是超链接编号）可返回单个 **Hyperlink** 对象。



```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片第二个超链接的屏幕提示文字。*/
function test() {
    let hyperlink = ActiveWindow.Selection.SlideRange.Item(1).Hyperlinks.Item(2)
    alert(hyperlink.ScreenTip)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/Delete) | 删除指定的 **Hyperlink** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/Address) | 返回或设置目标文档的 Internet 地址（URL）。可读/写 **String** 类型。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [EmailSubject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/EmailSubject) | 返回或设置超链接主题行的文本字符串。该主题行附加到超链接的 Internet 地址（URL）中。可读/写 **String** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/Parent) | 返回指定对象的父对象。 |
| [ScreenTip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/ScreenTip) | 返回或设置超链接的屏幕提示文字。可读/写 **String** 类型。 |
| [ShowAndReturn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/ShowAndReturn) | 决定 WPP 是否返回初始的幻灯片放映以及返回的条件。可读/写。 **MsoTriState** 类型。 |
| [SubAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/SubAddress) | 返回或设置与指定超链接相关联的文档中的位置，例如 WPS 文档中的书签、ET 工作表中的区域或 WPP 演示文稿中的幻灯片。可读/写 **String** 类型。 |
| [TextToDisplay](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/TextToDisplay) | 返回或设置不是与图形相关联的超链接的显示文字。可读/写 **String** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/member/Type) | 返回一个 **MsoHyperlinkType** 常量，该常量代表超链接的类型。只读。 |