# FFILibrary.LoadFunction

从动态库中加载一个导出函数。

## 语法

```typescript
LoadFunction(Name: string, Symbol: string, ABI: string, ReturnType: string, ArgumentTypeList: string[]): FFIFunction
```

express   一个代表 **FFILibrary** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 函数的显示名称（当前未使用）。 |
| Symbol | 必选 | string | 动态库中的导出符号名称。 |
| ABI | 必选 | string | 调用约定字符串。 |
| ReturnType | 必选 | string | 返回值类型字符串。 |
| ArgumentTypeList | 必选 | string[] | 参数类型字符串数组。 |

## 返回值

可调用的 [FFIFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIFunction/obj) 对象。

## 说明

通过符号名（Symbol）在动态库中查找导出函数，并根据指定的调用约定和类型信息创建 [FFIFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIFunction/obj)。内部使用平台原生的符号解析机制（Windows: `GetProcAddress`，Linux/macOS: `dlsym`）。

`Name` 参数在当前实现中未被使用——实际的符号查找完全依赖 `Symbol` 参数。Name 可能为将来的调试或命名功能预留。`Symbol` 必须是库中的实际导出符号名——对于 C++ 编写的库，除非使用 `extern "C"` 声明，否则符号名会经过名称修饰（如 `_Z3fooi`）。Windows 的 `__stdcall` 约定也会修饰符号名（如 `_MessageBoxW@16`）。

## 示例

```javascript
/* 加载 Windows API 函数 */
var user32 = FFI.LoadLibrary("user32")
var messageBox = user32.LoadFunction(
  "MessageBoxW", "MessageBoxW",
  "stdcall", "int32",
  ["pointer", "u16string", "u16string", "uint32"]
)
```
