# FFI.RefPointer

获取 ArrayBuffer 底层数据缓冲区的指针。

## 语法

```typescript
function RefPointer(arraybuffer: ArrayBuffer): FFIPointer
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| arraybuffer | 必选 | ArrayBuffer | 一个 ArrayBuffer 对象。 |

## 返回值

指向 ArrayBuffer 数据区的 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 说明

返回的 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj) 直接指向 ArrayBuffer 的内部数据区——通过此指针修改内存会直接影响 ArrayBuffer 的内容，反之亦然。常用于将 JS 层的 ArrayBuffer 作为缓冲区传递给原生函数。

注意生命周期：ArrayBuffer 被垃圾回收后，返回的 FFIPointer 变为悬垂指针，继续使用会导致未定义行为。必须确保在使用 FFIPointer 期间 ArrayBuffer 保持存活。

与 [| DerefPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/DerefPointer) 的区别：`RefPointer` 取缓冲区自身的地址（`&buffer[0]`），`DerefPointer` 将缓冲区中存储的值解释为指针（`*(void**)&buffer[offset]`）。

## 示例

```javascript
/* 将 ArrayBuffer 地址传递给原生函数 */
var buf = new ArrayBuffer(256)
var ptr = FFI.RefPointer(buf)
nativeFunc.Call(ptr, 256)
```
