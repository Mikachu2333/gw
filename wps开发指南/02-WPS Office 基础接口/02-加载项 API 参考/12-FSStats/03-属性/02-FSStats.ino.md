# FSStats.ino

文件的索引节点（inode）编号。

## 语法

express.**ino**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

文件在其所在文件系统中的唯一标识编号。同一文件系统内的每个文件和目录都有不同的 `ino` 值。但不同设备上的文件可能有相同的 `ino`——因此在判断两个路径是否指向同一物理文件时，必须同时比较 [| dev](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/dev) 和 `ino`。

硬链接是指向同一文件的多个路径。如果两个路径是硬链接关系，它们的 `dev` 和 `ino` 都相同。

在 Windows 上，此值对应文件系统内部的文件索引号。FAT/FAT32 文件系统上此值可能不可靠。

## 示例

```javascript
/* 检测硬链接 */
var stats1 = FileSystem.stat("C:\\data\\original.txt")
var stats2 = FileSystem.stat("C:\\data\\link.txt")
if (stats1 && stats2) {
  if (stats1.dev === stats2.dev && stats1.ino === stats2.ino) {
    Console.log("这两个路径是同一文件的硬链接")
  }
}
```
