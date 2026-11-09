# XMLMapping.CustomXMLNode

返回 **CustomXMLNode** 对象，该对象表示文档中的内容控件映射到的自定义 XML 节点（位于数据存储中）。



## 语法

express.**CustomXMLNode**

express   一个代表 **XMLMapping** 对象的变量。

## 类型

CustomXMLNode

## 示例


```JavaScript
/*本示例在活动文档中插入新的内容控件和自定义 XML 部件，将内容控件映射到自定义 XML 部件中的某个节点，然后设置映射的 XML 节点的文本。*/
function test() {
    let contentControl = Application.ActiveDocument.ContentControls.Add(wdContentControlText)
    let strXML = "<books><book><author></author><title></title><genre></genre><price></price><pub_date></pub_date><abstract></abstract></book></books>"
    let customXMLPart = Application.ActiveDocument.CustomXMLParts.Add(strXML)

    let xmlMapping = contentControl.XMLMapping
    xmlMapping.SetMapping("/books/book/author", null, customXMLPart)

    xmlMapping.CustomXMLNode.Text = "Matt Hink"
    contentControl.Range.Text = xmlMapping.CustomXMLNode.Text
}
```


```JavaScript
/*本示例显示第一个文档上第一个内容控件的XML映射中XML节点的值。*/
function test() {
    let xmlMapping = Documents.Item(1).ContentControls.Item(1).XMLMapping
    alert(xmlMapping.CustomXMLNode.NodeValue)
}
```
