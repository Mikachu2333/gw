# FileSystem.writeFileString

以 UTF-16LE 原始编码将字符串写入文件，覆盖已有内容。

## 语法

```typescript
function writeFileString(path: string, data: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要写入的文件路径。 |
| data | 必选 | string | 要写入的字符串内容。 |

## 返回值

写入成功返回 `true`，参数无效时返回 `false`。

## 说明

将 JS 字符串的 UTF-16LE 原始字节直接写入文件，不做编码转换，不添加 BOM 标记。
与 [FileSystem.readFileString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/readFileString) 配对使用——`writeFileString` 写入的文件可以用 `readFileString` 正确读回。

与 [FileSystem.WriteFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/WriteFile) 的区别在于：`WriteFile` 将字符串以 UTF-8 编码写入，
而 `writeFileString` 保留字符串的原始 UTF-16LE 字节。写入的文件用其他编辑器打开时，
由于没有 BOM 标记，编辑器可能无法自动识别编码。

## 示例

```javascript
/* 写入并读回 */
FileSystem.writeFileString("C:\\data\\utf16.dat", "你好世界")
var content = FileSystem.readFileString("C:\\data\\utf16.dat")
Debug.Print(content)
```
