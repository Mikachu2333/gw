# Env.GetDesktopPath

获取当前用户的桌面目录路径。

## 语法

```typescript
function GetDesktopPath(): string
```

express   一个代表 **Env** 对象的变量。

## 返回值

桌面目录路径。

## 说明

Windows 上通常为 `C:/Users/{user}/Desktop`，Linux 上为 `~/Desktop`（或根据 `XDG_DESKTOP_DIR` 配置），macOS 上为 `/Users/{user}/Desktop`。
