# Attachments 对象

代表 PDF 文档中所有文件附件的集合。

## 说明

通过 doc.Attachments 访问。支持添加、删除附件，以及按索引获取单个 Attachment 对象。
**Attachments** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。

## 示例


```JavaScript
var count = app.ActiveDocument.Attachments.Count;
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachments/member/Item) | 获取指定索引的附件对象。 |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachments/member/Add) | 添加附件到文档，返回新添加的附件对象。若文件不存在或添加失败则返回错误。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachments/member/Delete) | 根据名称删除附件。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachments/member/Count) | 获取附件数量。 |
