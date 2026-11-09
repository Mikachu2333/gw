# CustomXMLPrefixMappings.LookupPrefix

允许您获取对应于指定命名空间的前缀。



## 语法

express.**LookupPrefix(NamespaceURI)**

express   一个代表 **CustomXMLPrefixMappings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NamespaceURI | 必选 | string | 包含命名空间 URI。 |

## 返回值

string

## 说明


如果未向请求的命名空间分配任何前缀，该方法将返回空字符串（""）。 如果在命名空间管理器中指定了多个前缀，则该方法返回与提供的命名空间匹配的第一个前缀。



## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档中的第一个内容控件映射到的自定义 XML 部件中对应于指定命名空间的前缀。*/
function test() {
    // Gets the namespace corresponding to the prefix.
    let customXMLPart = ActiveDocument.ContentControls.Item(1).XMLMapping.CustomXMLPart
    let strURI = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
    alert(customXMLPart.NamespaceManager.LookupPrefix(strURI))
}
```


```JavaScript
/*本示例运行于文字组件，在光标处插入活动文档上第四个 CustomXMLPart 对象中对应于指定命名空间的前缀。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    Selection.TypeText(customXMLPart.NamespaceManager.LookupPrefix("http://example.com/namespace"))
}
```
