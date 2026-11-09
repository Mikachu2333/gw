# FFI.CreateCallback

创建一个可被原生代码回调的闭包（[FFIClosure](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIClosure/obj)）。

## 语法

```typescript
function CreateCallback(ABI: string, ReturnType: string, ArgumentTypeList: string[]): FFIClosure
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ABI | 必选 | string | 回调的调用约定。 |
| ReturnType | 必选 | string | 回调的返回值类型。 |
| ArgumentTypeList | 必选 | string[] | 回调的参数类型数组。 |

## 返回值

返回 [FFIClosure](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIClosure/obj) 对象。

## 说明

与 [| CreateFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/CreateFunction)（JS 调用原生）方向相反——CreateCallback 让原生代码能够回调 JS。返回的 FFIClosure 通过 [| ToPointer()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIClosure/member/ToPointer) 获取一个原生函数指针，将该指针传递给需要回调的原生函数后，原生代码调用此指针时会触发 FFIClosure 上的 `OnCall` 事件。

FFIClosure 的生命周期必须覆盖原生代码可能调用回调的整个时间段——如果 FFIClosure 被垃圾回收而原生代码仍持有其函数指针，调用将导致崩溃。
