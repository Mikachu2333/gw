# XMLNode 对象

表示应用于文档的单个 XML 元素。

## 说明


每个已应用于文档的 XML 元素都显示为 **“XML 结构”** 任务窗格的树视图控件中的一个节点。树视图中的每个节点都是 **XMLNode** 对象的一个实例。树视图的层次结构表明节点是否包含子节点。

使用 **[XMLNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/obj)** 集合的 **Item** 方法可返回一个 **XMLNode** 对象。使用 **Validate** 方法可根据所应用的架构验证 XML 元素是否有效、必需的子元素是否存在并按要求的顺序显示。运行 **Validate** 方法后，使用 **ValidationStatus** 属性可验证元素是否有效，使用 **ValidationErrorText** 属性可显示关于如下内容的信息：用户应采用哪些措施来确保文档符合该 XML 架构的规则。


## 示例


```JavaScript
/*本示例将新增文档上新增段落中文档部分的文本设置为第一个文档上所有XML元素的名称。*/
function test() {
    let document = Application.Documents.Add()
    let xmlNodes = Application.Documents.Item(1).XMLNodes
    for (let i = 1; i <= xmlNodes.Count; i++) {
        document.Paragraphs.Add().Range.Text = xmlNodes.Item(i).BaseName
    }
}
```


```JavaScript
/*本示例显示活动文档中第一个XML元素的最后一个子节点中的文本。*/
function test() {
    let xmlNode = Application.ActiveDocument.XMLNodes.Item(1).LastChild
    alert(xmlNode.Text)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Copy) | 将指定的 XML 元素（不包括 XML 标记）复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Cut) | 将指定的 XML 元素从文档中移到剪贴板上。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Delete) | 删除 XML 文档中指定的 XML 元素。 |
| [RemoveChild](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/RemoveChild) | 从指定的元素中删除子元素。 |
| [SelectNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/SelectNodes) | 返回一个 **[XMLNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNodes/obj)** 集合，该集合代表与 XPath 参数匹配的所有子元素（它们的顺序与它们在指定的 XML 元素中出现的顺序相同）。 |
| [SelectSingleNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/SelectSingleNode) | 返回一个 **XMLNode** 对象，该对象代表指定的 XML 元素中第一个与 XPath 参数匹配的子元素。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [BaseName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/BaseName) | 返回一个 **String** 类型的值，该值代表不带任何前缀的元素名称。 |
| [ChildNodeSuggestions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/ChildNodeSuggestions) | 返回一个 **XMLChildNodeSuggestions** 集合，代表指定元素的子元素列表。 |
| [ChildNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/ChildNodes) | 返回一个 **XMLNodes** 集合，该集合代表指定元素的子元素。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [FirstChild](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/FirstChild) | 返回一个 **XMLNode** 对象，该对象代表一个XML元素的第一个子节点。只读。 |
| [HasChildNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/HasChildNodes) | 返回 **Boolean** 值，该值表示 XML 节点是否有子节点。只读。 |
| [LastChild](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/LastChild) | 返回一个 **XMLNode** 对象，该对象代表 XML 元素的最后一个子节点。 |
| [Level](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Level) | 返回一个 **[WdXMLNodeLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdXMLNodeLevel)** 常量，该常量代表 XML 元素是段落的一部分、是整个段落、包含在表格单元格中还是包含表格行。只读。 |
| [NamespaceURI](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/NamespaceURI) | 返回一个 **String** 类型的值，该值代表指定对象的架构命名空间的统一资源标识符 (URI)。只读。 |
| [NextSibling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/NextSibling) | 返回一个 **XMLNode** 对象，该对象代表文档中与指定元素同级的下一个元素。 |
| [NodeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/NodeType) | 返回一个 **[WdXMLNodeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdXMLNodeType)** 常量，该常量代表节点的类型。 |
| [NodeValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/NodeValue) | 返回或设置一个 **String** 类型的值，该值代表 XML 元素的值。可读写。 |
| [OwnerDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/OwnerDocument) | 返回一个代表指定 XML 元素的父文档的 **Document** 对象。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **XMLNode** 对象的父对象。 |
| [ParentNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/ParentNode) | 返回一个代表指定元素的父元素的 **XMLNode** 对象。 |
| [PlaceholderText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/PlaceholderText) | 设置或返回一个 **String** 类型的值，该值代表为不包含文本的元素显示的文本。 |
| [PreviousSibling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/PreviousSibling) | 返回一个 **XMLNode** 对象，该对象代表文档中与指定元素同级的前一个元素。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表包含在指定对象中的文档部分。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLNode/member/Text) | 返回或设置 XML 元素中包含的文本。 **String** 类型，可读写。 |