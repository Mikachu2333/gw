# ffi.LoadLibrary

加载动态库并批量绑定函数，返回扩展后的库对象。

## 语法

```typescript
function LoadLibrary(name: string, functions: Record<string, LibraryFunctionDecl>): any
```

express   一个代表 **ffi** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| name | 必选 | string | 库的路径或名称。自动补全平台后缀。 |
| functions | 必选 | Record<string, LibraryFunctionDecl> | 函数声明映射表，键为调用时使用的函数名。 |

## 返回值

扩展后的库对象，已绑定的函数作为其属性。

## 说明

在底层 [FFI.LoadLibrary](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFI/member/LoadLibrary) 之上提供声明式的函数绑定。传入库名和函数声明表，返回的库对象上可以直接以属性方式调用已绑定的原生函数——参数和返回值的类型转换由 ffi 类型系统自动处理。

每个函数声明可以指定返回类型（默认 `"void"`）、参数类型列表（默认空）、导出符号名（默认与函数名相同）和调用约定（默认平台默认）。任一函数加载失败时抛出包含函数名的 Error。

## 示例

```javascript
/* 加载 user32 并调用 MessageBoxW */
function test() {
  var user32 = ffi.LoadLibrary("user32", {
    MessageBoxW: {
      abi: "stdcall",
      returnType: "int32",
      parameters: ["pointer", "u16string", "u16string", "uint32"]
    }
  })
  user32.MessageBoxW(null, "Hello", "Title", 0)
}
```

```javascript
/* 指定符号名 */
function test() {
  var lib = ffi.LoadLibrary("mylib", {
    add: { symbol: "my_add_func", returnType: "int32", parameters: ["int32", "int32"] }
  })
  Debug.Print(lib.add(1, 2))
}
```
