# Windows 对象

代表 WPS PDF 应用程序中所有打开窗口的集合。

## 说明

通过 app.Windows 访问，使用 Count 获取窗口数量，Item(i) 按索引（1 起始）获取单个 Window 对象。
**Windows** 的接口成员见下列「方法」「属性」「事件」列表及各成员页。
## 示例


```JavaScript
var count = app.Windows.Count;
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Windows/member/Item) | 根据索引获取指定窗口对象。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Windows/member/Count) | 获取当前打开的窗口数量。 |
