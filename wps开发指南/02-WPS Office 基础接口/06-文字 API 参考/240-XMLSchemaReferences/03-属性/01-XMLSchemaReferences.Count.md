# XMLSchemaReferences.Count

返回一个 **Long** 类型的值，该值代表集合中 XML 架构的数量。只读。



## 语法

express.**Count**

express   一个代表 **XMLSchemaReferences** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示附加到活动文档的XML架构的数量。*/
function test() {
    alert(ActiveDocument.XMLSchemaReferences.Count)
}
```
