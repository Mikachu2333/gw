# FSStats.birthtime

文件的创建时间，秒级 UNIX 时间戳。

## 语法

express.**birthtime**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

记录文件首次被创建的时间，创建后永不改变。不要与 [| ctime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctime)（状态更改时间）混淆——`birthtime` 是真正的创建时间，而 `ctime` 是元数据最后一次被修改的时间。`birthtime ≤ ctime` 始终成立。

与 [| birthtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/birthtimeMs) 记录同一时刻，但精度为秒级（整数）。Windows 和 macOS 完整支持此属性。在部分 Linux 系统上，文件系统或内核版本可能不支持创建时间——libuv 无法获取时此值可能为 0 或与 ctime 相同，使用前应检查值是否合理。支持创建时间的 Linux 文件系统包括 ext4（内核 4.x+）、Btrfs 和 XFS。

注意复制文件会创建新的 birthtime（复制发生的时间），不保留原文件的创建时间。32 位有符号整数在 2038 年溢出——2038 年之前创建的文件 `birthtime` 始终有效，之后创建的文件需要使用 `birthtimeMs`。

## 示例

```javascript
/* 计算文件存在的天数 */
var stats = FileSystem.stat("C:\\data\\project.xlsx")
if (stats) {
  var nowSec = Math.floor(new Date().getTime() / 1000)
  var ageDays = Math.floor((nowSec - stats.birthtime) / (24 * 60 * 60))
  Console.log("文件已创建 " + ageDays + " 天")
}
```

```javascript
/* 区分新创建文件和旧修改文件 */
var stats = FileSystem.stat(path)
if (stats) {
  if (stats.mtime - stats.birthtime < 60) {
    Console.log("文件刚创建不久（mtime 与 birthtime 相差不到 1 分钟）")
  } else {
    Console.log("文件已存在较久，创建后经历过修改")
  }
}
```
