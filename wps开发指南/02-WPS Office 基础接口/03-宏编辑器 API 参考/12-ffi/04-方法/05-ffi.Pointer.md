# ffi.Pointer

创建类型化指针类型。

## 语法

```typescript
function Pointer(inner: TypeDecl): Type
```

express   一个代表 **ffi** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| inner | 必选 | TypeDecl | 被指向的类型。 |

## 返回值

类型化指针类型。

## 说明

返回的指针类型在内存中占 [ffi.pointerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/pointerSize) 字节。实例提供按被指向类型读写的 `read(index)` 和 `write(value, index)` 方法，以及获取偏移指针的 `ref(index)` 方法。

当被指向类型是 [ffi.Struct](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Struct) 或 [ffi.Union](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Union) 时，结构体字段自动绑定为指针的 getter/setter 属性——可以直接通过 `ptr.fieldName` 访问字段，另外还生成 `ref_fieldName()` 方法返回指向该字段的指针。

## 示例

```javascript
/* 使用结构体指针 */
function test() {
  var POINT = ffi.Struct([
    { name: "x", type: "int32" },
    { name: "y", type: "int32" }
  ])
  var PointPtr = ffi.Pointer(POINT)
  var pt = new POINT({ x: 100, y: 200 })
  var ptr = pt.ref()
  Debug.Print("x=" + ptr.x + " y=" + ptr.y)
}
```

```javascript
/* 按索引访问数组元素 */
function test() {
  var IntPtr = ffi.Pointer("int32")
  var buf = FFI.Malloc(20)
  var ptr = IntPtr.create(buf)
  ptr.write(42, 0)
  ptr.write(99, 1)
  Debug.Print(ptr.read(1))
  FFI.Free(buf)
}
```
