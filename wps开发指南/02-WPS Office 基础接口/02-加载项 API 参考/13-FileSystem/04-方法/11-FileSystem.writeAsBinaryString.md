# FileSystem.writeAsBinaryString

将二进制字符串还原为原始字节并写入文件。

## 语法

```typescript
function writeAsBinaryString(path: string, data: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要写入的文件路径。 |
| data | 必选 | string | 二进制字符串，每个字符表示一个字节。 |

## 返回值

写入成功返回 `true`，失败返回 `false`。

## 说明

从每个字符的 `charCodeAt` 值中提取低 8 位作为一个字节，逐字节写入文件。
与 [FileSystem.readAsBinaryString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/readAsBinaryString) 配对使用——将通过 `readAsBinaryString` 读取的二进制字符串还原为原始二进制文件。

注意：如果传入的字符串包含 `charCodeAt` 大于 255 的字符（如中文），
高字节会被截断丢失——此方法仅适用于由 `readAsBinaryString` 生成的二进制字符串。

## 示例

```javascript
/* 复制二进制文件 */
var binaryStr = FileSystem.readAsBinaryString("C:\\source\\file.bin")
if (binaryStr !== undefined) {
  FileSystem.writeAsBinaryString("C:\\dest\\file.bin", binaryStr)
}
```
