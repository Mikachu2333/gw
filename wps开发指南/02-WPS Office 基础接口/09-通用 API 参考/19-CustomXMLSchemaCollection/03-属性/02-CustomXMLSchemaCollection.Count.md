# CustomXMLSchemaCollection.Count

获取一个 **Long** 类型的值，指示 **CustomXMLSchemaCollection** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **CustomXMLSchemaCollection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行于文字组件，显示附加到活动文档上第一个 CustomXMLPart 对象的架构的数量。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    alert(customXMLPart.SchemaCollection.Count)
}
```
