# Hyperlinks 对象

代表工作表或区域的超链接的集合。

## 说明


每个超链接都由一个 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/obj)** 对象代表。

使用 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** 属性可返回 **Hyperlinks** 集合。


## 示例


```JavaScript
/*本示例检查并打开第一个工作表中包含"wps"单词所有的超链接。*/
function test() {
    let hyperlinks = Application.Worksheets.Item(1).Hyperlinks
    for (let i = 1; i <= hyperlinks.Count; i++) {
        if (hyperlinks.Item(i).Name.indexOf("wps") != -1) {
            hyperlinks.Item(i).Follow()
        }
    }
}
```
使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/member/Add) 方法可创建一个超链接并将它添加到 **Hyperlinks** 集合。



```JavaScript
/*本示例向第一张工作表的单元格E5中添加一个超链接。*/
function test() {
    let sheet = Application.Worksheets.Item(1)
    sheet.Hyperlinks.Add(sheet.Range("E5"), "https://kingsoft.com")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/member/Add) | 向指定的区域或形状添加超链接。返回一个 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/obj)** 对象，它代表新的超链接。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/member/Delete) | 删除对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/member/Parent) | 返回指定对象的父对象。只读。 |