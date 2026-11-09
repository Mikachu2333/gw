# Break 对象

代表页面中的单个分页符、分栏符和分节符。使用 **Break** 对象及相关方法和属性可通过编程方式定义文档的页面版式。

## 说明


使用 **Breaks** 集合的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Breaks/member/Item)** 方法返回特定 **Break** 对象。


## 示例


```JavaScript
/*本示例显示活动文档上活动窗口的第一个窗格的第一页的第一个分隔符出现的页码。*/
function test() {
    let breaks = Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks
    alert(`第一个分隔符出现的页码： ${breaks.Item(1).PageIndex}`)
}
```


```JavaScript
/*本示例向活动文档上活动窗口的第一个窗格的第一页的第一个分隔符后插入“break”。*/
function test() {
    let range = Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks.Item(1).Range
    range.InsertAfter("break")
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Break/member/Application) | 返回一个 [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象，该对象代表 WPS 应用程序。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Break/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [PageIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Break/member/PageIndex) | 返回一个 **Long** 类型的值，该值代表指定分隔符出现的页码。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Break/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Break** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Break/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所含的部分文档。 |