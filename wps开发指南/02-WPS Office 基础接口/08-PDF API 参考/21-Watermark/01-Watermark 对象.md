# Watermark 对象

`Watermark` 对象用于管理文档的水印。

## 说明


通过 `doc.Watermark` 访问。

## 示例


```JavaScript
var watermark = app.ActiveDocument.Watermark;
watermark.AddTextWatermark("机密文件");

watermark.AddTextWatermark("内部资料", "1-10", 45, "黑体", 48,
    0x000000FF, true, false, false, 0.5, 1.0, 1, 1, 0, 0, 2);
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddTextWatermark](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Watermark/member/AddTextWatermark) | 添加文字水印。 |
| [AddImageWatermark](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Watermark/member/AddImageWatermark) | 添加图片水印。 |
| [RemoveAllWatermark](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Watermark/member/RemoveAllWatermark) | 移除文档中的所有水印。 |
| [HasWatermark](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Watermark/member/HasWatermark) | 检查文档或指定页面是否包含水印。 |
