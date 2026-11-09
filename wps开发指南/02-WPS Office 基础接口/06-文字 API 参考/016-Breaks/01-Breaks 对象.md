# Breaks 对象

页面中分页符、分栏符和分节符的集合。使用 **Breaks** 集合及相关对象和属性可通过编程方式定义文档的页面布局。

## 说明


使用 **[Breaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Page/member/Breaks)** 属性返回 **Breaks** 的集合。


## 示例


```JavaScript
/*本示例显示活动文档上活动窗口的第一个窗格的第一页的第一个分隔符出现的页码。*/
function test() {
    let breaks = Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks
    alert(`第一个分隔符出现的页码： ${breaks.Item(1).PageIndex}`)
}
```


```JavaScript
/*本示例向活动窗口的第一个窗格的第一页中的第一个分隔符后插入一个新的段落。*/
function test() {
    let range = Application.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks.Item(1).Range
    range.InsertParagraphAfter()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Breaks/member/Item) | 返回集合中的单个 **Break** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Breaks/member/Application) | 返回一个 [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj) 对象，该对象代表 WPS 应用程序。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Breaks/member/Count) | 返回 **Breaks** 集合中的项目数。 **Long** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Breaks/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Breaks/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Breaks** 集合中的父对象。 |