# FSStats.mtimeMs

文件内容最后被修改的时间，毫秒级 UNIX 时间戳。

## 语法

express.**mtimeMs**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

记录文件内容最后一次被写入或修改的时间。与 [| atimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/atimeMs) 不同，`mtimeMs` 在所有平台上行为一致——任何写入文件内容的操作都会更新此值。这使得 `mtimeMs` 成为判断文件是否被修改的最可靠依据。

仅修改文件权限或所有者等元数据不会更新 `mtimeMs`（但会更新 [| ctimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctimeMs)）。

与 [FileDateTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/FileDateTime) 描述相同信息但格式不同——`FileDateTime` 返回本地时间的 Date 对象，`mtimeMs` 返回 UTC 毫秒时间戳。

## 示例

```javascript
/* 检查文件是否在今天被修改 */
var stats = FileSystem.stat("C:\\data\\log.txt")
if (stats) {
  var now = new Date().getTime()
  var oneDayMs = 24 * 60 * 60 * 1000
  if (now - stats.mtimeMs < oneDayMs) {
    Console.log("文件在24小时内被修改过")
  }
}
```

```javascript
/* 找出最近修改的文件 */
var files = FileSystem.readdirSync("C:\\data")
var latest = ""
var latestTime = 0
if (files) {
  for (var i = 0; i < files.length; i++) {
    var s = FileSystem.stat("C:\\data\\" + files[i])
    if (s && s.isFile() && s.mtimeMs > latestTime) {
      latestTime = s.mtimeMs
      latest = files[i]
    }
  }
  Console.log("最近修改的文件: " + latest)
}
```
