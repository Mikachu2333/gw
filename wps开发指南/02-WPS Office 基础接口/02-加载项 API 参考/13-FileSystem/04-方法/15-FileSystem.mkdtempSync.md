# FileSystem.mkdtempSync

创建一个具有唯一名称的临时目录。

## 语法

```typescript
function mkdtempSync(path: string): string | undefined
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 临时目录名的前缀路径。 |

## 返回值

创建成功返回完整的临时目录路径，失败返回 `undefined`。

## 说明

对应 Node.js 的 `fs.mkdtempSync`。传入目录名前缀，系统会在前缀后追加 6 位随机字符
来生成唯一的目录名并创建该目录。

例如传入 `"C:\\temp\\myapp-"` 可能创建 `"C:\\temp\\myapp-a1b2c3"` 目录。

创建失败时（如父目录不存在或权限不足）返回 `undefined`。

通常与 [FileSystem.tmpdir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/tmpdir) 配合使用，在系统临时目录下创建唯一的工作目录。

## 示例

```javascript
/* 创建临时工作目录 */
var tmpDir = FileSystem.mkdtempSync(FileSystem.tmpdir() + "\\myapp-")
if (tmpDir) {
  Console.log("临时目录：" + tmpDir)
  FileSystem.WriteFile(tmpDir + "\\data.txt", "临时数据")
}
```
