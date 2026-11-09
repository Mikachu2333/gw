# Env.GetDownloadPath

获取当前用户的下载目录路径。

## 语法

```typescript
function GetDownloadPath(): string
```

express   一个代表 **Env** 对象的变量。

## 返回值

下载目录路径。

## 说明

Windows 上通常为 `C:/Users/{user}/Downloads`，Linux/macOS 上为 `~/Downloads`（或根据 XDG 配置）。
