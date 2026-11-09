# FFIPointer 对象

原生内存指针对象，用于读写原生内存。

## 说明

FFIPointer 封装一个原生内存地址，提供类型化的读写操作。指针对象本身不拥有所指向内存的所有权——内存的分配和释放由创建指针的方式决定：[FFI.Malloc](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/Malloc) 分配的需要 [FFI.Free](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/Free) 释放，[FFI.RefPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/RefPointer) 获取的由 ArrayBuffer 的 GC 管理，[FFI.BigIntToPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/BigIntToPointer) 和 [FFI.DerefPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/DerefPointer) 获取的由外部管理。

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Read](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/Read) | 从指针偏移位置读取指定类型的值。 |
| [Write](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/Write) | 向指针偏移位置写入指定类型的值。 |
| [DerefString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/DerefString) | 将指针指向的内存解释为 UTF-8 字符串并返回。 |
| [DerefU16String](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/DerefU16String) | 将指针指向的内存解释为 UTF-16 宽字符串并返回。 |
| [ToBigInt](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/ToBigInt) | 将指针地址转换为 BigInt 整数值。 |
| [AddOffset](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/AddOffset) | 返回一个偏移后的新 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)，不修改原指针。 |
