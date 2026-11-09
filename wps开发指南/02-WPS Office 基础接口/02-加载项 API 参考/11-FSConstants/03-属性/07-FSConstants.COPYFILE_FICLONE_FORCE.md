# FSConstants.COPYFILE_FICLONE_FORCE

复制标志：强制使用 Copy-on-Write（CoW）克隆复制文件，不支持时操作失败。

## 语法

express.**COPYFILE_FICLONE_FORCE**

express   一个代表 **FSConstants** 对象的变量。

## 类型

number，只读。

## 说明

值为 4（来自 libuv 的 `UV_FS_COPYFILE_FICLONE_FORCE`）。用作 [FileSystem.copyFileSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/copyFileSync) 第三个参数 `flags` 的值或组成部分。与 [| COPYFILE_FICLONE](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/COPYFILE_FICLONE) 的核心区别：当文件系统不支持 CoW 克隆时，FICLONE_FORCE 不会退回到普通复制，而是直接让操作失败（`copyFileSync` 返回 `false`）。

适用于明确需要 CoW 语义的场景——例如希望保证"复制"不占用额外磁盘空间、不消耗 I/O 带宽。如果 CoW 不可用，宁可失败也不要执行耗时的物理复制。在 Windows（NTFS 不支持 CoW）上使用此标志，`copyFileSync` 将始终返回 `false`。在 Linux ext4 上同样。只有在 Btrfs、XFS（reflink）或 macOS APFS 上才有可能成功。

对应 Node.js `fs.constants.COPYFILE_FICLONE_FORCE`。

## 示例

```javascript
/* 仅当 CoW 可用时复制 */
var ok = FileSystem.copyFileSync(
  src, dest,
  FileSystem.constants.COPYFILE_FICLONE_FORCE
)
if (!ok) {
  Console.log("CoW 克隆不可用，未执行复制")
}
```
