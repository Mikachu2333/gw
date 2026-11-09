# XMLSchemaReference.Delete

删除指定的 XML 架构引用。



## 语法

express.**Delete()**

express   一个代表 **XMLSchemaReference** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除附加到活动文档的第一个架构。*/
function test() {
    let xmlSchemaReference = ActiveDocument.XMLSchemaReferences.Item(1)
    xmlSchemaReference.Delete()
}
```


```JavaScript
/*本示例删除附加到第一个文档的第二个架构，并通知用户。*/
function test() {
    let xmlSchemaReference = Documents.Item(1).XMLSchemaReferences.Item(2)
    xmlSchemaReference.Delete()
    alert("已删除附加到文档的第二个架构")
}
```
