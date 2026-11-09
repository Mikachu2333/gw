# FSStats.dev

包含此文件的设备编号。

## 语法

express.**dev**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

标识文件所在的存储设备或卷。同一磁盘分区（或挂载点）上的所有文件具有相同的 `dev` 值，不同分区或外部存储设备上的文件则具有不同的 `dev` 值。在 Windows 上对应逻辑卷（如 C:、D:）的卷序列号；在 Linux/macOS 上对应挂载点的设备编号。

常与 [| ino](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/ino) 配合使用——`dev` + `ino` 的组合可以唯一标识系统中的一个文件。当需要判断两个路径是否指向同一个物理文件时，需要同时比较这两个值。

## 示例

```javascript
/* 判断两个路径是否在同一设备上 */
var stats1 = FileSystem.stat("C:\\data\\file1.txt")
var stats2 = FileSystem.stat("D:\\backup\\file2.txt")
if (stats1 && stats2) {
  if (stats1.dev === stats2.dev) {
    Console.log("同一设备，可以直接移动")
  } else {
    Console.log("不同设备，需要复制后删除")
  }
}
```

```javascript
/* 判断两个路径是否指向同一文件 */
var stats1 = FileSystem.stat(path1)
var stats2 = FileSystem.stat(path2)
if (stats1 && stats2) {
  if (stats1.dev === stats2.dev && stats1.ino === stats2.ino) {
    Console.log("两个路径指向同一个文件")
  }
}
```
