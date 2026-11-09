# Background 对象

`Background` 对象用于管理文档背景。

## 说明


通过 `doc.Background` 访问。

## 示例


```JavaScript
var bg = app.ActiveDocument.Background;
bg.AddBackgroundColor(0xFFFFFF); // 白色背景
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddBackgroundColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Background/member/AddBackgroundColor) | 添加纯色背景。 |
| [AddBackgroundImage](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Background/member/AddBackgroundImage) | 添加图片背景。 |
| [RemoveAllBackground](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Background/member/RemoveAllBackground) | 移除所有背景。 |
