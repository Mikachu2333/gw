# DocProperty 对象

`DocProperty` 对象用于获取和设置文档的元数据属性。

## 说明


通过 `doc.DocProperty` 访问。

## 示例


```JavaScript
var prop = app.ActiveDocument.DocProperty;
prop.Title = "我的文档";
console.log("标题: " + prop.Title);
```

{#objmember}

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/DocProperty/member/Title) | 获取或设置文档标题。 |
| [Author](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/DocProperty/member/Author) | 获取或设置文档作者。 |
| [Subject](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/DocProperty/member/Subject) | 获取或设置文档主题。 |
| [Abstract](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/DocProperty/member/Abstract) | 获取或设置文档摘要/关键字。 |
| [CreationDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/DocProperty/member/CreationDate) | 获取文档创建日期。 |
| [ModifyDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/DocProperty/member/ModifyDate) | 获取文档修改日期。 |
| [CreatorApp](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/DocProperty/member/CreatorApp) | 获取创建文档的应用程序名称。 |
| [CreatorVersion](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/DocProperty/member/CreatorVersion) | 获取创建文档的应用程序版本。 |
