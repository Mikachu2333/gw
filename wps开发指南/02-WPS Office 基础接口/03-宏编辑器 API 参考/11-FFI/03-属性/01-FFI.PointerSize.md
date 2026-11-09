# FFI.PointerSize

当前平台的指针大小（字节数）。

## 语法

express.**PointerSize**

express   一个代表 **FFI** 对象的变量。

## 类型

number，只读。

## 说明

返回 `sizeof(void*)`：32 位平台上为 4，64 位平台上为 8。由于 WPS 主要在 64 位系统上运行，通常返回 8。用于分配正确大小的 ArrayBuffer 存储指针值、计算包含指针的结构体偏移量、以及区分运行时的架构位数。

## 示例

```javascript
/* 分配存储指针的缓冲区 */
var buf = new ArrayBuffer(FFI.PointerSize)
```
