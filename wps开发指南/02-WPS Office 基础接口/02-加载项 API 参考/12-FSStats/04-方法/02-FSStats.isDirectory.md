# FSStats.isDirectory

判断是否为目录。

## 语法

```typescript
isDirectory(): boolean
```

express   一个代表 **FSStats** 对象的变量。

## 返回值

是目录返回 `true`，否则返回 `false`。

## 说明

与 [FileSystem.Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Exists) 不同——`Exists` 只判断路径是否存在，无法区分文件和目录。`isDirectory()` 明确判断路径是否指向一个目录。

如果路径是指向目录的符号链接，也会返回 `true`——因为 [FileSystem.stat](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/stat) 会跟随符号链接，检查的是链接目标的类型。

常与 [FileSystem.readdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/readdirSync) 配合实现目录遍历：`readdirSync` 返回目录内的文件名列表，对每个条目调用 `stat` + `isDirectory()` 可以区分子目录和文件。

## 示例

```javascript
/* 区分文件和目录 */
var stats = FileSystem.stat(path)
if (stats) {
  if (stats.isDirectory()) {
    Console.log(path + " 是目录")
  } else if (stats.isFile()) {
    Console.log(path + " 是文件")
  }
}
```

```javascript
/* 递归列出目录中的所有文件 */
function listFiles(dir) {
  var items = FileSystem.readdirSync(dir)
  if (!items) return
  for (var i = 0; i < items.length; i++) {
    var fullPath = dir + "\\" + items[i]
    var s = FileSystem.stat(fullPath)
    if (s && s.isDirectory()) {
      listFiles(fullPath)
    } else {
      Console.log(fullPath)
    }
  }
}
```
