# XMLNamespace 对象

代表架构库中的单个架构。

## 说明


在 WPS 中，可以通过 **“模板和加载项”** 对话框中的 **“XML 架构”** 选项卡来访问架构库。架构库表示安装在用户计算机上的架构，并且用户已将这些架构应用于 WPS 文档或者用户已使用 **“架构库”** 对话框将这些架构显式添加到架构库中。

使用 **XMLNamespaces** 集合的 **Item** 方法可返回一个 **XMLNameSpace** 对象。 **Item** 方法的索引值可以是 **Long** 类型，表明架构在架构库中的位置，也可以是 **String** 类型，代表使用 **URI** 属性（在架构中定义的 TargetNamespace 设置）返回的架构的名称。

SimpleSample 架构包含在 Smart Document Software Development Kit (SDK) 中。 有关详细信息，请参阅 Smart Document SDK。


## 示例


```JavaScript
/*本示例将URI为“test”的架构附加到活动文档。*/
function test() {
    let xmlNamespaces = Application.XMLNamespaces
    for (let i = 1; i <= xmlNamespaces.Count; i++) {
        if (xmlNamespaces.Item(i).URI == "test") {
            xmlNamespaces.Item(i).AttachToDocument(ActiveDocument)
        }
    }
}
```


```JavaScript
/*本示例显示架构库中所有架构的物理位置。*/
function test() {
    let xmlNamespaces = Application.XMLNamespaces
    for (let i = 1; i <= xmlNamespaces.Count; i++) {
        alert(xmlNamespaces.Item(i).Location())
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Alias](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespace/member/Alias) | 返回一个 **String** 类型的值，该值代表指定对象的显示名称。 |
| [AttachToDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespace/member/AttachToDocument) | 将 XML 架构附加到文档。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespace/member/Delete) | 删除可用的 XML 架构列表中指定的 XML 架构。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespace/member/Location) | 返回或设置 **String** 值，该值表示 XML 架构的命名空间在架构库中的物理位置。可读/写。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespace/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespace/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespace/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **XMLNamespace** 对象的父对象。 |
| [URI](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespace/member/URI) | 返回一个 **String** 类型的值，代表相关命名空间的“统一资源标识符”(URI)。 |