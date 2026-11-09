# Document.CustomXMLParts

返回一个 **CustomXMLParts** 集合，该集合代表 XML 数据存储区中的自定义 XML。只读。



## 语法

express.**CustomXMLParts**

express   一个代表 **Document** 对象的变量。

## 类型

CustomXMLParts

## 示例


```JavaScript
/*本示例显示第一个文档上第一个 CustomXMLPart 对象的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(1)
    alert(customXMLPart.NamespaceURI)
}
```


```JavaScript
/*本示例显示与 GUID 匹配的 CustomXMLPart 对象的 XML 表示形式。*/
function test() {
    let id = "{6668398D-A668-4E3E-A5EB-62B293D839F1}"
    let customXMLPart = Documents.Item(1).CustomXMLParts.SelectByID(id)
    alert(customXMLPart.XML)
}
```
