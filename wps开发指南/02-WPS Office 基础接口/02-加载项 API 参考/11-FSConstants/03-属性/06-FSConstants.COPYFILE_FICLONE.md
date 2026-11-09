# FSConstants.COPYFILE_FICLONE

复制标志：尝试使用 Copy-on-Write（CoW）克隆复制文件，不支持时退回普通复制。

## 语法

express.**COPYFILE_FICLONE**

express   一个代表 **FSConstants** 对象的变量。

## 类型

number，只读。

## 说明

值为 2（来自 libuv 的 `UV_FS_COPYFILE_FICLONE`）。用作 [FileSystem.copyFileSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/copyFileSync) 第三个参数 `flags` 的值或组成部分。当指定此标志时，libuv 会先尝试使用文件系统级别的 CoW 克隆来复制文件——CoW 克隆不实际复制文件数据，而是让源文件和克隆文件共享底层数据块，只有当其中一个文件被修改时才真正复制被修改的数据块。这使得克隆操作几乎瞬时完成且不占用额外磁盘空间（直到数据被修改）。

如果文件系统不支持 CoW（如 NTFS、ext4），操作会自动退回到逐字节的普通复制——复制仍然成功，只是速度与不指定此标志时相同。支持 CoW 克隆的文件系统包括 Linux 上的 Btrfs 和 XFS（reflink）以及 macOS 上的 APFS。与 [| COPYFILE_FICLONE_FORCE](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSConstants/member/COPYFILE_FICLONE_FORCE) 的区别：FICLONE 是"最佳努力"策略（始终成功），FICLONE_FORCE 是"全有或全无"策略（不支持 CoW 则操作失败）。

对应 Node.js `fs.constants.COPYFILE_FICLONE`。

## 示例

```javascript
/* 尝试 CoW 克隆大文件 */
var ok = FileSystem.copyFileSync(
  "C:\\data\\large_dataset.xlsx",
  "C:\\backup\\large_dataset.xlsx",
  FileSystem.constants.COPYFILE_FICLONE
)
```
