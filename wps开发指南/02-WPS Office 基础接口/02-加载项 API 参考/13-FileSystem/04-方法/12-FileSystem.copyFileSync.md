# FileSystem.copyFileSync

同步复制文件。

## 语法

```typescript
function copyFileSync(src: string, dest: string, flags?: number): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| src | 必选 | string | 源文件路径。 |
| dest | 必选 | string | 目标文件路径。 |
| flags | 可选 | number | 可选的复制标志，参见 [FileSystem.constants](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/constants)。 |

## 返回值

复制成功返回 `true`，失败返回 `false`。

## 说明

对应 Node.js 的 `fs.copyFileSync`。

可选的 `flags` 参数控制复制行为，可使用 [FileSystem.constants](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/constants) 中的常量：
- `COPYFILE_EXCL`：如果目标文件已存在则失败，不覆盖。
- `COPYFILE_FICLONE`：尽可能使用 copy-on-write 克隆（某些文件系统支持）。
- `COPYFILE_FICLONE_FORCE`：强制使用 copy-on-write，不支持时失败。

不传 `flags` 时默认为 0，即覆盖已存在的目标文件。

与 VBA 风格的 [FileCopy](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/FileCopy) 不同，`copyFileSync` 支持通过 flags 精确控制覆盖行为。

## 示例

```javascript
/* 复制文件 */
var ok = FileSystem.copyFileSync("C:\\source\\data.txt", "C:\\dest\\data.txt")
Console.log("复制结果：" + ok)
```

```javascript
/* 不覆盖已存在的文件 */
var ok = FileSystem.copyFileSync(
  "C:\\source\\data.txt",
  "C:\\dest\\data.txt",
  FileSystem.constants.COPYFILE_EXCL
)
if (!ok) {
  Console.log("目标文件已存在，复制失败")
}
```
