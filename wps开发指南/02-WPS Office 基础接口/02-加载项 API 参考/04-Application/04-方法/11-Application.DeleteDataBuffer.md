# Application.DeleteDataBuffer

删除指定 ID 的数据缓冲区。

## 语法

```typescript
function DeleteDataBuffer(id: number): void
```

Application   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| id | 必选 | number | 要删除的数据缓冲区 ID。 |

## 说明

释放通过 [CreateDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateDataBuffer) 创建的数据缓冲区。删除后该 ID 不再有效，通过 [GetDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetDataBuffer) 无法再获取。ID 不存在时静默失败。

## 示例

```javascript
/* 创建并删除数据缓冲区 */
function test() {
  var buf = Application.CreateDataBuffer(256)
  var id = buf.Id
  Application.DeleteDataBuffer(id)
}
```
