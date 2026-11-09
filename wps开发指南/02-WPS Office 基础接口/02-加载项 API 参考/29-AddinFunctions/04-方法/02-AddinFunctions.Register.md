# AddinFunctions.Register

注册一个自定义函数。

## 语法

```typescript
Register(Name: string, Function: Function, isAsync?: boolean): AddinFunction
```

express   一个代表 **AddinFunctions** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 函数名称。 |
| Function | 必选 | Function | 要注册的 JS 函数。 |
| isAsync | 可选 | boolean | 是否为异步函数。省略时默认为 `false`。 |

## 返回值

注册成功的 [AddinFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/obj) 对象。

## 说明

只能在自己的加载项上注册函数。函数参数不能为空，否则抛出异常。

## 示例

```javascript
/* 注册同步函数 */
function test() {
  var funcs = Application.CurrentWPSAddIn.Functions
  var f = funcs.Register("add", function(a, b) { return a + b })
  console.log("已注册：" + f.Name)
}
```

```javascript
/* 注册异步函数 */
function test() {
  var funcs = Application.CurrentWPSAddIn.Functions
  funcs.Register("fetchData", function() {
    return new Promise(function(resolve) {
      setTimeout(function() { resolve("done") }, 1000)
    })
  }, true)
}
```
