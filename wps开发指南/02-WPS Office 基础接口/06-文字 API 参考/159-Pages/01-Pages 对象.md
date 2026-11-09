# Pages 对象

文档中页面的集合。使用 **Pages** 集合及相关对象和属性可通过编程方式定义文档的页面版式。


## 示例


```JavaScript
/*本示例显示活动窗口中第一个窗格的页面数量。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Panes(1).Pages.Count)
}
```


```JavaScript
/*本示例显示活动窗口中第一个窗格的第一页的高度。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Panes(1).Pages.Item(1).Height)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pages/member/Item) | 返回集合中的单个 **Page** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pages/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pages/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的页数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pages/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Pages/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Pages** 对象的父对象。 |