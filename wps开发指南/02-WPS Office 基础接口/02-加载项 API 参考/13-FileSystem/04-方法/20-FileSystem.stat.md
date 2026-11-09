# FileSystem.stat

获取指定路径的文件或目录的状态信息。

## 语法

```typescript
function stat(path: string): FSStats | undefined
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要查询状态的文件或目录路径。 |

## 返回值

文件状态对象，如果失败则返回 `undefined`。

## 说明

对应 Node.js 的 `fs.statSync`。返回一个 [FSStats](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/obj) 对象，包含文件的大小、权限、时间戳等详细信息，
以及类型判断方法（如 `isFile()`、`isDirectory()` 等）。

此方法跟随符号链接——如果路径是符号链接，返回的是链接指向的目标的状态信息。

如果路径不存在或获取状态失败，返回 `undefined`。

## 示例

```javascript
/* 获取文件信息 */
var stats = FileSystem.stat("C:\\data\\file.txt")
if (stats) {
  Console.log("文件大小：" + stats.size + " 字节")
  Console.log("最后修改：" + stats.mtime)
  Console.log("是文件：" + stats.isFile())
}
```

```javascript
/* 判断路径是文件还是目录 */
var stats = FileSystem.stat("C:\\workspace")
if (stats) {
  if (stats.isDirectory()) {
    Console.log("这是一个目录")
  } else if (stats.isFile()) {
    Console.log("这是一个文件")
  }
}
```
