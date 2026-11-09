# FSStats.isSocket

判断是否为 UNIX 域套接字（Socket）文件。

## 语法

```typescript
isSocket(): boolean
```

express   一个代表 **FSStats** 对象的变量。

## 返回值

是 Socket 文件返回 `true`，否则返回 `false`。

## 说明

UNIX Domain Socket（UNIX 域套接字）是 POSIX 系统上的高性能进程间通信（IPC）机制——与 TCP/UDP 网络 Socket 不同，UNIX Socket 只用于同一主机上的进程间通信，数据不经过网络协议栈，在内核内存中直接传递，因此延迟更低、吞吐更高。UNIX Socket 在文件系统中以路径名存在（如 `/var/run/docker.sock`、`/var/run/mysqld/mysqld.sock`），客户端通过路径名连接到服务端——但 Socket 文件本身不存储数据，路径名仅作为寻址手段。

与 [| isFIFO()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isFIFO) 的核心区别：FIFO 是单向（半双工）先进先出管道，适合简单的数据传递；UNIX Socket 支持双向通信（全双工）、多客户端同时连接、传递文件描述符和进程凭据，适合客户端-服务器架构。在实际系统中，Docker、MySQL、X11、D-Bus 等关键服务都使用 UNIX Socket 而非 FIFO。

实现上使用 `#ifdef S_IFSOCK` 条件编译保护——`S_IFSOCK` 在 MSVC 的 `<sys/stat.h>` 中通常不定义（Windows 没有 POSIX 风格的套接字文件概念），此时直接返回 `false`。这与 [| isBlockDevice()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isBlockDevice) 和 [| isFIFO()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isFIFO) 采用相同的条件编译模式。

在 Windows 上始终返回 `false`——Windows 使用 WinSock API 进行 Socket 通信，但 WinSock 不在文件系统中创建特殊文件，Socket 通信通过端口号或命名管道实现。[FileSystem.stat](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/stat) 无法在 Windows 文件系统中遇到 Socket 文件。

注意 `stat` 可以获取 Socket 文件的元数据（权限、所有者等），但不能读取 Socket 的数据——读取数据需要通过 `connect()` 和 `recv()`/`send()` 等专用 Socket API。如果路径是指向 Socket 的符号链接，`stat` 会跟随链接返回 Socket 的信息。

## 示例

```javascript
/* 检查 Docker 守护进程是否运行 */
var stats = FileSystem.stat("/var/run/docker.sock")
if (stats && stats.isSocket()) {
  Console.log("Docker 守护进程正在运行")
} else {
  Console.log("Docker 未运行或不在默认路径")
}
```

```javascript
/* 遍历目录时跳过 Socket 文件 */
var items = FileSystem.readdirSync("/var/run")
if (items) {
  for (var i = 0; i < items.length; i++) {
    var s = FileSystem.stat("/var/run/" + items[i])
    if (s && !s.isSocket() && !s.isFIFO()) {
      Console.log("常规项: " + items[i])
    }
  }
}
```
