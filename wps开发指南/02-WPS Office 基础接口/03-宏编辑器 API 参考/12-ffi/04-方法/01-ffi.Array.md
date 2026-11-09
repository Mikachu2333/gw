# ffi.Array

创建固定长度数组类型。

## 语法

```typescript
function Array(inner: TypeDecl, length: number): Type
```

express   一个代表 **ffi** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| inner | 必选 | TypeDecl | 元素类型。 |
| length | 必选 | number | 数组长度（元素个数）。 |

## 返回值

固定长度数组类型。

## 说明

返回的数组类型实例继承自 ArrayBuffer，总大小 = 元素类型 size × 长度。提供带边界检查的 `get(index)` 和 `set(index, value)` 方法——越界时抛出 RangeError（这是比直接使用 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj) 更安全的访问方式）。`ref(index?)` 方法返回指向数组（或特定元素）的类型化指针。

## 示例

```javascript
/* 创建 int32 数组 */
function test() {
  var IntArray = ffi.Array("int32", 4)
  var arr = new IntArray([1, 2, 3, 4])
  for (var i = 0; i < 4; i++) {
    Debug.Print(arr.get(i))
  }
}
```

```javascript
/* 将数组传递给原生函数 */
function test() {
  var IntArray = ffi.Array("int32", 10)
  var arr = new IntArray()
  arr.set(0, 42)
  var ptr = arr.ref()
}
```
