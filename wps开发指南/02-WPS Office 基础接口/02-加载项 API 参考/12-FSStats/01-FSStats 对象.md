# FSStats 对象

文件或目录的状态信息对象。

## 说明

通过 [FileSystem.stat](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/stat) 获取。对象记录的是调用 `stat` 那一刻的文件状态快照——获取后即使文件发生变化，对象中的值也不会更新。

包含三类信息：文件系统元数据（[| dev](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/dev)、[| ino](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ino)、[| mode](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mode)、[| size](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/size) 等）、时间戳（[| atimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/atimeMs)、[| mtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtimeMs)、[| ctimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctimeMs)、[| birthtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/birthtimeMs) 等）、类型判断方法（[| isFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isFile)、[| isDirectory](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isDirectory) 等）。

## 示例

```javascript
/* 获取文件大小和修改时间 */
var stats = FileSystem.stat("C:\\data\\report.xlsx")
if (stats) {
  Console.log("大小：" + stats.size + " 字节")
  Console.log("修改时间：" + stats.mtimeMs)
}
```

```javascript
/* 判断路径是文件还是目录 */
var stats = FileSystem.stat(path)
if (stats) {
  if (stats.isFile()) {
    Console.log("这是一个文件")
  } else if (stats.isDirectory()) {
    Console.log("这是一个目录")
  }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [isBlockDevice](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isBlockDevice) | 判断是否为块设备文件。 |
| [isCharacterDevice](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isCharacterDevice) | 判断是否为字符设备文件。 |
| [isDirectory](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isDirectory) | 判断是否为目录。 |
| [isFIFO](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isFIFO) | 判断是否为 FIFO（命名管道）文件。 |
| [isFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isFile) | 判断是否为普通文件。 |
| [isSocket](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isSocket) | 判断是否为 UNIX 域套接字（Socket）文件。 |
| [isSymbolicLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isSymbolicLink) | 判断是否为符号链接。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [dev](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/dev) | 包含此文件的设备编号。 **number** 类型，只读。 |
| [ino](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ino) | 文件的索引节点（inode）编号。 **number** 类型，只读。 |
| [mode](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mode) | 文件的权限和类型模式位。 **number** 类型，只读。 |
| [nlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/nlink) | 指向此文件的硬链接数量。 **number** 类型，只读。 |
| [uid](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/uid) | 文件所有者的用户 ID。 **number** 类型，只读。 |
| [gid](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/gid) | 文件所属用户组的组 ID。 **number** 类型，只读。 |
| [rdev](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/rdev) | 设备文件的设备类型标识。 **number** 类型，只读。 |
| [size](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/size) | 文件的大小（字节数）。 **number** 类型，只读。 |
| [blksize](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/blksize) | 文件系统 I/O 操作的最优块大小（字节）。 **number** 类型，只读。 |
| [blocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/blocks) | 文件实际分配的 512 字节块数量。 **number** 类型，只读。 |
| [atimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/atimeMs) | 文件最后被访问（读取）的时间，毫秒级 UNIX 时间戳。 **number** 类型，只读。 |
| [mtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtimeMs) | 文件内容最后被修改的时间，毫秒级 UNIX 时间戳。 **number** 类型，只读。 |
| [ctimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctimeMs) | 文件状态（元数据）最后被更改的时间，毫秒级 UNIX 时间戳。 **number** 类型，只读。 |
| [birthtimeMs](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/birthtimeMs) | 文件的创建时间，毫秒级 UNIX 时间戳。 **number** 类型，只读。 |
| [atime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/atime) | 文件最后被访问（读取）的时间，秒级 UNIX 时间戳。 **number** 类型，只读。 |
| [mtime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mtime) | 文件内容最后被修改的时间，秒级 UNIX 时间戳。 **number** 类型，只读。 |
| [ctime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ctime) | 文件状态（元数据）最后被更改的时间，秒级 UNIX 时间戳。 **number** 类型，只读。 |
| [birthtime](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/birthtime) | 文件的创建时间，秒级 UNIX 时间戳。 **number** 类型，只读。 |
