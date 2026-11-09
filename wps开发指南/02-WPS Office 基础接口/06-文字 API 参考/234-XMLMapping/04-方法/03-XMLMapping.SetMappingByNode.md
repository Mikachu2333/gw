# XMLMapping.SetMappingByNode

允许创建或更改内容控件上的 XML 数据映射。如果 WPS 将内容控件映射到文档的自定义 XML 数据存储中的自定义 XML 节点，将返回 **True** 。



## 语法

express.**SetMappingByNode(Node)**

express   一个代表 **XMLMapping** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Node | 必选 | CustomXMLNode | 指定当前内容控件所映射到的 XML 节点。 |

## 返回值

Boolean

## 说明


如果 XML 映射已经存在，则 WPS 将替换现有 XML 映射，并以新映射的 XML 节点的内容替换内容控件的文本。请参阅 **SetMapping** 方法。

为格式文本内容控件创建映射将导致运行时错误。



## 示例


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
/*本示例创建自定义 XML 部件，然后创建两个内容控件，并将每个内容控件映射到自定义 XML 中的特定节点。*/
function test() {
    let customXMLPart = Application.ActiveDocument.CustomXMLParts.Add()
    let strXML = "<books><book><author>Matt Hink</author>" +
        "<title>Migration Paths of the Red Breasted Robin</title><genre>non-fiction</genre>" +
        "<price>29.95</price><pub_date>2007-02-01</pub_date><abstract>" +
        "You see them in the spring outside your windows.  You hear their lovely " +
        "songs wafting in the warm spring air.  Now follow the path of the red breasted robin " +
        "as it migrates to warmer climes in the fall, and then back to your back yard " +
        "in the spring.</abstract></book></books>"
    customXMLPart.LoadXML(strXML)

    Application.ActiveDocument.Range().InsertParagraphBefore()
    let range1 = Application.ActiveDocument.Paragraphs.Item(1).Range
    let customXMLNode1 = customXMLPart.SelectSingleNode("/books/book/title")
    let contentControl1 = Application.ActiveDocument.ContentControls.Add(wdContentControlText, range1)
    contentControl1.XMLMapping.SetMappingByNode(customXMLNode1)

    range1.InsertParagraphAfter()
    let range2 = ActiveDocument.Paragraphs.Item(2).Range
    let customXMLNode2 = customXMLPart.SelectSingleNode("/books/book/abstract")
    let contentControl2 = Application.ActiveDocument.ContentControls.Add(wdContentControlText, range2)
    contentControl2.XMLMapping.SetMappingByNode(customXMLNode2)
}
```
