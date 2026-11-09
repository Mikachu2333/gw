# FSStats.isFile

判断是否为普通文件。

## 语法

```typescript
isFile(): boolean
```

express   一个代表 **FSStats** 对象的变量。

## 返回值

是普通文件返回 `true`，否则返回 `false`。

## 说明

"普通文件"是指包含用户数据的文件——文本文件、文档、图片、二进制文件等都是普通文件。目录、设备文件、符号链接等不是普通文件。

比 [FileSystem.Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Exists) 更精确——`Exists` 对文件和目录都返回 `true`，而 `isFile()` 只对普通文件返回 `true`。

与 [| isDirectory()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isDirectory) 互斥——一个路径不会同时是文件和目录。但两者可以同时返回 `false`（例如路径指向设备文件时）。

## 示例

```javascript
/* 精确判断文件是否存在 */
var stats = FileSystem.stat("C:\\config.ini")
if (stats && stats.isFile()) {
  Console.log("配置文件存在")
}
```

```javascript
/* 只处理目录中的文件，跳过子目录 */
var items = FileSystem.readdirSync("C:\\data")
if (items) {
  for (var i = 0; i < items.length; i++) {
    var s = FileSystem.stat("C:\\data\\" + items[i])
    if (s && s.isFile()) {
      Console.log("文件: " + items[i] + ", 大小: " + s.size)
    }
  }
}
```
