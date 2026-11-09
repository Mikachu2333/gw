# FSConstants.R_OK

文件访问常量：测试文件是否有读权限。

## 语法

express.**R_OK**

express   一个代表 **FSConstants** 对象的变量。

## 类型

number，只读。

## 说明

值为 4（来自 POSIX `<unistd.h>` 中的 `R_OK`）。在 POSIX 标准中用于 `access(path, R_OK)` 系统调用。在 Linux/macOS 上检查调用进程的 real UID/GID 是否对文件有读权限（基于 POSIX 权限位 `r--`）。在 Windows 上行为有差异——MSVC 的 `_access()` 检查文件是否存在且非只读，但不考虑 ACL 权限。

可与其他 access 常量通过按位或组合：`R_OK | W_OK`（值 6）同时检查读和写权限，`R_OK | W_OK | X_OK`（值 7）检查所有权限。

注意：WPS 当前未提供 `accessSync` 方法，此常量目前无法实际使用。对应 Node.js `fs.constants.R_OK`。
