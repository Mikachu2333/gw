# DataBuffer 对象

跨页面共享的二进制数据缓冲区。

## 说明

通过 [CreateDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateDataBuffer) 创建，用于在同一加载项的多个浏览器页面之间共享数据。每个缓冲区有唯一 ID，可通过 [GetDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetDataBuffer) 按 ID 获取，不再需要时用 [DeleteDataBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/DeleteDataBuffer) 删除。

## 示例

```javascript
/* 在一个浏览器页面中创建缓冲区，并将 Id 存入 PluginStorage */
function test() {
    let buffer = Application.CreateDataBuffer(1024);
    Application.PluginStorage.setItem("test_key", buffer.Id);
    buffer.FillDataFromString("data buffer");
}

/* 在加载项的另一个浏览器页面中按 Id 取回并读取数据 */
function test2() {
    let id = Application.PluginStorage.getItem("test_key");
    let buffer = Application.GetDataBuffer(id);
    for (let byte of new Uint8Array(buffer.Data())) {
        console.log(byte);
    }
    Application.DeleteDataBuffer(id);
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [FillDataFromString](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/DataBuffer/member/FillDataFromString) | 将字符串以 UTF-8 编码写入缓冲区。 |
| [Data](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/DataBuffer/member/Data) | 获取缓冲区的数据内容。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/DataBuffer/member/Id) | 缓冲区的唯一标识 ID。 **number** 类型，只读。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/DataBuffer/member/Size) | 缓冲区的大小（字节）。 **number** 类型，可读写。 |
