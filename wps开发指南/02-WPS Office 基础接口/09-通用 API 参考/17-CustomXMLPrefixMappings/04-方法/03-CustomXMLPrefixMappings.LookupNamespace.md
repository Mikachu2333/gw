# CustomXMLPrefixMappings.LookupNamespace

允许您获取对应于指定前缀的命名空间。



## 语法

express.**LookupNamespace(Prefix)**

express   一个代表 **CustomXMLPrefixMappings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Prefix | 必选 | string | 包含前缀映射列表中的前缀。 |

## 返回值

String

## 说明


如果未将命名空间分配给请求的前缀，则该方法返回空字符串（""）。



## 示例


```JavaScript
/*本示例运行于文字组件，显示第一个文档上第三个 CustomXMLPart 对象中对应于指定前缀的命名空间。*/
function test() {
    // Gets the namespace corresponding to the prefix.
    let customXMLPart = Documents.Item(1).CustomXMLParts.Item(3)
    alert(customXMLPart.NamespaceManager.LookupNamespace("ns0"))
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档上第一个 CustomXMLPart 对象中对应于指定前缀的命名空间。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    Selection.TypeText(customXMLPart.NamespaceManager.LookupNamespace("ns1"))
}
```
