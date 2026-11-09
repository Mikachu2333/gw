# CustomXMLPart.LoadXML

允许模板作者依据 XML 字符串填充 **CustomXMLPart** 对象。如果加载成功，则返回 **True** 。



## 语法

express.**LoadXML(XML)**

express   一个代表 **CustomXMLPart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XML | 必选 | string | 包含要加载的 XML。 |

## 返回值

Boolean

## 示例


```JavaScript
/*本示例运行于文字组件，通过字符串将 XML 加载到活动文档的新建自定义 XML 部件中。*/
function test() {
    try {
        // Add a custom XML part and then load the XML.
        let customXMLPart = ActiveDocument.CustomXMLParts.Add()
        customXMLPart.LoadXML("<discounts><discount>0.10</discount></discounts>")
    }
    // Exception handling. Show the message.
    catch (error) {
        alert(error.toString())
    }
}
```


```JavaScript
/*本示例运行于文字组件，向活动文档添加 CustomXMLPart 对象，并使用 XML 字符串填充该 CustomXMLPart 对象，然后显示该 CustomXMLPart 对象中指定节点的不带命名空间前缀的基本名称。*/
function test() {
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add()
    customXMLPart.LoadXML(strXML)
    alert(customXMLPart.SelectSingleNode("/ns0:root/ns0:child1").BaseName)
}
```
