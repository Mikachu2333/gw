# XMLNamespaces 对象

 **XMLNamespace** 对象的集合，该集合代表架构库中架构的整个集合。


## 示例


```JavaScript
/*本示例将指定的架构添加到架构库。本示例假设在指定的路径中已有一个名为 test.xml 的架构。*/
function test() {
    Application.XMLNamespaces.Add("D:\\示例\\test.xml", "D:\\示例\\test.xml", "example_1", true)
}
```


```JavaScript
/*本示例显示架构库中第一个架构的 URI。*/
function test() {
    alert(Application.XMLNamespaces.Item(1).URI)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespaces/member/Add) | 返回一个 **XMLNamespace** 对象，该对象代表添加到架构库中并在 WPS 中对用户可用的架构。 |
| [InstallManifest](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespaces/member/InstallManifest) | 将指定的 XML 扩展包安装在用户计算机上，令一个或更多用户能够使用 XML 智能文档解决方案。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespaces/member/Item) | 返回集合中的单个 **XMLNamespace** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespaces/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespaces/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中 XML 命名空间的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespaces/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNamespaces/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **XMLNamespaces** 对象的父对象。 |