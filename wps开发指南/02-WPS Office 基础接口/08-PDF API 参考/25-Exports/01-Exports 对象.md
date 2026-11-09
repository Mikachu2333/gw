# Exports 对象

`Exports` 对象提供文档导出功能。

## 说明


通过 `doc.Exports` 访问。

## 示例


```JavaScript
var exports = app.ActiveDocument.Exports;
exports.ExportToText("C:\\output.txt");
exports.ExportToText("C:\\output.txt", "1-10", "utf-8");
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ExportToText](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Exports/member/ExportToText) | 将文档导出为文本文件。 |
