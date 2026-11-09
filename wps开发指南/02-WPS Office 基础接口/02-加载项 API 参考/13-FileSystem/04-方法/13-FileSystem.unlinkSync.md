# FileSystem.unlinkSync

删除指定路径的文件。

## 语法

```typescript
function unlinkSync(path: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要删除的文件路径。 |

## 返回值

删除成功返回 `true`，失败返回 `false`。

## 说明

对应 Node.js 的 `fs.unlinkSync`，只能删除文件（包括符号链接），不能删除目录。

与 [FileSystem.Remove](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Remove) 的区别：`Remove` 会先将文件权限修改为可写再删除，因此对只读文件也能成功；
而 `unlinkSync` 不修改文件权限，删除只读文件时可能因权限不足而失败。
如果不希望产生权限修改的副作用，应使用 `unlinkSync`。

## 示例

```javascript
/* 删除临时文件 */
var ok = FileSystem.unlinkSync("C:\\temp\\cache.dat")
if (!ok) {
  Console.log("删除失败")
}
```
