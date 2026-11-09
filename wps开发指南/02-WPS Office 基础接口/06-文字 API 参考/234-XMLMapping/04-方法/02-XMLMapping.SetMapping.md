# XMLMapping.SetMapping

允许创建或更改内容控件上的 XML 映射。如果 WPS 将内容控件映射到文档的自定义 XML 数据存储中的自定义 XML 节点，将返回 **True** 。



## 语法

express.**SetMapping(XPath, PrefixMapping, Source)**

express   一个代表 **XMLMapping** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 指定 XPath 字符串，该字符串表示内容控件所映射到的 XML 节点。无效的 XPath 字符串将导致运行时错误。 |
| PrefixMapping | 可选 | string | 指定在查询 XPath 参数所提供的表达式时要使用的前缀映射。如果省略， WPS 将使用当前文档中指定的自定义 XML 部件的前缀映射集。 |
| Source | 可选 | CustomXMLPart | 指定内容控件要映射到的自定义 XML 数据。如果省略此参数，将依据当前文档中的所有自定义 XML 来计算 XPath，并且用 XPath 在其中解析为 XML 节点的第一个 **CustomXMLPart** 来建立映射。 |

## 返回值

Boolean

## 说明


如果 XML 映射已经存在， WPS 将替换现有 XML 映射，并以新映射的 XML 节点的内容替换内容控件的文本。如果指定的 XPath 的计算结果不是指定的自定义 XML 部件中的 XML 节点，那么仍可以指定映射，并且将创建一个映射。当指定的 XPath 的计算结果为指定的自定义 XML 部件中的 XML 节点时，此映射将自动链接。

请参阅 **[SetMappingByNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/SetMappingByNode)** 方法。

为格式文本内容控件创建映射将导致运行时错误。



## 示例


```JavaScript
/*本示例插入自定义 XML 部件并为该自定义部件设置 XML，然后在文档开头插入两个内容控件，并将控件的内容映射为自定义部件中 XML 元素的内容。*/
function test() {
    let customXMLPart = Application.ActiveDocument.CustomXMLParts.Add()
    let strXML = "<books><book><author>Matt Hink</author>" +
        "<title>Migration Paths of the Red Breasted Robin</title>" +
        "<genre>non-fiction</genre><price>29.95</price>" +
        "<pub_date>2/1/2007</pub_date><abstract>You see them in " +
        "the spring outside your windows. You hear their lovely " +
        "songs wafting in the warm spring air. Now follow the path " +
        "of the red breasted robin as it migrates to warmer climes " +
        "in the fall, and then back to your back yard in the spring." +
        "</abstract></book></books>"
    customXMLPart.LoadXML(strXML)

    Application.ActiveDocument.Range().InsertParagraphBefore()
    let range1 = Application.ActiveDocument.Paragraphs.Item(1).Range
    let contentControl1 = Application.ActiveDocument.ContentControls.Add(wdContentControlText, range1)
    contentControl1.XMLMapping.SetMapping("/books/book/title", null, customXMLPart)

    range1.InsertParagraphAfter()
    let range2 = Application.ActiveDocument.Paragraphs.Item(2).Range
    let contentControl2 = Application.ActiveDocument.ContentControls.Add(wdContentControlText, range2)
    contentControl2.XMLMapping.SetMapping("/books/book/abstract", null, customXMLPart)
}
```


```JavaScript
/*本示例在第一个文档上新建内容控件，并将该内容控件的XML映射设置为自定义部件中 XML 元素的内容。*/
function test() {
    let contentControl = Documents.Item(1).ContentControls.Add(wdContentControlDate, Selection.Range)
    let prefixMappings = "xmlns:ns0='http://purl.org/dc/elements/1.1/'\nxmlns:ns1='http://schemas.openxmlformats.org/package/2006/metadata/core-properties' "
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(1)
    contentControl.XMLMapping.SetMapping("/ns1:coreProperties[1]/ns1:keywords[1]", prefixMappings, customXMLPart)
}
```
