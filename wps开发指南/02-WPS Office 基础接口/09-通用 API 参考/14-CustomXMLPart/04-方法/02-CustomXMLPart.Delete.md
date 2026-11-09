# CustomXMLPart.Delete

从数据存储（ **IXMLDataStore** 接口）中删除当前 **CustomXMLPart** 。



## 语法

express.**Delete()**

express   一个代表 **CustomXMLPart** 对象的变量。

## 返回值

void

## 说明


如果尝试删除包含核心属性的部件，则不会执行操作并显示一条错误消息。



## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，并根据条件选择节点，然后删除该节点和 CustomXMLPart 对象。*/
function test() {
    try {
        // Example written for WPS.
        // Add and then load from a string.
        let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
        let customXMLPart = ActiveDocument.CustomXMLParts.Add()
        customXMLPart.LoadXML(strXML)

        let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:child1")
        // Insert a subtree before the single node selected previously.
        customXMLNode.InsertSubtreeBefore("<discounts><discount>0.10</discount></discounts>")
        // Delete custom XML part.
        customXMLNode.Delete()
        customXMLPart.Delete()
    }
    // Exception handling. Show the message.
    catch (error) {
        alert(error.toString())
    }
}
```


```JavaScript
/*本示例运行于文字组件，删除活动文档上第四个 CustomXMLPart 对象。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    customXMLPart.Delete()
}
```
