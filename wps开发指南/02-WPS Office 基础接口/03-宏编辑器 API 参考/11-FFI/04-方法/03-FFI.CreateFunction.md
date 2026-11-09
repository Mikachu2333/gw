# FFI.CreateFunction

从函数指针创建 [FFIFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIFunction/obj) 对象。

## 语法

```typescript
function CreateFunction(pointer: FFIPointer, ABI: string, ReturnType: string, ArgumentTypeList: string[]): FFIFunction
```

express   一个代表 **FFI** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| pointer | 必选 | FFIPointer | 指向原生函数的 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。 |
| ABI | 必选 | string | 调用约定字符串（如 `"cdecl"`、`"stdcall"`、`"win64"`）。 |
| ReturnType | 必选 | string | 返回值类型字符串。 |
| ArgumentTypeList | 必选 | string[] | 参数类型字符串数组。 |

## 返回值

可调用的 [FFIFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIFunction/obj) 对象。

## 说明

根据指定的调用约定、返回值类型和参数类型列表，将一个函数指针包装为可调用的 FFIFunction。当已经持有函数指针（如通过其他 FFI 操作获取）时使用此方法，而不需要先通过 [FFI.LoadLibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/LoadLibrary) 加载库。

参数类型列表中的每个元素都是类型字符串：`"void"`、`"bool"`、`"int8"`、`"int16"`、`"int32"`、`"int64"`、`"uint8"`、`"uint16"`、`"uint32"`、`"uint64"`、`"float"`、`"double"`、`"pointer"`、`"string"`、`"u16string"`。无参数函数传入空数组 `[]` 或 `undefined`。
