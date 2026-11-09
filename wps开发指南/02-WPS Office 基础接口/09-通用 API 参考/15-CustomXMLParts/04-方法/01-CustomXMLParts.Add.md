# CustomXMLParts.Add

允许您向文件添加新的 **CustomXMLPart** 。



## 语法

express.**Add(XML, SchemaCollection)**

express   一个代表 **CustomXMLParts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XML | 可选 | string | 包含要添加到新创建的 **CustomXMLPart** 中的 XML。 |
| SchemaCollection | 可选 | any | 代表要用于验证此流的架构集。 |

## 返回值

CustomXMLPart

## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，然后从该 CustomXMLPart 对象选择单一节点。*/
function test() {
    try {
        // Example written for WPS.
        // Add a custom XML part.
        let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
        let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
        // Get a node using XPath.
        let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    }
    // Exception handling. Show the message.
    catch (err) {
        alert(err.toString())
    }
}
```


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，然后显示该 CustomXMLPart 对象中指定节点的不带命名空间前缀的基本名称。*/
function test() {
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    alert(customXMLPart.SelectSingleNode("/ns0:root/ns0:child1").BaseName)
}
```
