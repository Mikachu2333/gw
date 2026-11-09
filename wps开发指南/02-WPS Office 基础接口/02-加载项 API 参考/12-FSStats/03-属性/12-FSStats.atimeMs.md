# FSStats.atimeMs

文件最后被访问（读取）的时间，毫秒级 UNIX 时间戳。

## 语法

express.**atimeMs**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

记录文件内容最后一次被读取的时间，以毫秒为单位的 UNIX 时间戳（从 1970-01-01 00:00:00 UTC 起的毫秒数）。

实际更新行为因操作系统而异：Linux 默认使用 `relatime` 策略，不一定每次读取都更新此值；Windows（NTFS）默认禁用访问时间更新。因此在跨平台场景中，`atimeMs` 可能不能准确反映最近的访问时间。

与 [| atime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/atime) 的区别：`atimeMs` 返回毫秒精度的浮点数，`atime` 返回秒精度的整数。

## 示例

```javascript
/* 检查文件最后访问时间 */
var stats = FileSystem.stat("C:\\data\\config.ini")
if (stats) {
  var date = new Date(stats.atimeMs)
  Console.log("最后访问: " + date.toString())
}
```

```javascript
/* 比较两个文件的访问时间 */
var s1 = FileSystem.stat(path1)
var s2 = FileSystem.stat(path2)
if (s1 && s2) {
  if (s1.atimeMs > s2.atimeMs) {
    Console.log(path1 + " 更近被访问")
  }
}
```
