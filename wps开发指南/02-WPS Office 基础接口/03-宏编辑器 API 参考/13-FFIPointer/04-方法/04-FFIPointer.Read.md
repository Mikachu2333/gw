# FFIPointer.Read

从指针偏移位置读取指定类型的值。

## 语法

```typescript
Read(Type: string, Offset: number): any
```

express   一个代表 **FFIPointer** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | string | 要读取的数据类型字符串。 |
| Offset | 必选 | number | 从指针起始位置的字节偏移量。 |

## 返回值

读取到的值，类型取决于 Type 参数。

## 说明

将 `pointer + offset` 位置的内存按指定类型解释并返回。不进行边界检查——读取无效地址会导致崩溃。支持的类型字符串：`"void"`、`"bool"`、`"int8"`、`"int16"`、`"int32"`、`"int64"`、`"uint8"`、`"uint16"`、`"uint32"`、`"uint64"`、`"float"`、`"double"`、`"pointer"`、`"string"`、`"u16string"`。`int64`/`uint64` 返回 BigInt，`pointer` 返回 FFIPointer，`string`/`u16string` 返回 String，其余返回 Number 或 Boolean。

## 示例

```javascript
/* 读取结构体字段 */
var x = ptr.Read("int32", 0)
var y = ptr.Read("int32", 4)
var name = ptr.Read("pointer", 8)
```
