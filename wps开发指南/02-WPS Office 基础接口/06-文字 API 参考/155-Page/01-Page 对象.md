# Page 对象

代表文档中的页面。使用 **Page** 对象及相关方法和属性可通过编程方式定义文档的页面版式。

## 说明


使用 **Item** 方法可访问文档中的特定页面。


## 示例


```JavaScript
/*本示例显示活动文档上活动窗口的第一个窗格的第一页的宽度。*/
function test() {
    let page = ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1)
    alert(page.Width)
}
```


```JavaScript
/*本示例显示活动文档上活动窗口的第一个窗格的第一页的第一个分隔符出现的页码。*/
function test() {
    let breaks = Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks
    alert(`第一个分隔符出现的页码： ${breaks.Item(1).PageIndex}`)
}
```
要访问页码，请使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 或 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象的 **Information** 属性，或者 **Break** 对象（该对象属于指定 **Page** 对象的 **Breaks** 集合）的 **PageIndex** 属性。

 **[Page](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/obj)** 对象的 **[Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Top)** 和 **[Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Left)** 属性总是返回 0（零），代表页面的左上角。 **[Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Height)** 和 **[Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Width)** 属性返回在“页面设置”对话框中指定的或通过 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/obj)** 对象指定的页面大小的高度和宽度，以磅为单位（72 磅 = 1 英寸）。例如，对于纵向模式下的 8-1/2 × 11 英寸页面， **[Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Height)** 属性返回 792， **[Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Width)** 属性返回 612。所有这四个属性都是只读的。


{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [Breaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Breaks) | 返回一个 **Breaks** 集合，该集合代表页面上的分隔符。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [EnhMetaFileBits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/EnhMetaFileBits) | 返回一个 **Variant** 类型的值，该值代表文本页显示方式的图片表示形式。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Height) | 返回一个 **Long** 类型的值，该值代表页面的高度（以像素为单位）。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Left) | 返回一个 **Long** 类型的值，该值代表页面的左边缘。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Page** 对象的父对象。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Top) | 返回一个 **Long** 类型的值，该值代表页面的上边缘。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Width) | 返回一个 **Long** 类型的值，该值代表在 **“页面设置”** 对话框中定义的纸张宽度，以磅为单位。只读 **Long** 类型。 |