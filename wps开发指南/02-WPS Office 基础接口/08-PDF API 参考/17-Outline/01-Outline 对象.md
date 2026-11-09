# Outline 对象

代表 PDF 文档大纲（书签）树中的单个节点。

## 说明

通过 doc.OutlineManager.RootOutline 获取根节点，再通过 Children(i) 递归访问子节点，构成树状大纲结构。Outline 对象提供节点标题、关联页码、展开/收起状态等属性，以及添加子/同级节点、执行跳转动作、删除节点等方法。

**Outline** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。

## 示例


```JavaScript
var root = app.ActiveDocument.OutlineManager.RootOutline;
var first = root.Children(1);
console.log("标题: " + first.Title);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Children](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/Children) | 获取指定索引的子大纲节点。 |
| [DoAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/DoAction) | 执行大纲节点关联的动作。 |
| [AddChild](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/AddChild) | 在当前节点下添加子大纲。注意：当前版本实现中 `pageIndex` 与 `index` 参数未生效，仅标题有效，节点始终追加到末尾。 |
| [AddSibling](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/AddSibling) | 在当前节点后添加同级大纲。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/Delete) | 删除当前大纲节点及其所有子节点。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/Open) | 展开当前大纲节点。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/Close) | 收起当前大纲节点。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/Title) | 获取大纲节点的标题。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/Color) | 获取大纲节点的颜色。 |
| [PageIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/PageIndex) | 获取大纲节点关联的页面索引。 |
| [HasAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/HasAction) | 获取大纲节点是否有关联动作。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/Count) | 获取子大纲节点数量。 |
| [IsOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Outline/member/IsOpen) | 获取大纲节点是否处于展开状态。 |
