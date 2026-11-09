# FSStats.mode

文件的权限和类型模式位。

## 语法

express.**mode**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

一个位字段，同时编码了文件类型和访问权限两类信息。

要判断文件类型，建议使用更直观的 [| isFile()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isFile)、[| isDirectory()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isDirectory) 等方法，而非直接操作 `mode` 的位。`mode` 的主要用途是进行权限检查——例如判断文件是否对所有者可执行（`mode & 0o100`）。

权限位遵循 POSIX 约定：高 3 位为所有者权限（读/写/执行），中 3 位为组权限，低 3 位为其他人权限。在 Windows 上权限位是近似值——通常只反映文件的只读属性，不表示完整的用户/组权限模型。

## 示例

```javascript
/* 检查文件是否对所有者可执行 */
var stats = FileSystem.stat("/usr/local/bin/tool")
if (stats && (stats.mode & 0o100)) {
  Console.log("文件可执行")
}
```

```javascript
/* 查看完整模式位 */
var stats = FileSystem.stat("C:\\data\\file.txt")
if (stats) {
  Console.log("mode: " + stats.mode.toString(8))
}
```
