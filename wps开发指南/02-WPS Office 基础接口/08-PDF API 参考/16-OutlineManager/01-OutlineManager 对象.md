# OutlineManager 对象

通过 `doc.OutlineManager` 访问。

## 说明

大纲管理器，通过 `doc.OutlineManager` 访问。提供根节点获取及全局展开/收起功能。

**OutlineManager** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。

## 示例


```JavaScript
var root = app.ActiveDocument.OutlineManager.RootOutline;
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [OpenAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/OutlineManager/member/OpenAll) | 展开所有大纲节点。 |
| [CloseAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/OutlineManager/member/CloseAll) | 收起所有大纲节点。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [RootOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/OutlineManager/member/RootOutline) | 获取根大纲节点。 |
