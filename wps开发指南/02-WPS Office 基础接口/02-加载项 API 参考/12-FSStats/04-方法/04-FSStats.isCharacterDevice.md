# FSStats.isCharacterDevice

判断是否为字符设备文件。

## 语法

```typescript
isCharacterDevice(): boolean
```

express   一个代表 **FSStats** 对象的变量。

## 返回值

是字符设备返回 `true`，否则返回 `false`。

## 说明

字符设备是按字节流顺序访问的设备——数据逐字节读写，不支持随机定位。在 Linux/macOS 上常见的字符设备包括 `/dev/null`（丢弃所有写入、读取返回 EOF）、`/dev/zero`（读取返回无限零字节）、`/dev/random`/`/dev/urandom`（随机数生成器）、`/dev/tty`（终端设备）等。

与 [| isBlockDevice()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isBlockDevice) 的核心区别：块设备支持随机访问、数据以固定大小的块传输（如磁盘、USB 存储），字符设备按顺序以字节流传输（如终端、串口）。在实现上 `isCharacterDevice` 没有条件编译（`S_IFCHR` 在所有平台含 Windows MSVC 中都有定义），而 `isBlockDevice`、[| isFIFO()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isFIFO) 和 [| isSocket()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isSocket) 使用了 `#ifdef` 条件编译。

在 Windows 上几乎始终返回 `false`——Windows 的设备文件（如 `NUL`、`CON`、`PRN`）存在于特殊的设备命名空间中，不在标准文件系统路径里，通过 [FileSystem.stat](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/stat) 无法获取到字符设备标志。

## 示例

```javascript
/* 在遍历时跳过设备文件 */
var items = FileSystem.readdirSync("/dev")
if (items) {
  for (var i = 0; i < items.length; i++) {
    var s = FileSystem.stat("/dev/" + items[i])
    if (s && !s.isCharacterDevice() && !s.isBlockDevice()) {
      Console.log("非设备文件: " + items[i])
    }
  }
}
```

```javascript
/* 检查路径的完整文件类型 */
var stats = FileSystem.stat(path)
if (stats) {
  if (stats.isFile()) Console.log("普通文件")
  else if (stats.isDirectory()) Console.log("目录")
  else if (stats.isCharacterDevice()) Console.log("字符设备")
  else if (stats.isBlockDevice()) Console.log("块设备")
}
```
