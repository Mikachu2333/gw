# ffi 对象

高级 FFI 类型系统，为 [FFI](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/obj) 提供结构化的类型定义和便捷的调用封装。

## 说明

`ffi` 对象在底层 C++ FFI 之上构建了一套完整的类型系统，支持结构体（[ffi.Struct](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Struct)）、联合体（[ffi.Union](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Union)）、数组（[ffi.Array](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Array)）、类型化指针（[ffi.Pointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Pointer)）和内联缓冲区（[ffi.Buffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Buffer)）。所有复合类型都基于 ArrayBuffer，字段通过 getter/setter 直接访问，内存布局遵循 C 语言的对齐规则。

基本工作流程：用 `ffi.Struct`/`ffi.Array` 等定义数据类型，用 `ffi.LoadLibrary` 加载库并批量声明函数签名，然后直接以 JS 值调用原生函数——参数和返回值的编解码由类型系统自动处理。

## 示例

```javascript
/* 定义结构体并调用 Windows API */
function test() {
  var POINT = ffi.Struct([
    { name: "x", type: "int32" },
    { name: "y", type: "int32" }
  ])
  var lib = ffi.LoadLibrary("user32", {
    GetCursorPos: { parameters: [ffi.Pointer(POINT)], returnType: "bool" }
  })
  var pt = new POINT()
  lib.GetCursorPos(pt.ref())
  Debug.Print("x=" + pt.x + " y=" + pt.y)
}
```

```javascript
/* 使用数组类型 */
function test() {
  var IntArray = ffi.Array("int32", 5)
  var arr = new IntArray([10, 20, 30, 40, 50])
  Debug.Print(arr.get(2))
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [resolveType](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/resolveType) | 将类型声明解析为 [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Type/obj) 对象。 |
| [LoadLibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/LoadLibrary) | 加载动态库并批量绑定函数，返回扩展后的库对象。 |
| [Function](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Function) | 创建函数指针类型，用于在结构体中声明函数指针字段或作为回调参数类型。 |
| [Pointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Pointer) | 创建类型化指针类型。 |
| [Buffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Buffer) | 创建内联缓冲区类型——数据直接嵌入而非通过指针引用。 |
| [Array](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Array) | 创建固定长度数组类型。 |
| [Struct](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Struct) | 创建结构体类型，遵循 C 语言的内存对齐规则。 |
| [Union](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Union) | 创建联合体类型——所有字段共享同一块内存。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [types](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/types) | 所有 FFI 支持的基本类型映射表。 **Record<string, Type>** 类型，只读。 |
| [pointerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/pointerSize) | 当前平台的指针大小（字节数）。 **number** 类型，只读。 |
