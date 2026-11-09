# FileSystem.ReadFile

读取文件的全部内容并以字符串返回。

## 语法

```typescript
function ReadFile(path: string): string
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要读取的文件路径。 |

## 返回值

文件的全部内容。

## 说明

一次性将整个文件内容加载到内存并返回。对于大文件可能导致内存问题。

注意：此方法在将文件字节转为字符串时使用 Latin-1 编码，对包含非 ASCII 字符的文件
（如中文 UTF-8 文件）可能返回乱码。[FileSystem.WriteFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/WriteFile) 以 UTF-8 编码写入文件，
但 `ReadFile` 以 Latin-1 编码读取，两者存在编码不一致。
如需读取纯二进制数据，使用 [FileSystem.ReadFileAsArrayBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/ReadFileAsArrayBuffer)。

如果文件打开失败（路径不存在或权限不足），会抛出异常而非返回空值。
这与 [FileSystem.ReadFileAsArrayBuffer](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/ReadFileAsArrayBuffer) 失败时静默返回 `undefined` 的行为不同。

## 示例

```javascript
/* 读取文件内容 */
try {
  var content = FileSystem.ReadFile("C:\\data\\config.txt")
  Console.log(content)
} catch (e) {
  Console.log("读取失败：" + e)
}
```
