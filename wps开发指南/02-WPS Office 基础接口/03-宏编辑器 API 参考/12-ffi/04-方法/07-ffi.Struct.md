# ffi.Struct

创建结构体类型，遵循 C 语言的内存对齐规则。

## 语法

```typescript
function Struct(fields: FieldDecl[]): Type
```

express   一个代表 **ffi** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| fields | 必选 | FieldDecl[] | 字段声明数组，每项包含 `name`（字段名）和 `type`（类型声明）。 |

## 返回值

结构体类型。

## 说明

接受字段声明数组，按声明顺序排列字段。每个字段按其类型的对齐要求自动填充，结构体尾部填充到整体对齐的倍数——与 C 编译器默认行为一致。返回的类型实例继承自 ArrayBuffer，字段自动绑定为 getter/setter 属性，可通过 `struct.fieldName` 直接读写。

构造函数接受可选的初始化对象：`new MyStruct({ x: 1, y: 2 })`。`toObject()` 方法将结构体导出为普通 JS 对象。获取字段指针可调用 `ref_<字段名>()`；获取结构体整体指针使用 `FFI.RefPointer(instance)`。

## 示例

```javascript
/* 定义和使用结构体 */
function test() {
  var RECT = ffi.Struct([
    { name: "left", type: "int32" },
    { name: "top", type: "int32" },
    { name: "right", type: "int32" },
    { name: "bottom", type: "int32" }
  ])
  var rc = new RECT({ left: 0, top: 0, right: 800, bottom: 600 })
  Debug.Print("宽=" + (rc.right - rc.left))
  Debug.Print(JSON.stringify(rc.toObject()))
}
```

```javascript
/* 嵌套结构体 */
function test() {
  var POINT = ffi.Struct([
    { name: "x", type: "int32" },
    { name: "y", type: "int32" }
  ])
  var LINE = ffi.Struct([
    { name: "start", type: ffi.Buffer(POINT) },
    { name: "end", type: ffi.Buffer(POINT) }
  ])
}
```
