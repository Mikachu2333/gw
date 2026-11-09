# DocumentProperty 对象

代表容器文档的一个自定义或内置文档属性。 **DocumentProperty** 对象是 **[DocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/obj)** 集合的成员。

## 说明


使用 WPS 文字 **Document.BuiltinDocumentProperties** (*index*) 属性可返回一个代表特定内置文档属性的 **DocumentProperty** 对象，其中 *index* 是该内置文档属性的名称或索引号。

使用 WPS 文字 **Document.CustomDocumentProperties** (*index*) 属性可返回一个代表特定自定义文档属性的 **DocumentProperty** 对象，其中 *index* 是该自定义文档属性的名称或索引号。

 **msoPropertyTypeString** ( **[MsoDocProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoDocProperties)** ) 类型的属性长度限制为 255 个字符。


## 示例


```JavaScript
/*本示例运行于文字组件，将活动文档的所有自定义文档属性的名称和值插入到文档中。*/
function test() {
    for (let i = 1; i <= ActiveDocument.CustomDocumentProperties.Count; i++) {
        let docProperty = ActiveDocument.CustomDocumentProperties.Item(i)
        Selection.TypeText(`名称：${docProperty.Name}\t值：${docProperty.Value}\n`)
    }
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档的所有内置文档属性的名称。*/
function test() {
    let str = ""
    for (let i = 1; i <= ActiveDocument.BuiltInDocumentProperties.Count; i++) {
        let docProperty = ActiveDocument.BuiltInDocumentProperties.Item(i)
        str += docProperty.Name + "\n"
    }
    alert(str)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Delete) | 删除自定义的文档属性。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Application) | 获取一个 **Application** 对象，代表 **DocumentProperty** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Creator) | 获取一个 32 位整数，指示创建 **DocumentProperty** 对象时所使用的应用程序。只读。 |
| [LinkSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/LinkSource) | 获取或设置所链接的自定义文档属性的来源。可读/写。 |
| [LinkToContent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/LinkToContent) | 如果自定义文档属性的值链接到容器文档的内容，则为 **True** 。如果该值是静态的，则为 **False** 。可读/写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Name) | 获取或设置文档属性的名称。可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Type) | 获取或设置文档属性类型。对于内置文档属性为只读；对于自定义文档属性为可读/写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Value) | 获取或设置文档属性的值。可读/写。 |