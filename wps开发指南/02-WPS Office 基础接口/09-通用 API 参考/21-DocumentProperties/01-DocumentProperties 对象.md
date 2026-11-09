# DocumentProperties 对象

 **[DocumentProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/obj)** 对象的集合。每个 **DocumentProperty** 对象均代表容器文档的一个内置属性或自定义属性。

## 说明


使用 **Add** 方法可创建一个新的自定义属性，并将其添加到 **DocumentProperties** 集合中。不能使用 **Add** 方法创建内置文档属性。  

使用 **BuiltinDocumentProperties(index)** 可返回一个代表特定内置文档属性的 **DocumentProperty** 对象；其中 *index* 是该内置文档属性的索引号。

使用 **CustomDocumentProperties(index)** 可返回一个代表特定自定义文档属性的 **DocumentProperty** 对象；其中 *index* 是该自定义文档属性的编号。


## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档中第二个自定义文档属性的名称。*/
function test() {
    alert(ActiveDocument.CustomDocumentProperties.Item(2).Name)
}
```


```JavaScript
/*本示例运行于文字组件，判断如果第一个文档的自定义文档属性的数量大于 1，则向 DocumentProperties 集合中添加一个自定义文档属性。*/
function test() {
    let docProperties = Documents.Item(1).CustomDocumentProperties
    if (docProperties.Count > 1) {
        docProperties.Add("example", false, null, "test")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/member/Add) | 新建一个自定义的文档属性。只能在自定义 **DocumentProperties** 集合中新添文档属性。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/member/Item) | 获取 **DocumentProperties** 集合中的一个 **DocumentProperty** 对象。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/member/Application) | 获取一个 **Application** 对象，代表 **DocumentProperties** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/member/Count) | 获取一个 **Long** 类型的值，指示 **DocumentProperties** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/member/Creator) | 获取一个 32 位整数，指示创建 **DocumentProperties** 对象时所使用的应用程序。只读。 |