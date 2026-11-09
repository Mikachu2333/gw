# FSStats.isBlockDevice

判断是否为块设备文件。

## 语法

```typescript
isBlockDevice(): boolean
```

express   一个代表 **FSStats** 对象的变量。

## 返回值

是块设备返回 `true`，否则返回 `false`。

## 说明

块设备是支持随机访问的存储设备，在 Linux/macOS 上表现为特殊的设备文件（如 `/dev/sda` 代表磁盘）。普通文件和目录不是块设备。

在 Windows 上始终返回 `false`——Windows 不使用设备文件的概念。

在 WPS 宏的典型使用场景中，此方法几乎不会返回 `true`。要判断常见的文件类型，请使用 [| isFile()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isFile) 或 [| isDirectory()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isDirectory)。

## 示例

```javascript
/* 检查路径的文件类型 */
var stats = FileSystem.stat(path)
if (stats) {
  if (stats.isFile()) {
    Console.log("普通文件")
  } else if (stats.isDirectory()) {
    Console.log("目录")
  } else if (stats.isBlockDevice()) {
    Console.log("块设备")
  }
}
```
