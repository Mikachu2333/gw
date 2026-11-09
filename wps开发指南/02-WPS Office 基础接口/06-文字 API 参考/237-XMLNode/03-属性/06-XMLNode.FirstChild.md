# XMLNode.FirstChild

返回一个 **XMLNode** 对象，该对象代表一个XML元素的第一个子节点。只读。



## 语法

express.**FirstChild**

express   一个代表 **XMLNode** 对象的变量。

## 类型

XMLNode

## 说明


使用 **LastChild** 属性访问最后一个子节点。使用 **Root** 属性访问图表中的父节点。



## 示例


```JavaScript
/*本示例显示活动文档上第一个XML元素的第一个子节点的名称。*/
function test() {
    alert(ActiveDocument.XMLNodes.Item(1).FirstChild.BaseName)
}
```


```JavaScript
/*本示例显示第一个文档上第四个XML元素的第一个子节点的类型是否为wdXMLNodeElement。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(4).FirstChild
    alert(xmlNode.NodeType == wdXMLNodeElement)
}
```
