# CustomXMLPart.Errors

获取一个提供对任何 XML 验证错误（如果有）的访问的 **CustomXMLValidationErrors** 对象。如果不存在验证错误，则此属性将返回 **null** 。只读。



## 语法

express.**Errors**

express   一个代表 **CustomXMLPart** 对象的变量。

## 类型

CustomXMLValidationErrors

## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档上第四个 CustomXMLPart 对象中添加一个验证错误。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(4)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root/ns0:example1")
    customXMLPart.Errors.Add(customXMLNode, "error1", "example1", true)
}
```


```JavaScript
/*本示例运行于文字组件，向活动文档上添加一个 CustomXMLPart 对象，并向该 CustomXMLPart 对象中添加一个验证错误，然后显示该 CustomXMLPart 对象中验证错误的数量。*/
function test() {
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    customXMLPart.Errors.Add(customXMLNode, "error", "example", false)
    alert(customXMLPart.Errors.Count)
}
```
