# CustomXMLPart 对象

代表 **CustomXMLParts** 集合中的单个 **CustomXMLPart** 。


## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档中添加 CustomXMLPart 对象。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Add("<author>Mark Twain</author>")
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档的第一个内容控件映射到的自定义 XML 部件的 GUID。*/
function test() {
    let customXMLPart = ActiveDocument.ContentControls.Item(1).XMLMapping.CustomXMLPart
    Selection.TypeText(customXMLPart.Id)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/AddNode) | 将节点添加到 XML 树。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/Delete) | 从数据存储（ **IXMLDataStore** 接口）中删除当前 **CustomXMLPart** 。 |
| [Load](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/Load) | 使模板作者可以通过现有文件填充 **CustomXMLPart** 。如果加载成功，则返回 **True** 。 |
| [LoadXML](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/LoadXML) | 允许模板作者依据 XML 字符串填充 **CustomXMLPart** 对象。如果加载成功，则返回 **True** 。 |
| [SelectNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/SelectNodes) | 从自定义 XML 部件中选择节点的集合。 |
| [SelectSingleNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/SelectSingleNode) | 选择自定义 XML 部件内与 XPath 表达式匹配的单个节点。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/Application) | 获取一个代表 **CustomXMLPart** 对象的容器应用程序的 **Application** 对象。只读。 |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/BuiltIn) | 获取一个指示 **CustomXMLPart** 是否为内置的值。只读 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLPart** 对象时所使用的应用程序。只读。 |
| [DocumentElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/DocumentElement) | 获取文档中数据绑定区域的根元素。如果该区域为空，则该属性将返回 **null** 。只读。 |
| [Errors](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/Errors) | 获取一个提供对任何 XML 验证错误（如果有）的访问的 **CustomXMLValidationErrors** 对象。如果不存在验证错误，则此属性将返回 **null** 。只读。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/Id) | 获取一个 **String** 类型的值，其中包含分配给当前 **CustomXMLPart** 对象的 GUID。只读。 |
| [NamespaceManager](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/NamespaceManager) | 获取对当前 **CustomXMLPart** 对象使用的命名空间前缀映射集。只读。 |
| [NamespaceURI](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/NamespaceURI) | 获取 **CustomXMLPart** 对象的命名空间的唯一地址标识符。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/Parent) | 获取 **CustomXMLPart** 对象的 **Parent** 对象。只读。 |
| [SchemaCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/SchemaCollection) | 获取或设置一个代表附加到文档中数据绑定区域的架构集的 **[CustomXMLSchemaCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchemaCollection/obj)** 对象。可读/写。 |
| [XML](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLPart/member/XML) | 获取当前 **CustomXMLPart** 对象的 XML 表示形式。只读。 |