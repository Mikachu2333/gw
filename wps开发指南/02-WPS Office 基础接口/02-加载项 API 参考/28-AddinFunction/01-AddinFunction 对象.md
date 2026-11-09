# AddinFunction 对象

加载项中注册的单个自定义函数。

## 说明

通过 [AddinFunctions.Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunctions/member/Item) 或 [AddinFunctions.Register](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunctions/member/Register) 获取。自定义函数可以被同一加载项的其他页面调用，也可以通过设置 `AllowJsIdeCall` 允许宏编辑器调用。异步函数调用时返回 Promise。

## 示例

```javascript
/* 注册并调用自定义函数 */
function test() {
  var funcs = Application.CurrentWPSAddIn.Functions
  funcs.Register("greet", function(name) { return "Hello, " + name })
  var f = funcs.Item("greet")
  var result = f.Call("World")
  console.log(result)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Call](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/member/Call) | 调用此函数。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/member/Name) | 函数名称。 **string** 类型，只读。 |
| [IsAsync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/member/IsAsync) | 该函数是否为异步函数。 **boolean** 类型，只读。 |
| [AllowJsIdeCall](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/member/AllowJsIdeCall) | 是否允许宏编辑器调用此函数。 **boolean** 类型，可读写。 |
