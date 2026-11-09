# ffi.types

所有 FFI 支持的基本类型映射表。

## 语法

express.**types**

express   一个代表 **ffi** 对象的变量。

## 类型

Record<string, Type>，只读。

## 说明

键为类型字符串，值为对应的 [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Type/obj) 对象。包含以下类型：
- 数值类型：`"void"`、`"bool"`、`"int8"`、`"int16"`、`"int32"`、`"int64"`、`"uint8"`、`"uint16"`、`"uint32"`、`"uint64"`、`"float"`、`"double"`
- 字符串类型：`"string"`（UTF-8）、`"u16string"`（UTF-16）
- 指针类型：`"pointer"`
- 别名：`"char*"` 等同于 `"string"`，`"void*"` 等同于 `"pointer"`
- 平台相关：`"size_t"` 在 32 位系统上等同于 `"uint32"`，64 位系统上等同于 `"uint64"`

## 示例

```javascript
/* 获取 int32 类型的大小 */
function test() {
  Debug.Print(ffi.types["int32"].size)
}
```
