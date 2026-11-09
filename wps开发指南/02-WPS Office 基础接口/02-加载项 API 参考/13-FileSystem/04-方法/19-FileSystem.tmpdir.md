# FileSystem.tmpdir

获取操作系统的临时目录路径。

## 语法

```typescript
function tmpdir(): string
```

express   一个代表 **FileSystem** 对象的变量。

## 返回值

系统临时目录的路径。

## 说明

对应 Node.js 的 `os.tmpdir()`。返回的路径不带尾部路径分隔符，
在拼接子路径时需要自己添加分隔符。

各平台的典型返回值：
- Windows：`C:\Users\{user}\AppData\Local\Temp`（即 `%TEMP%` 的值）
- Linux：`/tmp`
- macOS：`/var/folders/...` 下的某个路径

通常与 [FileSystem.mkdtempSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/mkdtempSync) 配合使用，在系统临时目录下创建唯一的工作目录。

## 示例

```javascript
/* 获取临时目录路径 */
var tmp = FileSystem.tmpdir()
Console.log("临时目录：" + tmp)
```

```javascript
/* 在临时目录创建文件 */
var tmpFile = FileSystem.tmpdir() + "\\myapp_cache.txt"
FileSystem.WriteFile(tmpFile, "缓存数据")
```

```javascript
/* 创建唯一的临时工作目录 */
var workDir = FileSystem.mkdtempSync(FileSystem.tmpdir() + "\\myapp-")
Console.log("工作目录：" + workDir)
```
