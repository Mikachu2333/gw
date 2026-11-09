# FFI.Malloc

分配指定字节数的原生内存，返回 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 语法

```typescript
function Malloc(size: number | bigint): FFIPointer
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| size | 必选 | number \| bigint | 要分配的字节数。 |

## 返回值

指向分配的内存的 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。分配失败时抛出异常。

## 说明

调用 C 标准库的 `malloc` 分配内存。分配的内存**不会被自动回收**——必须手动调用 [| Free()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/Free) 释放，否则会造成内存泄漏。分配的内存**未初始化**——内容是随机的旧数据。

与 `new ArrayBuffer(size)` 的区别：ArrayBuffer 由 JS 引擎的垃圾回收器管理且内容零初始化；Malloc 分配的内存由开发者管理、未初始化、且不能作为 TypedArray 的后备存储。Malloc 的优势是内存完全在 JS GC 之外，不会被意外回收。

## 示例

```javascript
/* 分配并使用原生内存 */
var ptr = FFI.Malloc(1024)
nativeFunc.Call(ptr, 1024)
FFI.Free(ptr)
```
