# FFI 对象

外部函数接口（Foreign Function Interface），用于从 JS 宏中调用原生动态库的函数。

## 说明

FFI 模块允许 WPS 宏直接调用 C/C++ 编写的动态库（Windows 的 `.dll`、Linux 的 `.so`、macOS 的 `.dylib`）中的函数，实现 JS 与原生代码的互操作。底层使用 libffi 库处理不同平台和调用约定下的函数调用。

完整的 FFI 工作流程：1) 通过 [FFI.LoadLibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/LoadLibrary) 加载动态库得到 [FFILibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFILibrary/obj)；2) 通过 [FFILibrary.LoadFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFILibrary/member/LoadFunction) 从库中加载函数得到 [FFIFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIFunction/obj)；3) 通过 [FFIFunction.Call](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIFunction/member/Call) 调用原生函数。也可以使用 [FFI.CreateFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/CreateFunction) 从已知的函数指针直接创建 FFIFunction。

支持的数据类型：`"void"`、`"bool"`、`"int8"`、`"int16"`、`"int32"`、`"int64"`、`"uint8"`、`"uint16"`、`"uint32"`、`"uint64"`、`"float"`、`"double"`、`"pointer"`、`"string"`（UTF-8）、`"u16string"`（UTF-16）。

支持的调用约定（ABI）：`""`（空串，使用当前平台默认 ABI，见 `kffi.cpp` `abiNameToFfiAbi` L478–481）、`"cdecl"`、`"stdcall"`、`"thiscall"`、`"fastcall"`（Windows 32 位），`"win64"`、`"gnuw64"`（Windows 64 位），`"unix64"`、`"sysv"`（Linux/macOS 64 位），`"pascal"`、`"lp64s"`、`"lp64f"`、`"lp64d"`、`"n64"`、`"n64_soft_float"`（其他架构）。

警告：FFI 是低级 API，错误使用（如参数类型不匹配、访问无效内存、忘记释放内存）可能导致 WPS 崩溃或数据损坏。

## 示例

```javascript
/* 调用 Windows MessageBoxW */
var lib = FFI.LoadLibrary("user32")
var msgBox = lib.LoadFunction(
  "MessageBoxW", "MessageBoxW", "stdcall",
  "int32", ["pointer", "u16string", "u16string", "uint32"]
)
msgBox.Call(0, "Hello from WPS!", "FFI Demo", 0)
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [LoadLibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/LoadLibrary) | 加载动态库文件，返回 [FFILibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFILibrary/obj) 对象。 |
| [RefPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/RefPointer) | 获取 ArrayBuffer 底层数据缓冲区的指针。 |
| [DerefPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/DerefPointer) | 从 ArrayBuffer 中读取一个指针值并返回 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。 |
| [BigIntToPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/BigIntToPointer) | 将整数地址值转换为 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj) 对象。 |
| [CreateFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/CreateFunction) | 从函数指针创建 [FFIFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIFunction/obj) 对象。 |
| [CreateCallback](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/CreateCallback) | 创建一个可被原生代码回调的闭包（[FFIClosure](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIClosure/obj)）。 |
| [Malloc](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/Malloc) | 分配指定字节数的原生内存，返回 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。 |
| [Free](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/Free) | 释放由 [Malloc](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/Malloc) 分配的内存。 |
| [Memcpy](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/Memcpy) | 在两个内存区域之间复制数据。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [PointerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/PointerSize) | 当前平台的指针大小（字节数）。 **number** 类型，只读。 |
