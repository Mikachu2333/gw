# WebShape 对象

代表容器应用程序的一个图形，该图形是一个浏览器对象，可以直接渲染Html网页。

## 说明

使用AddWebShapeEx(str)可以为当前文档添加一个 **WebShape 对象，其中str表示需要渲染的网址。下面的示例表示像当前的图形中添加一个**  **WebShape 对象，渲染** "https://www.wps.cn"。

```javascript
//需要用户至少有一个sheet
Application.ActiveWorkbook.Sheets.Item(1).Shapes.AddWebShapeEx("https://www.wps.cn")
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Copy) | 复制当前WebShape对象至剪切板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Cut) | 剪切当前WebShape对象至剪切板。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Delete) | 删除当前WebShape对象。 |
| [DeleteProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/DeleteProperty) | 删除WebShape对象中对象属性的值。 |
| [DeleteWatchingData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/DeleteWatchingData) | 删除对应名字的监听区域。（已废除） |
| [GetAllProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/GetAllProperty) | 获取当前WebShape对象的所有属性，返回JSON格式的字符串 |
| [GetAllWatchingData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/GetAllWatchingData) | 获取所有的监听区域。（已废除） |
| [GetProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/GetProperty) | 获取WebShape对象对应键的属性。 |
| [GetWatchingData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/GetWatchingData) | 获取对应的监听区域。（已废除） |
| [SaveAsPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/SaveAsPicture) | 将当前WebShape对象保存为图片。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Select) | 选中当前WebShape对象。 |
| [SetImageData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/SetImageData) | 读取图片，并将其展示在WebShape对象上。 |
| [SetProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/SetProperty) | 设置WebShape属性的键值对。 |
| [SetWatchingData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/SetWatchingData) | 设置监听区域。（已废除） |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [DataSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/DataSource) | 返回DataSource对象。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Height) | 返回或设置WebShape对象的高。可读写。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/ID) | 返回WebShape对象的ID值。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Type) | 返回WebShape对象的类型。 |
| [Url](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Url) | 返回WebShape对象所渲染的网页网址。只读。 |
| [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Version) | 返回当前版本。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Visible) | 返回或设置当前WebShape对象的可见性。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps-extension-api/kso/WebShape/member/Width) | 返回或设置WebShape对象的宽度。 |