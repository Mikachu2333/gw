# FSStats.blksize

文件系统 I/O 操作的最优块大小（字节）。

## 语法

express.**blksize**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

文件系统向操作系统报告的高效读写单位——以此大小的整数倍进行 I/O 操作可获得最佳性能，低于此大小的读写请求会被文件系统内部扩展到一个完整的块。典型值为 4096（4 KB），这是 Linux ext4/XFS、macOS APFS 和 Windows NTFS（默认簇大小）上的常见值。NFS 网络挂载可能报告更大的值（如 8192、32768），提示网络 I/O 应使用更大的批量。

注意 `blksize` 与 [| blocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/blocks) 使用不同的块大小单位——`blksize` 通常为 4096 字节，而 `blocks` 始终以 512 字节为单位（POSIX 标准定义）。文件的实际磁盘占用是 `blocks * 512` 而不是 `blocks * blksize`。三个大小相关属性的关系：[| size](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/size) 是文件的逻辑大小，`blocks * 512` 是物理磁盘占用，`blksize` 是文件系统的性能参数。

## 示例

```javascript
/* 查看文件的存储详情 */
var stats = FileSystem.stat("C:\\data\\file.txt")
if (stats) {
  Console.log("逻辑大小: " + stats.size + " 字节")
  Console.log("磁盘占用: " + (stats.blocks * 512) + " 字节")
  Console.log("文件系统块大小: " + stats.blksize + " 字节")
}
```

```javascript
/* 以文件系统块大小为参考设置缓冲区 */
var stats = FileSystem.stat("C:\\data\\large.csv")
if (stats) {
  Console.log("建议缓冲区大小: " + stats.blksize + " 字节")
}
```
