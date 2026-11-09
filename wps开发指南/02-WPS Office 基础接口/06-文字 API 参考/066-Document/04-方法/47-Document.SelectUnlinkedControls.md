# Document.SelectUnlinkedControls

返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中没有链接到文档 XML 数据存储区中 XML 节点的所有内容控件。只读。



## 语法

express.**SelectUnlinkedControls(Stream)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Stream | 可选 | CustomXMLPart | 自定义 XML 部件引用。设置此参数会对返回的内容控件进行筛选，以只包括那些在其 **XMLMapping** 定义中引用了此 **CustomXMLPart** 的内容控件。 |

## 返回值

ContentControls

## 示例


```JavaScript
/*本示例设置第一个文档上没有链接到文档 XML 数据存储区中 XML 节点的第一个内容控件的颜色。*/
function test() {
    let contentControl = Documents.Item(1).SelectUnlinkedControls().Item(1)
    contentControl.Color = wdColorBlue
}
```


```JavaScript
/*本示例显示活动文档上没有链接到文档 XML 数据存储区中特定自定义 XML 节点的第一个内容控件的标识。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(3)
    let contentControl = ActiveDocument.SelectUnlinkedControls(customXMLPart).Item(1)
    alert(contentControl.ID)
}
```
