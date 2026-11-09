# ffi.Function

创建函数指针类型，用于在结构体中声明函数指针字段或作为回调参数类型。

## 语法

```typescript
function Function(typeinfo: FunctionTypeDecl): Type
```

express   一个代表 **ffi** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| typeinfo | 必选 | FunctionTypeDecl | 函数类型声明，包含返回类型、参数类型和调用约定。 |

## 返回值

函数指针类型对象。

## 说明

返回的 FunctionType 在内存中表示为指针（大小等于 [ffi.pointerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/pointerSize)）。支持双向桥接：`wrapCFunction` 将原生函数指针包装为 JS 可调用函数，`createJsFunction` 将 JS 函数包装为可传给原生 API 的回调。

## 示例

```javascript
/* 声明回调类型并传给原生函数 */
function test() {
  var CallbackType = ffi.Function({
    returnType: "void",
    parameters: ["int32"],
    abi: "stdcall"
  })
  var callback = CallbackType.createJsFunction(function(value) {
    Debug.Print("回调值：" + value)
  })
}
```
