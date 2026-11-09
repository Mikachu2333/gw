# FFIPointer.DerefU16String

将指针指向的内存解释为 UTF-16 宽字符串并返回。

## 语法

```typescript
DerefU16String(): string
```

express   一个代表 **FFIPointer** 对象的变量。

## 返回值

UTF-16 解码后的字符串。

## 说明

假设指针指向以 null 结尾的 WCHAR（UTF-16）编码字符串。适用于 Windows API 的 `LPWSTR`/`LPCWSTR` 类型（如 `GetWindowTextW` 的输出）。与 [| DerefString()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/DerefString) 的区别：DerefString 处理 UTF-8，DerefU16String 处理 UTF-16。
