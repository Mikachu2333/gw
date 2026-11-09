# FFIPointer.ToBigInt

将指针地址转换为 BigInt 整数值。

## 语法

```typescript
ToBigInt(): bigint
```

express   一个代表 **FFIPointer** 对象的变量。

## 返回值

指针地址的整数表示。

## 说明

是 [FFI.BigIntToPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/BigIntToPointer) 的反向操作。在 64 位系统上返回完整的 64 位地址值，在 32 位系统上高 32 位为 0。返回 BigInt 类型而非 Number，因为 64 位地址可能超出 Number 的安全整数范围（2^53）。
