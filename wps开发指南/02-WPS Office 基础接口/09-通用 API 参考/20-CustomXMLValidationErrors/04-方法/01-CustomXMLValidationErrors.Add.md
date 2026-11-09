# CustomXMLValidationErrors.Add

将包含 XML 验证错误的 **CustomXMLValidationError** 对象添加到 **CustomXMLValidationErrors** 集合。



## 语法

express.**Add(Node, ErrorName, ErrorText, ClearedOnUpdate)**

express   一个代表 **CustomXMLValidationErrors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Node | 必选 | CustomXMLNode | 代表其中发生了错误的节点。 |
| ErrorName | 必选 | string | 包含错误的名称。 |
| ErrorText | 可选 | string | 包含描述性错误文本。 |
| ClearedOnUpdate | 可选 | boolean | 指定在更正并更新了 XML 后是否要从 **CustomXMLValidationErrors** 集合中清除错误。 |

## 返回值

void

## 示例


```JavaScript
/*本示例运行于文字组件，将包含 XML 验证错误的 CustomXMLValidationError 对象添加到活动文档的第一个 CustomXMLPart 对象的 CustomXMLValidationErrors 集合中。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(1)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns1:coreProperties[1]")
    // Adds the specified error message to the collection.
    customXMLPart.Errors.Add(customXMLNode, "ValidationError", "To add content to this stream, it must be valid, well-formed XML.", true)
}
```


```JavaScript
/*本示例运行于文字组件，向活动文档上第二个 CustomXMLPart 对象中添加一个验证错误。*/
function test() {
    let customXMLPart = ActiveDocument.CustomXMLParts.Item(2)
    let customXMLNode = customXMLPart.SelectSingleNode("/ns0:Properties[1]/ns0:Manager[1]")
    customXMLPart.Errors.Add(customXMLNode, "error1", "example1", true)
}
```
