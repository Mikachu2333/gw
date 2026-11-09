# Type 对象

FFI 类型描述对象，定义了一种数据类型在内存中的大小、对齐和编解码方式。

## 说明

由 [ffi.Struct](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Struct)、[ffi.Array](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Array)、[ffi.Pointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Pointer)、[ffi.Buffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Buffer)、[ffi.Union](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Union)、[ffi.Function](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Function) 等工厂函数返回，也可以从 [ffi.types](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/types) 中获取基本类型。类型对象可作为其他复合类型的字段类型或参数类型使用。

{#objmember}

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [primaryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Type/member/primaryType) | 底层 FFI 基本类型名称。 **string** 类型，只读。 |
| [size](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Type/member/size) | 该类型在内存中的字节大小。 **number** 类型，只读。 |
| [align](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Type/member/align) | 该类型的内存对齐要求（字节数）。 **number** 类型，只读。 |
