# FileSystem.Remove

删除指定路径的文件。

## 语法

```typescript
function Remove(path: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要删除的文件路径。 |

## 返回值

删除成功返回 `true`，失败返回 `false`。

## 说明

删除前会先将文件权限修改为所有者可写，以确保能删除只读文件。
只能删除文件，不能删除目录——删除目录应使用 [FileSystem.rmdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/rmdirSync)。
不支持通配符匹配（与 [Kill](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Kill) 不同）。

注意：即使删除失败（如文件被其他进程占用），文件权限也已经被修改为可写且不会恢复。
如果不希望修改文件权限，可以使用 [FileSystem.unlinkSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/unlinkSync)——它不会修改文件权限，但删除只读文件时可能失败。

## 示例

```javascript
/* 删除文件 */
if (FileSystem.Exists("C:\\temp\\data.txt")) {
  var ok = FileSystem.Remove("C:\\temp\\data.txt")
  Console.log("删除结果：" + ok)
}
```

```javascript
/* 删除只读文件 */
var ok = FileSystem.Remove("C:\\temp\\readonly.txt")
```
