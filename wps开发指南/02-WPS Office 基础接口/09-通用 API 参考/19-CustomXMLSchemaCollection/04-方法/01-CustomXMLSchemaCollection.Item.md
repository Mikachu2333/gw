# CustomXMLSchemaCollection.Item

获取 **CustomXMLSchemaCollection** 集合中的一个 **CustomXMLSchema** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **CustomXMLSchemaCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的 **CustomXMLSchema** 对象的名称或索引号。 |

## 返回值

CustomXMLSchema

## 示例


```JavaScript
/*本示例运行于文字组件，显示附加到活动文档上第一个 CustomXMLPart 对象的第一个架构的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    alert(customXMLPart.SchemaCollection.Item(1).NamespaceURI)
}
```


```JavaScript
/*本示例运行于文字组件，显示附加到第一个文档上所有 CustomXMLPart 对象的所有架构的命名空间的唯一地址标识符。*/
function test() {
    let customXMLParts = Documents.Item(1).CustomXMLParts
    let str = ""
    for (let i = 1; i <= customXMLParts.Count; i++) {
        let schemaCollection = customXMLParts.Item(i).SchemaCollection
        for (let j = 1; j <= schemaCollection.Count; j++) {
            str += schemaCollection.Item(j).NamespaceURI + "\n"
        }
    }
    alert(str)
}
```
