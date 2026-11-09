# FSStats.nlink

指向此文件的硬链接数量。

## 语法

express.**nlink**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

对于普通文件，初始值为 1。每创建一个硬链接，此值增加 1。当值为 1 时，删除文件会释放其数据；当值大于 1 时，删除一个路径只减少链接计数，文件数据在所有链接都被删除后才会释放。

对于目录，此值至少为 2（自身的 `.` 和父目录中的条目），每个直接子目录会额外增加 1。

在 Windows 上，NTFS 支持硬链接，`nlink` 反映实际链接数；FAT/FAT32 不支持硬链接，此值始终为 1。

## 示例

```javascript
/* 检查文件是否有多个硬链接 */
var stats = FileSystem.stat("C:\\data\\shared.dat")
if (stats) {
  if (stats.nlink > 1) {
    Console.log("文件有 " + stats.nlink + " 个硬链接，删除此路径不会丢失数据")
  }
}
```
