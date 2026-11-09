# ffi.Buffer

创建内联缓冲区类型——数据直接嵌入而非通过指针引用。

## 语法

```typescript
function Buffer(inner: TypeDecl): Type
```

express   一个代表 **ffi** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| inner | 必选 | TypeDecl | 内部类型。 |

## 返回值

内联缓冲区类型。

## 说明

与 [ffi.Pointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Pointer) 不同，Buffer 类型的实例直接包含数据（继承自 ArrayBuffer），大小等于内部类型的 size。适用于结构体中嵌入的子结构体、需要在 JS 侧分配的值类型缓冲区。

实例提供 `read()` 和 `write(value)` 方法按内部类型编解码，`ref()` 方法通过 [FFI.RefPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/RefPointer) 获取缓冲区的类型化指针以传递给原生函数。

## 示例

```javascript
/* 嵌入结构体中 */
function test() {
  var Inner = ffi.Struct([{ name: "value", type: "int32" }])
  var Outer = ffi.Struct([
    { name: "header", type: "int32" },
    { name: "data", type: ffi.Buffer(Inner) }
  ])
}
```
