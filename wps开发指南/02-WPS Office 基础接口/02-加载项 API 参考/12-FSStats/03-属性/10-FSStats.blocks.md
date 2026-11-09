# FSStats.blocks

文件实际分配的 512 字节块数量。

## 语法

express.**blocks**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

文件在磁盘上实际占用的空间为 `blocks * 512` 字节。这个值通常大于 [| size](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/size)，因为文件系统按块分配空间，最后一个块可能没有完全使用。例如一个 100 字节的文件在 4 KB 块大小的文件系统上也要占用一个完整的块（`blocks` 为 8）。

如果 `blocks * 512` 远小于 `size`，说明文件可能是稀疏文件——文件中间的全零区域未分配实际磁盘空间。

## 示例

```javascript
/* 计算文件实际磁盘占用 */
var stats = FileSystem.stat("C:\\data\\database.db")
if (stats) {
  var logicalSize = stats.size
  var diskSize = stats.blocks * 512
  Console.log("逻辑大小: " + logicalSize + ", 磁盘占用: " + diskSize)
}
```
