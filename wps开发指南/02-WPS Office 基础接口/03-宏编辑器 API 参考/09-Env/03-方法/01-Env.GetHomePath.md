# Env.GetHomePath

获取当前用户的主目录路径。

## 语法

```typescript
function GetHomePath(): string
```

express   一个代表 **Env** 对象的变量。

## 返回值

用户主目录路径。

## 说明

Windows 上返回 `C:/Users/{username}`，Linux 上返回 `/home/{username}`，macOS 上返回 `/Users/{username}`。
