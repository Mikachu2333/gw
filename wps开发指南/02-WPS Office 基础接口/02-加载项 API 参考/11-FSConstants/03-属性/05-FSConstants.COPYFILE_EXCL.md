# FSConstants.COPYFILE_EXCL

复制标志：如果目标文件已存在，复制操作将失败。

## 语法

express.**COPYFILE_EXCL**

express   一个代表 **FSConstants** 对象的变量。

## 类型

number，只读。

## 说明

值为 1（来自 libuv 的 `UV_FS_COPYFILE_EXCL`）。用作 [FileSystem.copyFileSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/copyFileSync) 第三个参数 `flags` 的值或组成部分。当指定此标志时，如果目标路径已存在文件，`copyFileSync` 不会覆盖而是直接返回 `false`——这防止了意外覆盖已有文件。

不指定此标志（即 `flags` 为 0 或不传第三个参数）时，`copyFileSync` 默认行为是覆盖已有的目标文件。此常量可与其他 COPYFILE_* 常量通过按位或组合：`COPYFILE_EXCL | COPYFILE_FICLONE`（值 3）表示"不覆盖 + 尝试 CoW 克隆"，`COPYFILE_EXCL | COPYFILE_FICLONE_FORCE`（值 5）表示"不覆盖 + 强制 CoW"。

对应 Node.js `fs.constants.COPYFILE_EXCL`。

## 示例

```javascript
/* 安全复制——不覆盖已有文件 */
var ok = FileSystem.copyFileSync(
  "C:\\templates\\report.xlsx",
  "C:\\output\\report.xlsx",
  FileSystem.constants.COPYFILE_EXCL
)
if (!ok) {
  Console.log("目标文件已存在，复制被取消")
}
```
