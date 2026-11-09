# XMLSchemaReferences.Item

返回集合中的单个 **XMLSchemaReference** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **XMLSchemaReferences** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

XMLSchemaReference

## 示例


```JavaScript
/*本示例显示附加到第一个文档的第二个架构的物理位置和URI。*/
function test() {
    let xmlSchemaReference = Documents.Item(1).XMLSchemaReferences.Item(2)
    alert(`架构的物理位置：${xmlSchemaReference.Location}\n架构的URI：${xmlSchemaReference.NamespaceURI}`)
}
```


```JavaScript
/*本示例删除附加到活动文档的第一个架构。*/
function test() {
    let xmlSchemaReference = ActiveDocument.XMLSchemaReferences.Item(1)
    xmlSchemaReference.Delete()
}
```
