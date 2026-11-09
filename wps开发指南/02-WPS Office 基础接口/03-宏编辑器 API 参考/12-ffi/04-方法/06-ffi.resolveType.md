# ffi.resolveType

将类型声明解析为 [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Type/obj) 对象。

## 语法

```typescript
function resolveType(type: TypeDecl): Type
```

express   一个代表 **ffi** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| type | 必选 | TypeDecl | 类型声明：字符串、Type 对象或返回 Type 的函数。 |

## 返回值

解析后的 Type 对象。

## 说明

字符串输入从 [ffi.types](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/types) 查找，对象和函数类型直接返回。不支持的字符串在 `ffi.types` 中查找不到时返回 `undefined`（不会在 `resolveType` 内立即抛出异常）；传入既非字符串、对象、函数的类型时，会抛出 `Error("Invalid type: …")`。这是 ffi 类型系统内部的核心解析器，也可以在需要手动获取 Type 对象时使用。

## 示例

```javascript
/* 解析类型 */
function test() {
  var t = ffi.resolveType("int32")
  Debug.Print(t.size)
}
```
