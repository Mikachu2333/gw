# FSStats.rdev

设备文件的设备类型标识。

## 语法

express.**rdev**

express   一个代表 **FSStats** 对象的变量。

## 类型

number，只读。

## 说明

仅对设备文件（块设备或字符设备）有意义——可通过 [| isBlockDevice()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isBlockDevice) 和 [| isCharacterDevice()](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/isCharacterDevice) 判断。对于普通文件和目录，此值为 0。

与 [| dev](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FSStats/member/dev) 的区别：`dev` 标识的是"文件存储在哪个设备上"，`rdev` 标识的是"设备文件自身代表哪个设备"。

在 Windows 上此值始终为 0——Windows 不使用设备文件的概念。

## 示例

```javascript
/* 检查设备文件信息 */
var stats = FileSystem.stat("/dev/sda1")
if (stats && stats.isBlockDevice()) {
  Console.log("设备编号: " + stats.rdev)
}
```
