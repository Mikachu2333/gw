# FSStats.gid

文件所属用户组的组 ID。

## 语法

express.**gid**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

在 Linux/macOS 上，表示文件所属用户组的数字标识。与 [| mode](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/mode) 中的组权限位配合，决定组成员对文件的读/写/执行权限。当前进程的用户属于该组时，适用组权限位。

与 [| uid](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/uid) 共同构成文件所有权信息——`uid` 决定所有者权限适用于谁，`gid` 决定组权限适用于谁。

在 Windows 上此值始终为 0——Windows 使用 ACL 和 SID 进行权限管理，不映射到 POSIX 组 ID。

## 示例

```javascript
/* 检查文件的所有权信息 */
var stats = FileSystem.stat("/shared/project/data.csv")
if (stats) {
  Console.log("所有者 uid: " + stats.uid + ", 组 gid: " + stats.gid)
}
```
