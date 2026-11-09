# Application.CreateDataBuffer

创建一个共享数据缓冲区。

## 语法

```typescript
function CreateDataBuffer(size?: number): DataBuffer
```

Application   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| size | 可选 | number | 缓冲区大小（字节）。省略时默认 `1`。 |

## 返回值

创建的 [DataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/DataBuffer/obj) 对象。

## 说明

DataBuffer 是在同一加载项的多个浏览器页面之间共享二进制数据的容器。创建后会分配唯一 ID，可通过 [GetDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetDataBuffer) 按 ID 获取，不再需要时用 [DeleteDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/DeleteDataBuffer) 删除。

## 示例

```javascript
/* 创建数据缓冲区 */
function test() {
  var buf = Application.CreateDataBuffer(1024)
  console.log("缓冲区ID：" + buf.Id)
}
```
