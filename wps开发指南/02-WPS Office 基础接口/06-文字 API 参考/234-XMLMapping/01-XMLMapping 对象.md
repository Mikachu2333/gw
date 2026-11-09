# XMLMapping 对象

表示 **[ContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/obj)** 对象上自定义 XML 与内容控件之间的 XML 映射。XML 映射是内容控件中的文本与此文档的自定义 XML 数据存储中的 XML 元素之间的链接。

## 说明


使用 **SetMapping** 方法可以添加或更改使用 XPath 字符串的内容控件的 XML 映射。


## 示例


```JavaScript
/*本示例设置文档作者这一内置文档属性，在活动文档中插入新的内容控件，然后将此控件的 XML 映射设置为该内置文档属性。*/
function test() {
    Application.ActiveDocument.BuiltInDocumentProperties.Item("Author").Value = "David Jaffe"

    let contentControl = Application.ActiveDocument.ContentControls.Add(wdContentControlDate, ActiveDocument.Paragraphs.Item(1).Range)
    let blnMap = contentControl.XMLMapping.SetMapping("/ns1:coreProperties[1]/ns0:createdate[1]")
    if (blnMap == false) {
        alert("Unable to map the content control.")
    }
}
```
使用 **SetMappingByNode** 方法可以添加或更改使用 **CustomXMLNode** 对象的内容控件的 XML 映射。



```JavaScript
/*本示例设置文档作者这一内置文档属性，在活动文档中插入新的内容控件，然后将此控件的 XML 映射设置为该内置文档属性。*/
function test() {
    Application.ActiveDocument.BuiltInDocumentProperties.Item("Author").Value = "David Jaffe"

    let contentControl = Application.ActiveDocument.ContentControls.Add(wdContentControlDate, ActiveDocument.Paragraphs.Item(1).Range)
    let customXMLNode = Application.ActiveDocument.CustomXMLParts.SelectByNamespace("http://schemas.openxmlformats.org/package/2006/metadata/core-properties").Item(1)
    let childNode = customXMLNode.DocumentElement.ChildNodes.Item(1)

    let blnMap = contentControl.XMLMapping.SetMappingByNode(childNode)
}
```


```JavaScript
/*本示例创建新的 CustomXMLPart 对象，将自定义 XML 加载到该对象中，然后创建两个新的内容控件，并将它们分别映射到自定义 XML 内的不同 XML 元素。*/
function test() {
    let customXMLPart = Application.ActiveDocument.CustomXMLParts.Add()
    let strXML = "<books><book><author>Matt Hink</author>" +
        "<title>Migration Paths of the Red Breasted Robin</title>" +
        "<genre>non-fiction</genre><price>29.95</price>" +
        "<pub_date>2/1/2007</pub_date><abstract>You see them in " +
        "the spring outside your windows.  You hear their lovely " +
        "songs wafting in the warm spring air.  Now follow the path " +
        "of the red breasted robin as it migrates to warmer climes " +
        "in the fall, and then back to your back yard in the spring." +
        "</abstract></book></books>"
    customXMLPart.LoadXML(strXML)

    ActiveDocument.Range().InsertParagraphBefore()
    let range1 = Application.ActiveDocument.Paragraphs.Item(1).Range
    let customXMLNode1 = customXMLPart.SelectSingleNode("/books/book/title")
    let contentControl1 = ActiveDocument.ContentControls.Add(wdContentControlText, range1)
    contentControl1.XMLMapping.SetMappingByNode(customXMLNode1)

    range1.InsertParagraphAfter()
    let range2 = Application.ActiveDocument.Paragraphs.Item(2).Range
    let customXMLNode2 = customXMLPart.SelectSingleNode("/books/book/abstract")
    let contentControl2 = ActiveDocument.ContentControls.Add(wdContentControlText, range2)
    contentControl2.XMLMapping.SetMappingByNode(customXMLNode2)

    alert(contentControl2.XMLMapping.IsMapped)
}
```
使用 **[Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/Delete)** 方法可以删除内容控件的 XML 映射。删除内容控件的 XML 映射时，只会删除内容控件与 XML 数据之间的连接。内容控件和 XML 数据都会留在文档中。



```JavaScript
/*本示例删除活动文档内当前映射的所有内容控件的 XML 映射。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ContentControls.Count; i++) {
        let xmlMapping = ActiveDocument.ContentControls.Item(i).XMLMapping
        if (xmlMapping.IsMapped) {
            xmlMapping.Delete()
        }
    }
}
```
使用 **[IsMapped](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/IsMapped)** 属性可以确定内容控件是否映射到文档的数据存储中的 XML 节点。



```JavaScript
/*本示例显示第一个文档上第一个内容控件是否映射到该文档的 XML 数据存储中的 XML 节点。*/
function test() {
    let xmlMapping = Documents.Item(1).ContentControls.Item(1).XMLMapping
    alert(xmlMapping.IsMapped)
}
```
使用 **CustomXMLNode** 属性可以访问内容控件映射到的 XML 节点。使用 **[CustomXMLPart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/CustomXMLPart)** 属性可以访问内容控件映射到的 XML 部件。有关使用 **CustomXMLNode** 和 **CustomXMLPart** 对象的详细信息，请参阅各自的对象主题。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/Delete) | 从父内容控件中删除 XML 映射。 |
| [SetMapping](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/SetMapping) | 允许创建或更改内容控件上的 XML 映射。如果 WPS 将内容控件映射到文档的自定义 XML 数据存储中的自定义 XML 节点，将返回 **True** 。 |
| [SetMappingByNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/SetMappingByNode) | 允许创建或更改内容控件上的 XML 数据映射。如果 WPS 将内容控件映射到文档的自定义 XML 数据存储中的自定义 XML 节点，将返回 **True** 。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/Application) | 返回一个 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象，该对象代表 WPS 应用程序。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/Creator) | 返回一个 32 位的整数，该整数表示在其中创建加载项的应用程序。只读 **Long** 类型。 |
| [CustomXMLNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/CustomXMLNode) | 返回 **CustomXMLNode** 对象，该对象表示文档中的内容控件映射到的自定义 XML 节点（位于数据存储中）。 |
| [CustomXMLPart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/CustomXMLPart) | 返回 **CustomXMLPart** 对象，该对象表示文档中的内容控件映射到的自定义 XML 部件。 |
| [IsMapped](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/IsMapped) | 返回 **Boolean** 值，该值表示文档中的内容控件是否映射到文档的 XML 数据存储内的 XML 节点。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **XMLMapping** 对象的父对象。 |
| [PrefixMappings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/PrefixMappings) | 返回 **String** 值，该值表示用于为当前 XML 映射计算 XPath 的前缀映射。只读。 |
| [XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/XPath) | 返回 **String** 值，该值表示 **XML** 映射的 **XPath** ，其计算结果是当前映射的 **XML** 节点。只读。 |