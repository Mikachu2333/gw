# Env.GetAppDataPath

获取用户应用程序数据目录路径（Windows 专用）。

## 语法

```typescript
function GetAppDataPath(): string
```

express   一个代表 **Env** 对象的变量。

## 返回值

AppData 目录路径，Linux/macOS 上可能返回空字符串。

## 说明

读取 `APPDATA` 环境变量，Windows 上通常为 `C:/Users/{user}/AppData/Roaming`。在 Linux/macOS 上此环境变量通常不存在，返回空字符串。路径中的反斜杠被替换为正斜杠。
