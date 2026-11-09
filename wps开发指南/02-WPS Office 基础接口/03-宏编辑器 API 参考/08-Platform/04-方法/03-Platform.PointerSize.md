# Platform.PointerSize

返回当前平台的指针大小（字节数）。

## 语法

```typescript
function PointerSize(): number
```

express   一个代表 **Platform** 对象的变量。

## 返回值

指针大小（字节数）。

## 说明

返回 `sizeof(void*)`：32 位平台上为 4，64 位平台上为 8。与 [FFI.PointerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/PointerSize) 返回完全相同的值。
