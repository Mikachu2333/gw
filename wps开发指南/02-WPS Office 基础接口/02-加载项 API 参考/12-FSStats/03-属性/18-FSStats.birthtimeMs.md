# FSStats.birthtimeMs

文件的创建时间，毫秒级 UNIX 时间戳。

## 语法

express.**birthtimeMs**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

记录文件首次被创建的时间，创建后不再改变。不要与 [| ctimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctimeMs)（状态更改时间）混淆——`birthtimeMs` 是真正的创建时间，而 `ctimeMs` 是元数据最后一次被修改的时间。

Windows 和 macOS 完整支持此属性。在部分 Linux 系统上，文件系统或内核版本可能不支持创建时间，此时返回值可能不准确（可能与 `ctimeMs` 相同或为 0）。

## 示例

```javascript
/* 计算文件存在的天数 */
var stats = FileSystem.stat("C:\\data\\project.xlsx")
if (stats) {
  var ageMs = new Date().getTime() - stats.birthtimeMs
  var ageDays = Math.floor(ageMs / (24 * 60 * 60 * 1000))
  Console.log("文件已创建 " + ageDays + " 天")
}
```

```javascript
/* 清理过期临时文件 */
var files = FileSystem.readdirSync("C:\\temp")
var now = new Date().getTime()
var maxAge = 7 * 24 * 60 * 60 * 1000
if (files) {
  for (var i = 0; i < files.length; i++) {
    var s = FileSystem.stat("C:\\temp\\" + files[i])
    if (s && s.isFile() && (now - s.birthtimeMs > maxAge)) {
      FileSystem.unlinkSync("C:\\temp\\" + files[i])
    }
  }
}
```
