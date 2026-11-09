# FSStats.uid

文件所有者的用户 ID。

## 语法

express.**uid**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

在 Linux/macOS 上，表示文件所有者的数字用户标识。与 [| mode](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mode) 中的所有者权限位配合，决定文件所有者对文件的读/写/执行权限。root 用户的 `uid` 为 0。

在 Windows 上此值始终为 0——Windows 使用不同的权限管理机制，不映射到 POSIX 用户 ID。

## 示例

```javascript
/* 检查文件所有者 */
var stats = FileSystem.stat("/home/user/document.txt")
if (stats) {
  Console.log("文件所有者 uid: " + stats.uid)
  if (stats.uid === 0) {
    Console.log("文件属于 root 用户")
  }
}
```
