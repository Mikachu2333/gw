# FSConstants.W_OK

文件访问常量：测试文件是否有写权限。

## 语法

express.**W_OK**

express   一个代表 **FSConstants** 对象的变量。

## 类型

number，只读。

## 说明

值为 2（来自 POSIX `<unistd.h>` 中的 `W_OK`）。在 POSIX 标准中用于 `access(path, W_OK)` 系统调用。在 Linux/macOS 上检查调用进程是否对文件有写权限。对于目录，写权限意味着可以在目录中创建和删除文件。注意只读文件系统（如 CD-ROM 挂载）上即使权限位允许写入也会被拒绝。

在 Windows 上，MSVC 的 `_access()` 对 W_OK 检查文件是否没有只读属性，但不考虑 ACL——一个没有只读属性但被 ACL 拒绝写入的文件，`_access(path, W_OK)` 仍可能返回成功，这与实际写入行为不一致。POSIX 标准明确指出 `access()` 存在 TOCTOU（Time-of-Check Time-of-Use）竞态条件——检查和实际操作之间权限可能改变。

注意：WPS 当前未提供 `accessSync` 方法，此常量目前无法实际使用。对应 Node.js `fs.constants.W_OK`。
