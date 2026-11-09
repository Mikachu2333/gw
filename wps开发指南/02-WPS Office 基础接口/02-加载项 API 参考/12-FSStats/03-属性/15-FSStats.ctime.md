# FSStats.ctime

文件状态（元数据）最后被更改的时间，秒级 UNIX 时间戳。

## 语法

express.**ctime**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

注意 `ctime` 是 "change time"（状态更改时间），不是 "creation time"（创建时间）——创建时间由 [| birthtime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/birthtime) 表示。这是 POSIX 中最容易被误解的时间属性。

与 [| ctimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctimeMs) 记录同一时刻，但精度为秒级（整数），丢弃毫秒以下部分。不仅在文件内容修改时更新（同时也更新 [| mtime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtime)），还在文件权限、所有者等元数据被修改时更新——因此 `ctime ≥ mtime` 始终成立。当 `ctime > mtime` 时，说明文件的元数据在内容最后一次修改之后被单独修改过。

在 Windows 上，`ctime` 与 `mtime` 通常返回相同的值——Windows 没有独立的"状态更改时间"概念，libuv 将其映射为最后写入时间。修改文件 ACL 权限不会更新 Windows 上的 `ctime`，这与 POSIX 行为不同。

32 位有符号整数在 2038 年溢出。在快速连续操作（如 1 秒内先修改内容再修改权限）时，秒级精度可能无法区分先后顺序——此时使用 [| ctimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctimeMs) 和 [| mtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtimeMs) 的毫秒精度更可靠。

## 示例

```javascript
/* 检测文件权限是否在内容修改后被更改 */
var stats = FileSystem.stat("C:\\data\\sensitive.dat")
if (stats) {
  if (stats.ctime > stats.mtime) {
    Console.log("文件权限在内容修改之后被更改过")
  } else {
    Console.log("最后操作是内容修改")
  }
}
```

```javascript
/* 将 ctime 转换为可读日期 */
var stats = FileSystem.stat("C:\\data\\file.txt")
if (stats) {
  var date = new Date(stats.ctime * 1000)
  Console.log("状态更改时间: " + date.toString())
}
```
