# FSConstants.F_OK

文件访问常量：测试文件是否存在。

## 语法

express.**F_OK**

express   一个代表 **FSConstants** 对象的变量。

## 类型

number，只读。

## 说明

值为 0（来自 POSIX `<unistd.h>` 中的 `F_OK`）。在 POSIX 标准中用于 `access(path, F_OK)` 系统调用，仅测试文件是否存在，不检查任何权限。

注意：WPS 当前未提供 `accessSync` 方法，因此此常量目前**无法实际使用**。检查文件是否存在应使用 [FileSystem.existsSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/existsSync)——`existsSync` 内部使用 `stat` 实现，效果等价于 `access(path, F_OK)`。此常量被暴露以保持与 Node.js `fs.constants` 的一致性，并为将来可能的 `accessSync` API 预留。

`F_OK` 的值 0 有特殊的位运算含义：它与任何值按位或都不改变结果——`F_OK | R_OK` 等价于 `R_OK`。这在 POSIX 设计中是有意为之的：F_OK 表示"不检查任何权限"，而 R_OK/W_OK/X_OK 可以组合为"同时检查多个权限"。

对应 Node.js `fs.constants.F_OK`。
