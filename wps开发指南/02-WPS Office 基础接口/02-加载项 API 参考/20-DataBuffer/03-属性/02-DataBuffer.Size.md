# DataBuffer.Size

缓冲区的大小（字节）。

## 语法

express.**Size**

express   一个代表 **DataBuffer** 对象的变量。

## 类型

number，可读写。

## 说明

可读写。读取时返回当前缓冲区大小；写入时调整缓冲区大小。

## 示例

```javascript
/* 调整缓冲区大小 */
function test() {
  var buf = Application.CreateDataBuffer(100)
  console.log("初始大小：" + buf.Size)
  buf.Size = 2048
  console.log("调整后大小：" + buf.Size)
}
```
