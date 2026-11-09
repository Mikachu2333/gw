# FFI.BigIntToPointer

将整数地址值转换为 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj) 对象。

## 语法

```typescript
function BigIntToPointer(pointer: number | bigint): FFIPointer
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| pointer | 必选 | number \| bigint | 内存地址的整数表示。 |

## 返回值

包含该地址的 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 说明

将一个 BigInt 或 Number 表示的内存地址包装为可操作的 FFIPointer。不验证地址的有效性——传入无效地址不会立即失败，但后续通过 FFIPointer 读写该地址可能导致崩溃。是 [| FFIPointer.ToBigInt()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/ToBigInt) 的反向操作。
