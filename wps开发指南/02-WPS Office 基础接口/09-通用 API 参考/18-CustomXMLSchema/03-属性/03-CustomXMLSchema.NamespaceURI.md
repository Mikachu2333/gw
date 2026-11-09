# CustomXMLSchema.NamespaceURI

获取 **CustomXMLSchema** 对象的命名空间的唯一地址标识符。只读。



## 语法

express.**NamespaceURI**

express   一个代表 **CustomXMLSchema** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示附加到活动文档上第二个 CustomXMLPart 对象的第一个架构的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(2)
    alert(customXMLPart.SchemaCollection.Item(1).NamespaceURI)
}
```


```JavaScript
/*本示例运行于文字组件，将附加到第一个文档上所有 CustomXMLPart 对象的第一个架构的命名空间的唯一地址标识符插入到光标处。*/
function test() {
    let customXMLParts = Documents.Item(1).CustomXMLParts
    for (let i = 1; i <= customXMLParts.Count; i++) {
        let customXMLSchema = customXMLParts.Item(i).SchemaCollection.Item(1)
        Selection.TypeText(customXMLSchema.NamespaceURI + "\n")
    }
}
```
