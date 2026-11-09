# FFIPointer.Write

向指针偏移位置写入指定类型的值。

## 语法

```typescript
Write(Type: string, Offset: number, Value: any): void
```

express   一个代表 **FFIPointer** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | string | 要写入的数据类型字符串。 |
| Offset | 必选 | number | 从指针起始位置的字节偏移量。 |
| Value | 必选 | any | 要写入的值。 |

## 说明

将值按指定类型写入 `pointer + offset` 位置的内存。不进行边界检查——写入无效地址可能导致内存损坏或崩溃。支持的类型与 [| Read()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/member/Read) 相同。

## 示例

```javascript
/* 设置结构体字段 */
ptr.Write("int32", 0, 100)
ptr.Write("int32", 4, 200)
```
