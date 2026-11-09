# Env.GetProgramDataPath

获取 ProgramData 目录路径（Windows 专用）。

## 语法

```typescript
function GetProgramDataPath(): string
```

express   一个代表 **Env** 对象的变量。

## 返回值

ProgramData 目录路径。

## 说明

读取 `ALLUSERSPROFILE` 环境变量，Windows 上通常为 `C:/ProgramData`。在 Linux/macOS 上返回空字符串。`ALLUSERSPROFILE` 用于存储所有用户共享的应用程序数据。
