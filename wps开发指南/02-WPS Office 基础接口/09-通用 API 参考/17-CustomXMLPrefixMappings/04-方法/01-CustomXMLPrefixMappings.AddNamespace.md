# CustomXMLPrefixMappings.AddNamespace

允许您添加要在查询项目时使用的自定义命名空间/前缀映射。



## 语法

express.**AddNamespace(Prefix, NamespaceURI)**

express   一个代表 **CustomXMLPrefixMappings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Prefix | 必选 | string | 包含要添加到前缀映射列表的前缀。 |
| NamespaceURI | 必选 | string | 包含要分配给新添加前缀的命名空间。 |

## 返回值

void

## 说明


如果前缀在命名空间管理器中已存在，则此方法将覆盖该前缀的含义，除非前缀是数据存储（ **IXMLDataStore** 接口）在内部添加或使用的（在这种情况下它将返回错误）。



## 示例


```JavaScript
/*本示例运行于文字组件，向第一个文档的第一个 CustomXMLPart 对象的 CustomXMLPrefixMappings 集合添加命名空间和前缀。*/
function test() {
    // Adds a custom namespace.
    let mappings = Documents.Item(1).CustomXMLParts.Item(1).NamespaceManager
    mappings.AddNamespace("xs", "urn:invoice:namespace")
}
```


```JavaScript
/*本示例运行于文字组件，向活动文档的第二个 CustomXMLPart 对象的 CustomXMLPrefixMappings 集合添加命名空间和前缀，然后显示 CustomXMLPrefixMapping 对象的数量。*/
function test() {
    let mappings = ActiveDocument.CustomXMLParts.Item(2).NamespaceManager
    mappings.AddNamespace("example", "http://example.com/namespace")
    alert(mappings.Count)
}
```
