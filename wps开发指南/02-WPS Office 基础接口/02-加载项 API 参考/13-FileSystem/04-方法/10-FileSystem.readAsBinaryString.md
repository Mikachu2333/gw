# FileSystem.readAsBinaryString

以二进制字符串形式读取文件内容。

## 语法

```typescript
function readAsBinaryString(path: string): string | undefined
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要读取的文件路径。 |

## 返回值

以二进制字符串表示的文件内容，如果失败则返回 `undefined`。

## 说明

读取文件的每个字节并扩展为一个 Unicode 字符（高字节补零），
返回的字符串中每个字符的 `charCodeAt` 值等于对应的原始字节值（0-255）。
这模拟了浏览器 `FileReader.readAsBinaryString` 的行为。

此方法是二进制安全的，即使文件包含 null 字节（0x00）也能正确读取。
与 [FileSystem.writeAsBinaryString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/writeAsBinaryString) 配对使用——`readAsBinaryString` 读取的内容可以
通过 `writeAsBinaryString` 还原为原始二进制文件。

如果文件打开失败或路径为空，静默返回 `undefined`。

## 示例

```javascript
/* 读取文件的二进制内容 */
var binaryStr = FileSystem.readAsBinaryString("C:\\data\\file.bin")
if (binaryStr !== undefined) {
  for (var i = 0; i < binaryStr.length; i++) {
    Console.log("字节 " + i + ": 0x" + binaryStr.charCodeAt(i).toString(16))
  }
}
```

```javascript
/* 获取文件大小 */
var binaryStr = FileSystem.readAsBinaryString("C:\\data\\file.bin")
if (binaryStr !== undefined) {
  Console.log("文件大小：" + binaryStr.length + " 字节")
}
```
