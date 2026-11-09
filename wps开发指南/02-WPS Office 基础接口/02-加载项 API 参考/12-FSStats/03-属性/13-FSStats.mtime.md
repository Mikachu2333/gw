# FSStats.mtime

文件内容最后被修改的时间，秒级 UNIX 时间戳。

## 语法

express.**mtime**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

返回从 1970-01-01 00:00:00 UTC 起经过的整秒数。与 [| mtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtimeMs) 记录同一时刻，但精度为秒级（整数），丢弃毫秒以下部分——`mtimeMs ≈ mtime * 1000`。

`mtime` 是 FSStats 四个时间属性中跨平台行为最一致的：所有平台上只要文件内容被修改就一定更新此值，不像 [| atime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/atime) 受 Linux `relatime` 挂载策略或 Windows NTFS 禁用访问时间更新的影响，也不像 [| birthtime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/birthtime) 在部分 Linux 系统上不可靠。仅修改文件权限或所有者不会更新 `mtime`（但会更新 [| ctime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctime)）。

32 位有符号整数在 2038-01-19 03:14:07 UTC 溢出（Y2038 问题）。2038 年之前修改的文件完全可靠，之后修改的文件将溢出为负数。需要长期兼容的代码应使用 [| mtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtimeMs)。与 Node.js 行为不同：Node.js 的 `mtime` 返回 Date 对象，WPS 返回整数时间戳，需要 `new Date(stats.mtime * 1000)` 或 `new Date(stats.mtimeMs)` 转换。

与 VBA 风格的 [FileDateTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/FileDateTime) 描述同一信息但格式不同——`FileDateTime` 返回本地时间的 Date 值，`mtime` 返回 UTC 秒级时间戳。

## 示例

```javascript
/* 检测文件是否在指定时间后被修改 */
var stats = FileSystem.stat("C:\\data\\config.ini")
if (stats) {
  var cutoff = Math.floor(new Date(2025, 0, 1).getTime() / 1000)
  if (stats.mtime > cutoff) {
    Console.log("文件在 2025 年后被修改过")
  }
}
```

```javascript
/* 按修改时间排序文件 */
var files = FileSystem.readdirSync("C:\\data")
if (files) {
  var items = []
  for (var i = 0; i < files.length; i++) {
    var s = FileSystem.stat("C:\\data\\" + files[i])
    if (s && s.isFile()) {
      items.push({ name: files[i], mtime: s.mtime })
    }
  }
  items.sort(function(a, b) { return b.mtime - a.mtime })
  Console.log("最近修改: " + items[0].name)
}
```
