# CustomXMLValidationErrors 对象

代表 **[CustomXMLValidationError](#TODO)** 对象的集合。


## 示例


```JavaScript
/*本示例运行于文字组件，向活动文档上添加一个 CustomXMLPart 对象，并向该 CustomXMLPart 对象添加一个节点，最后为该 CustomXMLPart 对象添加一个验证错误。*/
function test() {
    // Add and populate a custom xml part.
    let strXML = "<root xmlns='http://example.com/namespace'><child1>Value1</child1></root>"
    let customXMLPart = ActiveDocument.CustomXMLParts.Add(strXML)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:root")
    // Add a node
    customXMLPart.AddNode(customXMLNode, "supplier", "urn:invoice:namespace")
    customXMLPart.Errors.Add(customXMLNode, "error", "example")
}
```


```JavaScript
/*本示例运行于文字组件，向活动文档上第二个 CustomXMLPart 对象中添加一个验证错误，并显示该 CustomXMLPart 对象中验证错误的数量。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(2)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:Properties[1]/ns0:Manager[1]")
    customXMLPart.Errors.Add(customXMLNode, "error1")
    alert(customXMLPart.Errors.Count)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLValidationErrors/member/Add) | 将包含 XML 验证错误的 **CustomXMLValidationError** 对象添加到 **CustomXMLValidationErrors** 集合。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLValidationErrors/member/Application) | 获取一个代表 **CustomXMLValidationErrors** 对象的容器应用程序的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLValidationErrors/member/Count) | 获取一个 **Long** 类型的值，指示 **CustomXMLValidationErrors** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLValidationErrors/member/Creator) | 获取一个 32 位整数，指示创建 **CustomXMLValidationErrors** 对象时所使用的应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLValidationErrors/member/Parent) | 获取 **CustomXMLValidationErrors** 对象的 **Parent** 对象。只读。 |