# FileSystem.absolutePath

将路径解析为不含文件名的绝对目录路径。

## 语法

```typescript
function absolutePath(path: string): string
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要解析的文件路径（可以是相对路径或绝对路径）。 |

## 返回值

解析后的绝对目录路径，不含文件名。

## 说明

如果传入相对路径，会相对于应用程序当前工作目录解析为绝对路径，然后去掉文件名部分只保留目录。
路径中的 `.` 和 `..` 会被解析。不检查路径是否实际存在。

与 [FileSystem.absoluteFilePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/absoluteFilePath) 的区别：`absoluteFilePath` 返回包含文件名的完整路径，
而 `absolutePath` 只返回目录部分。

## 示例

```javascript
/* 获取文件所在目录 */
var dir = FileSystem.absolutePath("C:\\workspace\\data\\file.txt")
Console.log(dir)
```

```javascript
/* 解析相对路径获取目录 */
var dir = FileSystem.absolutePath("data\\file.txt")
Console.log(dir)
```
