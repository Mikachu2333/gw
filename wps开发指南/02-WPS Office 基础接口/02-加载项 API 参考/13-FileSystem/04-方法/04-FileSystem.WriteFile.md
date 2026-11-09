# FileSystem.WriteFile

将数据写入文件，覆盖已有内容。

## 语法

```typescript
function WriteFile(path: string, data: string | ArrayBuffer): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要写入的文件路径。 |
| data | 必选 | string \| ArrayBuffer | 要写入的数据，字符串或 ArrayBuffer。 |

## 返回值

写入成功返回 `true`，文件打开失败返回 `false`。

## 说明

以覆盖模式写入文件——如果文件已存在，原内容会被清空后重新写入。如果文件不存在，会自动创建。

`data` 参数支持两种类型：
- **字符串**：以 UTF-8 编码写入文件。
- **ArrayBuffer**：以原始二进制字节写入文件。

如果传入其他类型的数据，会抛出参数错误异常。
如需追加写入而非覆盖，使用 [FileSystem.AppendFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/AppendFile)。
与 [FileSystem.writeFileString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/writeFileString) 的区别：`WriteFile` 将字符串以 UTF-8 编码写入，而 `writeFileString` 以 UTF-16LE 原始字节写入。

## 示例

```javascript
/* 写入文本文件 */
FileSystem.WriteFile("C:\\output\\log.txt", "日志内容")
```

```javascript
/* 写入二进制数据 */
var buffer = new ArrayBuffer(4)
var view = new Uint8Array(buffer)
view[0] = 0x48; view[1] = 0x65; view[2] = 0x6C; view[3] = 0x6F
FileSystem.WriteFile("C:\\output\\data.bin", buffer)
```

```javascript
/* 覆盖已有文件 */
FileSystem.WriteFile("C:\\output\\config.txt", "旧配置")
FileSystem.WriteFile("C:\\output\\config.txt", "新配置")
var content = FileSystem.ReadFile("C:\\output\\config.txt")
```
