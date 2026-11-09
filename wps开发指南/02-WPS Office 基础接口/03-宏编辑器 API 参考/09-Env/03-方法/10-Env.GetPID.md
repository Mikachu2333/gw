# Env.GetPID

获取当前 WPS 进程的进程 ID。

## 语法

```typescript
function GetPID(): number
```

express   一个代表 **Env** 对象的变量。

## 返回值

进程 ID（整数）。

## 说明

Windows 上使用 `GetCurrentProcessId()`，Linux/macOS 上使用 `getpid()`。返回的进程 ID 在进程存活期间唯一。可用于构建唯一的临时文件名、进程间通信标识、或日志记录。
