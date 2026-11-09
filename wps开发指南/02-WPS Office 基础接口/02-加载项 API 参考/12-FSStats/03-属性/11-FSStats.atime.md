# FSStats.atime

文件最后被访问（读取）的时间，秒级 UNIX 时间戳。

## 语法

express.**atime**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

返回从 1970-01-01 00:00:00 UTC 起经过的整秒数。与 [| atimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/atimeMs) 记录同一时刻，但精度为秒级（整数），丢弃了毫秒以下部分——`atimeMs ≈ atime * 1000`。秒级整数的优势在于可以直接用 `===` 比较，不存在浮点精度问题。

注意 32 位有符号整数的上限约 21.47 亿，对应 2038-01-19 03:14:07 UTC——超过此时间后 `atime` 会溢出变为负数（Y2038 问题），而 [| atimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/atimeMs) 使用 double 不受此限制。如果代码需要在 2038 年后仍然正确工作，应优先使用 `atimeMs`。

与 Node.js 行为不同：Node.js 的 `fs.Stats.atime` 返回 `Date` 对象，WPS 返回整数时间戳。要获取 Date 对象需手动转换：`new Date(stats.atimeMs)` 或 `new Date(stats.atime * 1000)`。Node.js 的 `atimeMs` 返回 number 类型，这与 WPS 的 `atimeMs` 行为一致。

atime 的实际更新行为因平台差异显著：Linux 默认使用 `relatime` 策略（仅在 atime 早于 mtime 时或距上次更新超过 24 小时才更新），Windows NTFS 默认完全禁用最后访问时间更新。因此在跨平台代码中，`atime` 不能作为"文件是否最近被读过"的可靠判据——如需判断文件是否被修改，应使用 [| mtime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtime) 或 [| mtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtimeMs)。

## 示例

```javascript
/* 将时间戳转换为可读日期 */
var stats = FileSystem.stat("C:\\data\\report.xlsx")
if (stats) {
  var date = new Date(stats.atime * 1000)
  Console.log("最后访问: " + date.toString())
}
```

```javascript
/* 比较两个文件的访问时间（秒级精度足够时） */
var s1 = FileSystem.stat(path1)
var s2 = FileSystem.stat(path2)
if (s1 && s2) {
  if (s1.atime === s2.atime) {
    Console.log("两个文件在同一秒内被访问")
  }
}
```
