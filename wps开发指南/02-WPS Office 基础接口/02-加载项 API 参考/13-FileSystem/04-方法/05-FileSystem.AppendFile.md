# FileSystem.AppendFile

将数据追加到文件末尾。

## 语法

```typescript
function AppendFile(path: string, data: string | ArrayBuffer): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要追加写入的文件路径。 |
| data | 必选 | string \| ArrayBuffer | 要追加的数据，字符串或 ArrayBuffer。 |

## 返回值

写入成功返回 `true`，文件打开失败返回 `false`。

## 说明

以追加模式写入文件——不清空原有内容，新数据写入文件末尾。如果文件不存在，会自动创建。

`data` 参数支持两种类型：
- **字符串**：以 UTF-8 编码追加到文件末尾。
- **ArrayBuffer**：以原始二进制字节追加到文件末尾。

如果传入其他类型的数据，会抛出参数错误异常。
如需覆盖写入而非追加，使用 [FileSystem.WriteFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/WriteFile)。

## 示例

```javascript
/* 追加日志记录 */
FileSystem.AppendFile("C:\\log\\app.log", "2024-01-01 启动完成\n")
FileSystem.AppendFile("C:\\log\\app.log", "2024-01-01 处理请求\n")
```

```javascript
/* 追加二进制数据 */
var buffer = new ArrayBuffer(2)
var view = new Uint8Array(buffer)
view[0] = 0x0D; view[1] = 0x0A
FileSystem.AppendFile("C:\\log\\data.bin", buffer)
```
