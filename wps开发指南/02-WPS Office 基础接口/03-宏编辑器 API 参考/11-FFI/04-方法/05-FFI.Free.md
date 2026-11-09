# FFI.Free

释放由 [| Malloc()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/Malloc) 分配的内存。

## 语法

```typescript
function Free(pointer: FFIPointer): void
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| pointer | 必选 | FFIPointer | 要释放的 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)，必须是 Malloc 返回的指针。 |

## 说明

调用 C 标准库的 `free` 释放内存。只能释放 Malloc 分配的内存——对 [| RefPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/RefPointer)、[| DerefPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/DerefPointer)、[| BigIntToPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/BigIntToPointer) 创建的 FFIPointer 调用 Free 会导致未定义行为（可能崩溃）。

注意：Free 后 FFIPointer 对象仍然存在但指向已释放的内存——不要在 Free 之后继续使用该 FFIPointer。重复调用 Free（Double Free）会导致未定义行为。
