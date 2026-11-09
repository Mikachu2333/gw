# Application.GetDataBuffer

根据 ID 获取已创建的数据缓冲区。

## 语法

```typescript
function GetDataBuffer(id: number): DataBuffer | undefined
```

Application   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| id | 必选 | number | 数据缓冲区的 ID。 |

## 返回值

找到返回 [DataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/DataBuffer/obj) 对象，未找到返回 `undefined`。

## 示例

```javascript
/* 获取数据缓冲区 */
function test() {
  var buf = Application.GetDataBuffer(1)
  if (buf) {
    console.log("缓冲区大小：" + buf.Size)
  }
}
```
