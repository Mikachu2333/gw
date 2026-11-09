# FSStats.ctimeMs

文件状态（元数据）最后被更改的时间，毫秒级 UNIX 时间戳。

## 语法

express.**ctimeMs**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

注意 `ctimeMs` 是"状态更改时间"（change time），不是"创建时间"——创建时间由 [| birthtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/birthtimeMs) 表示。

不仅在文件内容修改时更新（同时也会更新 [| mtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtimeMs)），还在文件权限、所有者等元数据被修改时更新。因此 `ctimeMs` 始终大于或等于 `mtimeMs`——当两者不相等时，说明文件的元数据在内容之后被单独修改过。

在 Windows 上，`ctimeMs` 与 `mtimeMs` 通常返回相同的值——Windows 没有单独的"状态更改时间"概念。

## 示例

```javascript
/* 检测文件元数据是否被修改 */
var stats = FileSystem.stat("C:\\data\\sensitive.dat")
if (stats) {
  if (stats.ctimeMs > stats.mtimeMs) {
    Console.log("文件权限在内容修改之后被更改过")
  }
}
```
