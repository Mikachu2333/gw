# FSStats.size

文件的大小（字节数）。

## 语法

express.**size**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

对于普通文件，返回文件内容的字节数。对于目录，返回目录元数据占用的空间大小，不等于目录中所有文件的总大小。

注意：由于内部以 32 位整数存储，超过约 2 GB 的文件返回值不准确——2 GB ~ 4 GB 范围内返回负数，超过 4 GB 返回不相关的值。如果需要处理大文件，应使用 [FileLen](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/FileLen) 或其他方式获取文件大小。

与 [LOF](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/LOF) 不同，不需要先打开文件就能获取大小。

## 示例

```javascript
/* 检查文件大小 */
var stats = FileSystem.stat("C:\\data\\report.xlsx")
if (stats) {
  Console.log("文件大小: " + stats.size + " 字节")
}
```

```javascript
/* 检查文件是否为空 */
var stats = FileSystem.stat(path)
if (stats && stats.size === 0) {
  Console.log("文件为空")
}
```

```javascript
/* 批量检查前先判断大小 */
var stats = FileSystem.stat("C:\\data\\large.csv")
if (stats && stats.size > 10 * 1024 * 1024) {
  Console.log("文件超过 10 MB，处理可能较慢")
}
```
