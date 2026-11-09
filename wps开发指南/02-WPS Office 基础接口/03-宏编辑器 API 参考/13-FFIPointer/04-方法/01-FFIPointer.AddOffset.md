# FFIPointer.AddOffset

返回一个偏移后的新 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)，不修改原指针。

## 语法

```typescript
AddOffset(Offset: number): FFIPointer
```

express   一个代表 **FFIPointer** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Offset | 必选 | number | 字节偏移量，可为负数。 |

## 返回值

偏移后的新 [FFIPointer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FFIPointer/obj)。

## 说明

计算 `pointer + offset` 得到新地址，用新地址创建并返回一个新的 FFIPointer。原 FFIPointer 保持不变（不可变设计）。偏移量是**字节级**的（类似 C 中的 `(char*)ptr + offset`），支持负偏移（向低地址方向移动）。常用于访问结构体字段或遍历数组元素。

## 示例

```javascript
/* 遍历 int32 数组 */
for (var i = 0; i < count; i++) {
  var elemPtr = arrayPtr.AddOffset(i * 4)
  Console.log(elemPtr.Read("int32", 0))
}
```
