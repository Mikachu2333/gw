# HeaderFooter 对象

`HeaderFooter` 对象用于管理文档的页眉和页脚。

## 说明


通过 `doc.HeaderFooter` 访问。

## 示例


```JavaScript
var hf = app.ActiveDocument.HeaderFooter;
hf.AddHeaderFooter(JSON.stringify({
    header_center: [{"Text": "文档标题"}],
    footer_right: [{"Page": 0}],
    start: 1,
    fontSize: 10
}));
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/HeaderFooter/member/AddHeaderFooter) | 添加页眉页脚。JSON 顶层字段控制全局样式与页面范围；每个位置的值为数组，数组元素为内容项对象。 |
| [RemoveAllHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/HeaderFooter/member/RemoveAllHeaderFooter) | 移除所有页眉页脚。 |
| [HasHeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/HeaderFooter/member/HasHeaderFooter) | 检查文档是否包含页眉页脚。 |
