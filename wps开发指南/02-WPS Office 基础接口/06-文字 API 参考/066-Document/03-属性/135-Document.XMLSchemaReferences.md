# Document.XMLSchemaReferences

返回一个 **XMLSchemaReferences** 集合，代表附加到文档的架构。



## 语法

express.**XMLSchemaReferences**

express   一个代表 **Document** 对象的变量。

## 类型

XMLSchemaReferences

## 示例


```JavaScript
/*本示例重新加载附加到活动文档的第一个架构。*/
function test() {
    let xmlSchemaReference = ActiveDocument.XMLSchemaReferences.Item(1)
    xmlSchemaReference.Reload()
}
```


```JavaScript
/*本示例显示附加到第一个文档的第一个架构的URI。*/
function test() {
    let xmlSchemaReference = Documents.Item(1).XMLSchemaReferences.Item(1)
    alert(xmlSchemaReference.NamespaceURI)
}
```
