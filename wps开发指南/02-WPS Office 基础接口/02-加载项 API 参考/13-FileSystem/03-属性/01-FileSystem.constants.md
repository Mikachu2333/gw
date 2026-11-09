# FileSystem.constants

文件系统常量对象，提供 [FileSystem.copyFileSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/copyFileSync) 等方法使用的标志常量。

## 语法

express.**constants**

express   一个代表 **FileSystem** 对象的变量。

## 类型

FSConstants，只读。

## 说明

对应 Node.js 的 `fs.constants`，包含两组常量：

复制标志常量（用于 `copyFileSync` 的 `flags` 参数）：
- `COPYFILE_EXCL`：目标文件已存在时复制失败，不覆盖。
- `COPYFILE_FICLONE`：尽可能使用 copy-on-write 克隆。
- `COPYFILE_FICLONE_FORCE`：强制使用 copy-on-write，不支持时失败。

文件访问权限常量：
- `F_OK`：检查文件是否存在。
- `R_OK`：检查文件是否可读。
- `W_OK`：检查文件是否可写。
- `X_OK`：检查文件是否可执行。

## 示例

```javascript
/* 使用复制标志 */
var ok = FileSystem.copyFileSync(
  "C:\\source\\data.txt",
  "C:\\dest\\data.txt",
  FileSystem.constants.COPYFILE_EXCL
)
```
