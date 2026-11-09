# XMLNode.LastChild

返回一个 **XMLNode** 对象，该对象代表 XML 元素的最后一个子节点。



## 语法

express.**LastChild**

express   一个代表 **XMLNode** 对象的变量。

## 类型

XMLNode

## 示例


```JavaScript
/*本示例显示活动文档中第一个XML元素的最后一个子节点的名称。*/
function test() {
    let xmlNode = Application.ActiveDocument.XMLNodes.Item(1).LastChild
    alert(xmlNode.BaseName)
}
```


```JavaScript
/*本示例删除第一个文档上第四个XML元素的最后一个节点。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(4).LastChild
    xmlNode.Delete()
}
```
