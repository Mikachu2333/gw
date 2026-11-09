# Hyperlinks 对象

代表文档、范围或所选内容中 **Hyperlink** 对象的集合。

## 说明


使用 **Hyperlinks** 属性返回 **Hyperlinks** 集合

使用 **Add** 方法创建超链接并将其添加到 **Hyperlinks** 集合中。

使用 **Hyperlinks** (Index)（其中 Index 是索引号）可返回文档、范围或所选内容中的单个 **Hyperlink** 对象。

文档中此集合的 **Count** 属性返回正文部分的项目数。要统计其他部分中的个数，请使用带有 **Range** 对象的集合。


## 示例


```JavaScript
/*本示例检查第一个文档中的所有超链接中是否存在地址中包含单词“wps”的链接。如果找到超链接，则使用 Follow 方法激活该超链接。*/
function test() {
    let hyperlinks = Documents.Item(1).Hyperlinks
    for (let i = 1; i <= hyperlinks.Count; i++) {
        let hyperlink = hyperlinks.Item(1)
        if (hyperlink.Address.includes("wps")) {
            hyperlink.Follow()
        }
    }
}
```


```JavaScript
/*本示例将选定内容转换为指向 wps 官网地址的超链接。*/
function test() {
    Application.ActiveDocument.Hyperlinks.Add(Selection.Range, "https://www.wps.cn")
}
```


```JavaScript
/*本示例显示选定内容中第二个超链接的名称*/
function test() {
    alert(Selection.Hyperlinks.Item(2).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlinks/member/Add) | 返回一个 **Hyperlink** 对象，该对象代表添加到区域、选定内容或文档的新的超链接。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlinks/member/Item) | 返回集合中的单个 **Hyperlink** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlinks/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlinks/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中超链接的数目。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlinks/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Hyperlinks/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Hyperlinks** 对象的父对象。 |