# AddinFunction.Call

调用此函数。

## 语法

```typescript
Call(...args: any[]): any
```

express   一个代表 **AddinFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ...args | 可选 | any[] | 传给函数的参数。 |

## 返回值

函数的返回值。

## 说明

从加载项页面调用时，必须属于同一加载项。从宏编辑器调用时，必须先将 [AllowJsIdeCall](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/member/AllowJsIdeCall) 设为 `true`。权限不足时抛出异常。同步函数直接返回结果，异步函数返回 Promise。参数和返回值在跨环境调用时自动进行类型转换。

## 示例

```javascript
/* 调用同步函数 */
function test() {
  var f = Application.CurrentWPSAddIn.Functions.Item("add")
  var result = f.Call(1, 2)
  console.log("结果：" + result)
}
```

```javascript
/* 调用异步函数 */
async function test() {
  var f = Application.CurrentWPSAddIn.Functions.Item("fetchData")
  var result = await f.Call("https://example.com")
  console.log(result)
}
```
