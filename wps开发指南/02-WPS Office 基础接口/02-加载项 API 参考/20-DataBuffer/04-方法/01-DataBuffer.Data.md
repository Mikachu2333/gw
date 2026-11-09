# DataBuffer.Data

获取缓冲区的数据内容。

## 语法

```typescript
Data(): ArrayBuffer
```

express   一个代表 **DataBuffer** 对象的变量。

## 返回值

缓冲区数据的 ArrayBuffer。

## 说明

通过共享内存返回缓冲区数据的 `ArrayBuffer` 视图。如果缓冲区内部键为空（未正确初始化），返回 `undefined`。

## 示例

```javascript
/* 读取缓冲区数据 */
function test() {
  var buf = Application.CreateDataBuffer(256)
  buf.FillDataFromString("test data")
  var data = buf.Data()
  if (data) {
    console.log("数据大小：" + data.byteLength)
  }
}
```
