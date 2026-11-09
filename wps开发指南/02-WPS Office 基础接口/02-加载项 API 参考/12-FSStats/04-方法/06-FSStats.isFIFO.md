# FSStats.isFIFO

判断是否为 FIFO（命名管道）文件。

## 语法

```typescript
isFIFO(): boolean
```

express   一个代表 **FSStats** 对象的变量。

## 返回值

是 FIFO（命名管道）返回 `true`，否则返回 `false`。

## 说明

FIFO（First In, First Out）也称命名管道（named pipe），是 POSIX 系统上的一种进程间通信（IPC）机制。与 shell 中 `|` 操作符创建的匿名管道不同，FIFO 在文件系统中有一个可见的路径名（如 `/tmp/myfifo`），任何知道该路径的进程都可以打开它进行读写——这使得不相关的进程也能通过 FIFO 通信。FIFO 中的数据按写入顺序被读取（先进先出），不支持随机访问；打开 FIFO 进行读取时会阻塞直到有进程写入，这意味着在 WPS 宏中读取一个没有写入端的 FIFO 会导致脚本挂起。

与 [| isSocket()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isSocket) 的核心区别：FIFO 是单向数据流（半双工），适合简单的生产者-消费者模式；UNIX Domain Socket 支持双向通信（全双工）、多客户端同时连接和文件描述符传递，适合客户端-服务器架构。两者都在文件系统中以路径名存在，但用途和能力有本质差异。

实现上使用 `#ifdef S_IFIFO` 条件编译保护——`S_IFIFO` 在 POSIX 系统上始终有定义，但在某些 Windows 编译环境中可能缺失，此时直接返回 `false`。这与 [| isBlockDevice()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isBlockDevice) 和 [| isSocket()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isSocket) 采用相同的条件编译模式，而 [| isCharacterDevice()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isCharacterDevice) 没有条件编译。

在 Windows 上始终返回 `false`——Windows 有自己的命名管道机制（`\\.\pipe\PipeName` 格式），但它不在标准文件系统路径中，[FileSystem.stat](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/stat) 无法访问。即使 `S_IFIFO` 在编译时已定义，实际上也不可能通过 `stat` 获取到 FIFO 标志。

## 示例

```javascript
/* 遍历目录时跳过 FIFO 文件（避免阻塞） */
var items = FileSystem.readdirSync("/tmp")
if (items) {
  for (var i = 0; i < items.length; i++) {
    var s = FileSystem.stat("/tmp/" + items[i])
    if (s && s.isFIFO()) {
      Console.log("跳过 FIFO: " + items[i])
      continue
    }
    if (s && s.isFile()) {
      Console.log("普通文件: " + items[i])
    }
  }
}
```

```javascript
/* 完整的文件类型判断 */
var stats = FileSystem.stat(path)
if (stats) {
  if (stats.isFile()) Console.log("普通文件")
  else if (stats.isDirectory()) Console.log("目录")
  else if (stats.isBlockDevice()) Console.log("块设备")
  else if (stats.isCharacterDevice()) Console.log("字符设备")
  else if (stats.isFIFO()) Console.log("命名管道 (FIFO)")
  else if (stats.isSocket()) Console.log("UNIX 套接字")
}
```
