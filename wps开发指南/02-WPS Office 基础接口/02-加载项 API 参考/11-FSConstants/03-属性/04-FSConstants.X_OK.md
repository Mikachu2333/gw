# FSConstants.X_OK

文件访问常量：测试文件是否有执行权限。

## 语法

express.**X_OK**

express   一个代表 **FSConstants** 对象的变量。

## 类型

number，只读。

## 说明

值为 1（来自 POSIX `<unistd.h>` 中的 `X_OK`）。在 POSIX 标准中用于 `access(path, X_OK)` 系统调用。在 Linux/macOS 上检查调用进程是否对文件有执行权限；对于目录，执行权限意味着可以进入目录（`cd` 到该目录或在路径中穿越该目录）——一个没有执行权限的目录即使有读权限也无法列出其内容。

在 Windows 上此常量意义有限——Windows 没有 POSIX 意义上的"执行权限"，文件是否可执行取决于文件扩展名（`.exe`、`.bat`、`.cmd` 等）和 ACL 设置。MSVC 的 `_access()` 可能将 X_OK 等价于 F_OK 处理。

四个 access 常量的值遵循位掩码设计：F_OK=0、X_OK=1、W_OK=2、R_OK=4，可通过按位或任意组合。注意：WPS 当前未提供 `accessSync` 方法，此常量目前无法实际使用。对应 Node.js `fs.constants.X_OK`。
