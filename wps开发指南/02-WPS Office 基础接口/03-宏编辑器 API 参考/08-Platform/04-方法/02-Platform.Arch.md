# Platform.Arch

返回当前 CPU 架构。

## 语法

```typescript
function Arch(): string
```

express   一个代表 **Platform** 对象的变量。

## 返回值

CPU 架构名称字符串。

## 说明

返回值在编译时确定。可能的返回值：`"x64"`（64 位 x86）、`"x86"`（32 位 x86）、`"aarch64"`（ARM 64 位）、`"loongarch64"`（龙芯 64 位）、`"mips64el"`（MIPS 64 位小端序）。

与 Node.js 对比：Node.js 的 `process.arch` 返回 `"x64"`（一致）、`"ia32"`（WPS 用 `"x86"`）、`"arm64"`（WPS 用 `"aarch64"`）。
