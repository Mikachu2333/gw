# ffi.Union

创建联合体类型——所有字段共享同一块内存。

## 语法

```typescript
function Union(fields: FieldDecl[]): Type
```

express   一个代表 **ffi** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| fields | 必选 | FieldDecl[] | 字段声明数组。 |

## 返回值

联合体类型。

## 说明

与 [ffi.Struct](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/ffinamespace/member/Struct) 的区别：联合体的所有字段偏移都是 0，大小等于最大字段的大小。写入一个字段会覆盖其他字段的内存——这是 C 语言 `union` 的标准语义。适用于需要以不同类型解释同一块内存的场景（如类型双关、变体类型）。

## 示例

```javascript
/* 类型双关 */
function test() {
  var FloatInt = ffi.Union([
    { name: "f", type: "float" },
    { name: "i", type: "uint32" }
  ])
  var v = new FloatInt()
  v.f = 3.14
  Debug.Print("float 3.14 的整数表示：" + v.i)
}
```
