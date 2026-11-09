# Env.GetTempPath

获取系统临时目录路径。

## 语法

```typescript
function GetTempPath(): string
```

express   一个代表 **Env** 对象的变量。

## 返回值

临时目录路径。

## 说明

返回操作系统的临时文件目录。Windows 上通常为 `C:/Users/{user}/AppData/Local/Temp`，Linux 上为 `/tmp`，macOS 上为 `/var/folders/...` 或 `/tmp`。路径使用正斜杠分隔。适合用于创建临时文件，如中间计算结果、导出缓存等。
