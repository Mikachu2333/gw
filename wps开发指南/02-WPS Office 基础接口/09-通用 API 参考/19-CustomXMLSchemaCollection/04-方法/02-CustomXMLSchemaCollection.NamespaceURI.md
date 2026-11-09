# CustomXMLSchemaCollection.NamespaceURI

获取 **CustomXMLSchemaCollection** 对象的命名空间的唯一地址标识符。只读。



## 语法

express.**NamespaceURI(Index)**

express   一个代表 **CustomXMLSchemaCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | CustomXMLSchema 对象的索引号。 |

## 返回值

String

## 示例


```JavaScript
/*本示例运行于文字组件，显示附加到活动文档上第一个 CustomXMLPart 对象的第一个架构的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    alert(customXMLPart.SchemaCollection.NamespaceURI(1))
}
```


```JavaScript
/*本示例运行于文字组件，将附加到第一个文档上第二个 CustomXMLPart 对象的第一个架构命名空间的唯一地址标识符插入到光标处。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(2)
    Selection.TypeText(customXMLPart.SchemaCollection.NamespaceURI(1))
}
```
