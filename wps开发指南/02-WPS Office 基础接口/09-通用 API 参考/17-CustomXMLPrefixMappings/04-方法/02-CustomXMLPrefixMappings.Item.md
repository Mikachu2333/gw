# CustomXMLPrefixMappings.Item

获取 **CustomXMLPrefixMappings** 集合中的一个 **CustomXMLPrefixMapping** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **CustomXMLPrefixMappings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的 **CustomXMLPrefixMapping** 对象的名称或索引号。 |

## 返回值

CustomXMLPrefixMapping

## 示例


```JavaScript
/*本示例运行于文字组件，显示第一个文档上第三个 CustomXMLPart 对象中第一个 CustomXMLPrefixMapping 对象的前缀。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(3)
    alert(customXMLPart.NamespaceManager.Item(1).Prefix)
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档上第一个 CustomXMLPart 对象中第一个 CustomXMLPrefixMapping 对象的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    Selection.TypeText(customXMLPart.NamespaceManager.Item(1).NamespaceURI)
}
```
