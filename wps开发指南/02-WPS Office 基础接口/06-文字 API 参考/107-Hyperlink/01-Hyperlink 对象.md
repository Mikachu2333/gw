# Hyperlink 对象

代表一个超链接。 **Hyperlink** 对象是 **Hyperlinks** 集合的一个成员。

## 说明


使用 **Hyperlink** 属性可返回一个与形状相关联的 **Hyperlink** 对象（一个形状只能有一个超链接）。

使用 **Hyperlinks** (*Index*) 可从文档、范围或所选内容返回单个 **Hyperlink** 对象，其中 *Index* 为索引号。


## 示例


```JavaScript
/*本示例设置活动文档中第一个超链接的“屏幕提示”文字。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Item(1).ScreenTip = "Home"
}
```


```JavaScript
/*本例显示所选超链接的子地址。*/
function test() {
    if (Application.Selection.Range.Hyperlinks.Count >= 1) {
        alert(Application.Selection.Range.Hyperlinks.Item(1).SubAddress)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddToFavorites](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/AddToFavorites) | 创建文档或超链接的快捷方式，并将其添加到“收藏夹”。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Delete) | 删除指定的超链接。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Address) | 返回或设置指定超链接的地址（例如，文件名或 URL）。 **String** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Hyperlink** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Range) | 返回一个 **Range** 对象，该对象代表超链接中包含的文档部分。 |
| [ScreenTip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/ScreenTip) | 返回或设置当鼠标指针置于指定超链接之上时显示的“屏幕提示”文字。 **String** 类型，可读写。 |
| [Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Shape) | 返回一个指定超链接或图表顶点的 **Shape** 对象。 |
| [SubAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/SubAddress) | 返回或设置指定超链接目标中命名的位置。 **String** 类型，可读写。 |
| [Target](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Target) | 返回或设置在其中加载超链接的图文框或窗口的名称。可读写 **String** 类型。 |
| [TextToDisplay](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/TextToDisplay) | 返回或设置文档中指定超链接的可视文本。 **String** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlink/member/Type) | 返回超链接的类型。只读 **MsoHyperlinkType** 类型。 |