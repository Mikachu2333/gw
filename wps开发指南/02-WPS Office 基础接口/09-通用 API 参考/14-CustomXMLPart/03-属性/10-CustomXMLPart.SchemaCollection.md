# CustomXMLPart.SchemaCollection

获取或设置一个代表附加到文档中数据绑定区域的架构集的 **[CustomXMLSchemaCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLSchemaCollection/obj)** 对象。可读/写。



## 语法

express.**SchemaCollection**

express   一个代表 **CustomXMLPart** 对象的变量。

## 类型

CustomXMLSchemaCollection

## 示例


```JavaScript
/*本示例运行于文字组件，显示附加到活动文档中的第一个内容控件映射到的自定义 XML 部件的架构集中的架构是否有效。*/
function test() {
    let customXMLPart = ActiveDocument.ContentControls.Item(1).XMLMapping.CustomXMLPart
    alert(customXMLPart.SchemaCollection.Validate())
}
```


```JavaScript
/*本示例运行于文字组件，显示附加到活动文档上第四个 CustomXMLPart 对象的第一个架构的命名空间的唯一地址标识符。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    alert(customXMLPart.SchemaCollection.Item(1).NamespaceURI)
}
```
