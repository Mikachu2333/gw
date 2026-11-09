# FileSystem.rmdirSync

删除指定路径的空目录。

## 语法

```typescript
function rmdirSync(path: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要删除的目录路径。 |

## 返回值

删除成功返回 `true`，目录不为空或删除失败返回 `false`。

## 说明

对应 Node.js 的 `fs.rmdirSync`。只能删除空目录——如果目录内包含任何文件或子目录，删除会失败。
与 VBA 的 [RmDir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/RmDir) 行为一致。

如果路径指向文件而非目录，也会失败。删除文件应使用 [FileSystem.unlinkSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/unlinkSync) 或 [FileSystem.Remove](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Remove)。

不支持递归删除。要删除非空目录，需要先用 [FileSystem.readdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/readdirSync) 列出目录内容，
逐个删除所有文件和子目录后，再调用 `rmdirSync` 删除空目录。

## 示例

```javascript
/* 删除空目录 */
var ok = FileSystem.rmdirSync("C:\\temp\\emptyDir")
if (!ok) {
  Console.log("删除失败，目录可能不为空")
}
```

```javascript
/* 先清空目录内容再删除 */
var files = FileSystem.readdirSync("C:\\temp\\myDir")
if (files) {
  for (var i = 0; i < files.length; i++) {
    FileSystem.unlinkSync("C:\\temp\\myDir\\" + files[i])
  }
  FileSystem.rmdirSync("C:\\temp\\myDir")
}
```
