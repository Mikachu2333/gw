# Documents 对象

`Documents` 对象代表所有已打开文档的集合。

## 说明


通过 `app.Documents` 访问。

## 示例


```JavaScript
var docs = app.Documents;
var count = docs.Count;
console.log("打开的文档数量: " + count);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Documents/member/Item) | 根据索引获取指定文档对象。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Documents/member/Open) | 打开指定文件。 |
| [New](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Documents/member/New) | 新建一个空白 PDF 文档并返回 **Document** 对象。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Documents/member/Close) | 关闭所有文档。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Documents/member/Count) | 获取当前打开的文档数量。 |
