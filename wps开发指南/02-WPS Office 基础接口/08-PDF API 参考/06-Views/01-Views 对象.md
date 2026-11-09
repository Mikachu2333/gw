# Views 对象

代表 WPS PDF 中的 **Views** 对象。

## 说明

Window 下所有 View 对象的集合，通过 `window.Views` 访问。通常每个窗口只有一个 View，使用 `Count` 可检查数量，`Item(i)`（1 起始）获取具体节点。

**Views** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。

## 示例


```JavaScript
var views = app.ActiveWindow.Views;
console.log("视图数量: " + views.Count);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Views/member/Item) | 根据索引获取视图对象。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Views/member/Count) | 获取视图数量。 |
