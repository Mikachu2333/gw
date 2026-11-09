# FFI.Memcpy

在两个内存区域之间复制数据。

## 语法

```typescript
function Memcpy(dest: ArrayBuffer | FFIPointer, destOffset: number, destSize: number, src: ArrayBuffer | FFIPointer, srcOffset: number, srcSize: number): void
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| dest | 必选 | ArrayBuffer \| FFIPointer | 目标内存（ArrayBuffer 或 FFIPointer）。 |
| destOffset | 必选 | number | 目标偏移量（字节）。 |
| destSize | 必选 | number | 目标区域可写大小（字节）。 |
| src | 必选 | ArrayBuffer \| FFIPointer | 源内存（ArrayBuffer 或 FFIPointer）。 |
| srcOffset | 必选 | number | 源偏移量（字节）。 |
| srcSize | 必选 | number | 要复制的字节数。 |

## 说明

源和目标可以独立地是 ArrayBuffer 或 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj) 的任意组合。对 ArrayBuffer 类型会进行边界检查（`offset + size` 不能超过缓冲区长度），对 FFIPointer 类型不进行边界检查。内部使用安全版本的 memcpy（`memcpy_s`），当 `srcSize > destSize` 时不会越界写入。

## 示例

```javascript
/* 从原生内存读取数据到 ArrayBuffer */
var buf = new ArrayBuffer(128)
FFI.Memcpy(buf, 0, 128, nativePtr, 0, 128)
```
