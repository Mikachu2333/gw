# CustomXMLPart.Load

使模板作者可以通过现有文件填充 **CustomXMLPart** 。如果加载成功，则返回 **True** 。



## 语法

express.**Load(FilePath)**

express   一个代表 **CustomXMLPart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FilePath | 必选 | string | 指向用户计算机上或包含要加载的 XML 的网络上的文件。 |

## 返回值

Boolean

## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，并使用指定文件中的 XML 填充该 CustomXMLPart 对象，然后处理该 CustomXMLPart 对象的节点。*/
function test() {
    try {
        // Example written for WPS.
        // Add a custom XML part and then load the XML from a file.
        let customXMLPart = ActiveDocument.CustomXMLParts.Add()
        customXMLPart.Load("D:\\示例\\example_2.xml")

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
/*本示例运行于文字组件，向第一个文档添加 CustomXMLPart 对象，并使用指定文件中的 XML 填充该 CustomXMLPart 对象，然后判断如果 XML 文件填充成功，则显示该 CustomXMLPart 对象的 XML 字符串。*/
function test() {
    let customXMLPart = Documents.Item(1).CustomXMLParts.Add()
    if (customXMLPart.Load("D:\\示例\\example_2.xml")) {
        alert(customXMLPart.XML)
    } else {
        alert("XML 文件填充失败")
    }
}
```
