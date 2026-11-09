# Document.SelectLinkedControls

返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中根据 Node 参数的指定，链接到文档 XML 数据存储区中特定自定义 XML 节点的所有内容控件。只读。



## 语法

express.**SelectLinkedControls(Node)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Node | 必选 | CustomXMLNode | 与内容控件链接的文档数据存储区中的 XML 节点。 |

## 返回值

ContentControls

## 示例


```JavaScript
/*本示例显示链接到活动文档 XML 数据存储区中特定自定义 XML 节点的第一个内容控件的内容文本。*/
function test() {
    let customXMLNode = Selection.ContentControls.Item(1).XMLMapping.CustomXMLNode
    let contentControl = ActiveDocument.SelectLinkedControls(customXMLNode).Item(1)
    alert(contentControl.Range.Text)
}
```


```JavaScript
/*本示例显示链接到第一个文档 XML 数据存储区中特定自定义 XML 节点的第一个内容控件的标题。*/
function test() {
    let customXMLNode = Documents.Item(1).ContentControls.Item(1).XMLMapping.CustomXMLNode
    let contentControl = Documents.Item(1).SelectLinkedControls(customXMLNode).Item(1)
    alert(contentControl.Title)
}
```
