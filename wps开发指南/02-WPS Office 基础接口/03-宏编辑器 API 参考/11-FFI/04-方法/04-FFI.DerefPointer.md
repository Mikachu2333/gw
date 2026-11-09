# FFI.DerefPointer

从 ArrayBuffer 中读取一个指针值并返回 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 语法

```typescript
function DerefPointer(pointer: ArrayBuffer, offset?: number): FFIPointer
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| pointer | 必选 | ArrayBuffer | 包含指针值的 ArrayBuffer。 |
| offset | 可选 | number | 读取位置的字节偏移量，默认 0。 |

## 返回值

包含读取到的指针地址的 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 说明

将 ArrayBuffer 中从 `offset` 位置开始的 `sizeof(void*)` 字节解释为一个指针地址，用该地址创建 FFIPointer 返回。这等价于 C 中的 `*(void**)((char*)buffer + offset)`。

典型场景：原生函数通过输出参数返回指针时，先分配一个 `sizeof(void*)` 大小的 ArrayBuffer 作为接收缓冲区，调用原生函数后用 DerefPointer 取出返回的指针。

会进行边界检查——如果 ArrayBuffer 的长度小于 `offset + sizeof(void*)`，返回错误。但不检查读出的指针值是否有效。

## 示例

```javascript
/* 从输出参数获取返回的指针 */
var outBuf = new ArrayBuffer(FFI.PointerSize)
var outPtr = FFI.RefPointer(outBuf)
nativeFunc.Call(outPtr)
var resultPtr = FFI.DerefPointer(outBuf)
```
