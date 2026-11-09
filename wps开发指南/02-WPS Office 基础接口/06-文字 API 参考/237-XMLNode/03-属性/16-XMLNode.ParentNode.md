# XMLNode.ParentNode

返回一个代表指定元素的父元素的 **XMLNode** 对象。



## 语法

express.**ParentNode**

express   一个代表 **XMLNode** 对象的变量。

## 类型

XMLNode

## 示例


```JavaScript
/*本示例显示活动文档上最后一个XML元素的父元素的名称。*/
function test() {
    alert(ActiveDocument.XMLNodes.Item(ActiveDocument.XMLNodes.Count).ParentNode.BaseName)
}
```


```JavaScript
/*本示例显示第一个文档上不包括根元素的所有XML元素的父元素的URI。*/
function test() {
    let xmlNodes = Documents.Item(1).XMLNodes
    for (let i = 2; i <= xmlNodes.Count; i++) {
        alert(xmlNodes.Item(i).ParentNode.NamespaceURI)
    }
}
```
