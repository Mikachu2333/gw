# FFIPointer.DerefString

将指针指向的内存解释为 UTF-8 字符串并返回。

## 语法

```typescript
DerefString(): string
```

express   一个代表 **FFIPointer** 对象的变量。

## 返回值

UTF-8 解码后的字符串。

## 说明

假设指针指向以 null 结尾的 UTF-8 编码字符串。不支持指定最大读取长度——始终读取到 null 终止符。如果指针指向的内存没有 null 终止符或不是有效的 UTF-8，行为未定义。适用于 Linux/macOS 原生 API 和大多数跨平台 C 库返回的字符串。
