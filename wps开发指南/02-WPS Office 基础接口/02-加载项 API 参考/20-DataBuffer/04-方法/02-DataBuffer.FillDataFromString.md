# DataBuffer.FillDataFromString

将字符串以 UTF-8 编码写入缓冲区。

## 语法

```typescript
FillDataFromString(data: string): boolean
```

express   一个代表 **DataBuffer** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| data | 必选 | string | 要写入的字符串。 |

## 返回值

写入成功返回 `true`，失败返回 `false`。

## 说明

字符串先被转换为 UTF-8 字节序列，然后写入缓冲区。写入的是原始字节数据，不包含 BOM 或其他编码标记。

## 示例

```javascript
/* 向缓冲区写入文本 */
function test() {
  var buf = Application.CreateDataBuffer(1024)
  var ok = buf.FillDataFromString("Hello, WPS!")
  console.log("写入结果：" + ok)
}
```
