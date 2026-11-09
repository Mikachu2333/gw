# Attachment 对象

代表 PDF 文档中的单个文件附件。

## 说明

通过 doc.Attachments.Item(i) 获取指定附件。Attachment 对象提供附件的元数据（名称、大小、日期、校验和），以及在外部程序中打开附件或将其保存到本地路径的方法。
**Attachment** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。

## 示例


```JavaScript
var att = app.ActiveDocument.Attachments.Item(1);
console.log("附件名称: " + att.Name);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachment/member/Open) | 在外部程序中打开附件。 |
| [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachment/member/SaveAs) | 将附件保存到指定路径。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachment/member/Name) | 获取附件名称。 |
| [FileSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachment/member/FileSize) | 获取附件文件大小（字节）。 |
| [CreateDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachment/member/CreateDate) | 获取附件创建日期。 |
| [ModifyDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachment/member/ModifyDate) | 获取附件修改日期。 |
| [Checksum](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachment/member/Checksum) | 获取附件文件的校验和。 |
| [FileExtension](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Attachment/member/FileExtension) | 获取附件文件扩展名。 |
