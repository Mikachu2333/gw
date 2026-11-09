# FileSystem.readdirSync

读取目录内容，返回文件名数组。

## 语法

```typescript
function readdirSync(path: string): string[]
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要读取的目录路径。 |

## 返回值

目录中所有条目的文件名数组。

## 说明

对应 Node.js 的 `fs.readdirSync`。一次性返回指定目录下所有条目的文件名（不含路径），
包括文件和子目录，自动跳过 `.` 和 `..`。

与 VBA 的 [Dir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Dir) 使用迭代器模式不同，`readdirSync` 一次返回所有条目的数组，
不维护全局搜索状态。

如果目录为空，返回空数组。如果路径不存在或遍历出错，抛出异常。

## 示例

```javascript
/* 列出目录内容 */
var files = FileSystem.readdirSync("C:\\workspace")
for (var i = 0; i < files.length; i++) {
  Console.log(files[i])
}
```

```javascript
/* 递归删除目录 */
function removeDir(dirPath) {
  var entries = FileSystem.readdirSync(dirPath)
  for (var i = 0; i < entries.length; i++) {
    var fullPath = dirPath + "\\" + entries[i]
    if (FileSystem.stat(fullPath).isDirectory()) {
      removeDir(fullPath)
    } else {
      FileSystem.unlinkSync(fullPath)
    }
  }
  FileSystem.rmdirSync(dirPath)
}
```
