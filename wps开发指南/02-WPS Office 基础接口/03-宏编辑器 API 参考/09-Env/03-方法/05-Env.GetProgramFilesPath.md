# Env.GetProgramFilesPath

获取 Program Files 目录路径（Windows 专用）。

## 语法

```typescript
function GetProgramFilesPath(): string
```

express   一个代表 **Env** 对象的变量。

## 返回值

Program Files 目录路径。

## 说明

读取 `ProgramFiles` 环境变量，Windows 上通常为 `C:/Program Files`。在 Linux/macOS 上返回空字符串。
