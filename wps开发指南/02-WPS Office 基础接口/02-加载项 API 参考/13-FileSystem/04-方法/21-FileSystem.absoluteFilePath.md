# FileSystem.absoluteFilePath

将路径解析为包含文件名的绝对路径。

## 语法

```typescript
function absoluteFilePath(path: string): string
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要解析的文件路径（可以是相对路径或绝对路径）。 |

## 返回值

解析后的绝对路径，包含文件名。

## 说明

如果传入相对路径，会相对于应用程序当前工作目录解析为绝对路径。
路径中的 `.` 和 `..` 会被解析——例如 `C:\a\b\..\c\file.txt` 解析为 `C:\a\c\file.txt`。

不检查路径是否实际存在，纯字符串层面的路径解析。

与 [FileSystem.absolutePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/absolutePath) 的区别：`absoluteFilePath` 返回包含文件名的完整路径，
而 `absolutePath` 只返回目录部分，不含文件名。

## 示例

```javascript
/* 解析相对路径 */
var absPath = FileSystem.absoluteFilePath("data\\file.txt")
Console.log(absPath)
```

```javascript
/* 解析含 .. 的路径 */
var absPath = FileSystem.absoluteFilePath("C:\\a\\b\\..\\c\\file.txt")
Console.log(absPath)
```
