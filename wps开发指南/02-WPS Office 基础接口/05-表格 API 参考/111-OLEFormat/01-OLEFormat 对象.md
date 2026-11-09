# OLEFormat 对象

包含 OLE 对象的属性。

## 说明


如果 **Shape** 对象不代表某个链接的或嵌入的对象，则 **OLEFormat** 属性失败。


## 示例


```JavaScript
/*使用 OLEFormat 属性可返回 OLEFormat 对象。以下示例激活 Shapes 集合中的 OLE 对象。*/
function test() {
    Worksheets.Item(1).Shapes.Item(1).OLEFormat.Activate()
}
```


```JavaScript
/*此示例显示活动工作表中第二个 OLE 对象的程序标识符。*/
function test() {
    alert(ActiveSheet.Shapes.Item(2).OLEFormat.Object.progID)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/member/Activate) | 激活当前 OLE 对象。 |
| [Verb](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/member/Verb) | 向指定的 OLE 对象服务器发送动词。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Object](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/member/Object) | 返回与此 OLE 对象相联系的 OLE 自动化对象。 **Object** 型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [progID](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/member/progID) | 返回对象的程序标识符。 **String** 型，只读。 |